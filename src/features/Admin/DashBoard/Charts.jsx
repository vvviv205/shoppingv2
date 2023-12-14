import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Charts({ type, data, title }) {
  return (
    <div
      className={`${
        type === "pie" ? "h-fit" : "h-[250px] sm:h-[500px]"
      } w-[100%] bg-white dark:bg-gray-800 p-1 flex flex-col justify-center sm:p-5 rounded-lg shadow-lg`}
    >
      <header className="px-3 py-3 flex justify-between">
        <h1 className="text-2xl font-semibold dark:text-white">{title}</h1>
        <select
          name=""
          className="ring-0 dark:bg-gray-600 dark:text-white sm:p-3 p-1"
        >
          <option value="weekly">weekly</option>
          <option value="monthly">monthly</option>
          <option value="90days">90 days</option>
          <option value="yearly">yearly</option>
        </select>
      </header>
      <br />
      {type === "pie" ? <Circle data={data} /> : <AreaCh data={data} />}
    </div>
  );
}

function Circle({ data }) {
  return (
    <ResponsiveContainer
      className="bg-white dark:bg-gray-800"
      width="100%"
      height={350}
    >
      <PieChart>
        <Pie
          data={data}
          innerRadius={"50%"}
          outerRadius={"75%"}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend align="center" verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
}

function AreaCh({ data }) {
  return (
    <ResponsiveContainer height="70%" className="relative" width="100%">
      <AreaChart data={data}>
        <XAxis dataKey="name" className="text-[8px] sm:text-base " />
        <YAxis unit="$" className="text-[8px] sm:text-base " />
        <CartesianGrid strokeDasharray="4" />
        <Tooltip />
        <Area
          dataKey="uv"
          type="monotone"
          stroke="#8884d8"
          fill="#8884d8"
          strokeWidth={2}
          unit="$"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
