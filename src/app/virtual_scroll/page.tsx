"use client";

import { useWeatherData } from "@/lib/open_meteo_hooks";
import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export default function WeatherPage() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate());
  const startDate = new Date();
  startDate.setFullYear(endDate.getFullYear() - 1);
  const { data } = useWeatherData(35.6895, 139.6917, startDate, endDate);

  const parentRef = React.useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: data?.length || 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 25,
  });
  return (
    <>
      仮想スクロール
      <div
        ref={parentRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
      >
        <table
          style={{
            position: "relative",
            height: `${rowVirtualizer.getTotalSize()}px`,
          }}
        >
          <thead>
            <tr>
              <th>インデックス</th>
              <th>日時</th>
              <th>気温</th>
            </tr>
          </thead>
          <tbody>
            {rowVirtualizer.getVirtualItems().map((virtualRow) => (
              <tr
                key={virtualRow.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <td>{virtualRow.index}</td>
                <td>{data![virtualRow.index][0]}</td>
                <td>{data![virtualRow.index][1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
