import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  { name: "Desktop", traffic: 400, fill: "#1c64f2" },
  { name: "Tablet", traffic: 300, fill: "#fdba8c" },
  { name: "Mobile", traffic: 300, fill: "#31C48D" },
];

// #endregion
export default function PieChartWithPaddingAngle({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart responsive>
        <Pie
          data={data}
          innerRadius="50%"
          outerRadius="100%"
          fill="#8884d8"
          dataKey="traffic"
          name="name"
          isAnimationActive={isAnimationActive}
        />
        <Tooltip />

        <RechartsDevtools />
      </PieChart>
    </ResponsiveContainer>
  );
}
