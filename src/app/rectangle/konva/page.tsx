"use client";

import { KonvaEventObject, Node, NodeConfig } from "konva/lib/Node";
import { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";

export default function KonvaPage() {
  const [message, setMessage] = useState("-");
  const [rectangles, setRectangles] = useState([
    { id: 1, x: 50, y: 60, width: 100, height: 80, fill: "red" },
    { id: 2, x: 200, y: 150, width: 100, height: 80, fill: "blue" },
    { id: 3, x: 450, y: 300, width: 100, height: 80, fill: "green" },
  ]);

  const handleDragMove = (
    e: KonvaEventObject<DragEvent, Node<NodeConfig>>,
    id: number
  ) => {
    const newRectangles = rectangles.map((rect) =>
      rect.id === id ? { ...rect, x: e.target.x(), y: e.target.y() } : rect
    );

    let msg = "";
    // 重複判定
    const targetRect = e.target.getClientRect();
    newRectangles.forEach((rect) => {
      if (rect.id !== id) {
        const otherRect = {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
        };
        if (
          targetRect.x < otherRect.x + otherRect.width &&
          targetRect.x + targetRect.width > otherRect.x &&
          targetRect.y < otherRect.y + otherRect.height &&
          targetRect.y + targetRect.height > otherRect.y
        ) {
          msg += `Rectangle ${id} overlaps with Rectangle ${rect.id}\n`;
        } else {
          msg += "-\n";
        }
      }
    });

    setRectangles(newRectangles);
    setMessage(msg);
  };
  return (
    <>
      メッセージ
      <section style={{ whiteSpace: "pre-line" }}>{message}</section>
      図形
      <section>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            {rectangles.map((rect) => (
              <Rect
                key={rect.id}
                x={rect.x}
                y={rect.y}
                width={rect.width}
                height={rect.height}
                fill={rect.fill}
                draggable
                onDragMove={(e) => handleDragMove(e, rect.id)}
              />
            ))}
          </Layer>
        </Stage>
      </section>
    </>
  );
}
