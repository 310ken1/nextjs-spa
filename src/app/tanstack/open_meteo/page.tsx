"use client";

import styles from "./open_meteo.module.css";
import {
  TemperatureHistory,
  useWeatherHistory,
} from "@/hooks/useWeatherHistory";
import React from "react";
import { Table } from "react-bootstrap";

function TableRow({
  index,
  data,
}: Readonly<{
  index: number;
  data: TemperatureHistory;
}>): JSX.Element {
  return (
    <tr key={index}>
      <td>{index}</td>
      <td>{data.time}</td>
      <td>{data.temperature}</td>
    </tr>
  );
}
const MemoTableRow = React.memo(TableRow);

export default function WeatherPage() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate());
  const startDate = new Date();
  startDate.setFullYear(endDate.getFullYear() - 1);
  const { data } = useWeatherHistory(35.6895, 139.6917, startDate, endDate);

  return (
    <div className={styles.main}>
      気温履歴
      <div className={styles.table_wrap}>
        <Table className={styles.table} striped bordered hover>
          <thead>
            <tr>
              <th>インデックス</th>
              <th>日時</th>
              <th>気温</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d, index) => (
              <MemoTableRow key={index} index={index} data={d} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
