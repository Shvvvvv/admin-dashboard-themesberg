import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  { time: "12:00 PM", sales: 300, profit: 220 },
  { time: "01:00 PM", sales: 260, profit: 210 },
  { time: "02:00 PM", sales: 320, profit: 260 },
  { time: "03:00 PM", sales: 380, profit: 300 },
  { time: "04:00 PM", sales: 340, profit: 280 },
  { time: "05:00 PM", sales: 420, profit: 350 },
];

// #endregion
const SimpleBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        barCategoryGap={10}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey={"time"} hide />
        <Tooltip />
        <Bar dataKey="sales" barSize={12} name={"Sales"} fill="#2563eb" radius={16} />
        <Bar dataKey="profit" barSize={12} name={"Profit"} fill="#fb923c" radius={16} />
        <RechartsDevtools />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
