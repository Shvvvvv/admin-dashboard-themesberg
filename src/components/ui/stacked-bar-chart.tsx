import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  { day: "Monday", users: 90 },
  { day: "Tuesday", users: 120 },
  { day: "Wednesday", users: 150 },
  { day: "Thursday", users: 110 },
  { day: "Friday", users: 180 },
  { day: "Saturday", users: 220 },
  { day: "Sunday", users: 160 },
];

// #endregion
const StackedBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value: string) => value.charAt(0)}
          fontSize={12}
        />
        <Tooltip />
        <Bar
          barSize={12}
          name={"Users"}
          dataKey="users"
          fill="#2563eb"
          radius={[50, 50, 0, 0]}
          background={{
            radius: 50,
            fill: "#f3f4f6",
          }}
        />
        <RechartsDevtools />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
