import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  { time: "09:00 AM", visitors: 120 },
  { time: "10:00 AM", visitors: 180 },
  { time: "11:00 AM", visitors: 240 },
  { time: "12:00 PM", visitors: 320 },
  { time: "01:00 PM", visitors: 290 },
  { time: "02:00 PM", visitors: 360 },
  { time: "03:00 PM", visitors: 420 },
  { time: "04:00 PM", visitors: 380 },
  { time: "05:00 PM", visitors: 460 },
];

// #endregion
const SimpleAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="uvGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" hide />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="visitors"
          name="Visitors"
          stroke="#2563eb"
          fill="url(#uvGradient)"
          strokeWidth={2}
          fillOpacity={1}
        />
        <RechartsDevtools />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SimpleAreaChart;
