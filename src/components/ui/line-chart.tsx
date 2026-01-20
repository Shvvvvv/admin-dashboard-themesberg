import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface TrafficData {
  date: string;
  templates: number;
  hosting: number;
}

const data: TrafficData[] = [
  { date: "2024-04-01", templates: 45000, hosting: 95000 },
  { date: "2024-04-02", templates: 82000, hosting: 70000 },
  { date: "2024-04-03", templates: 60000, hosting: 150000 },
  { date: "2024-04-04", templates: 160000, hosting: 120000 },
  { date: "2024-04-05", templates: 140000, hosting: 60000 },
  { date: "2024-04-06", templates: 185000, hosting: 90000 },
  { date: "2024-04-07", templates: 110000, hosting: 65000 },
];

const formatNumber = (value?: number | string) => {
  if (typeof value !== "number") return "-";
  return `${(value / 1000).toFixed(0)}K`;
};

const TrafficLineChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 16, right: 24, left: 0, bottom: 16 }}
        className="text-xs"
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickMargin={16}
          tickFormatter={(value: string) =>
            new Date(value).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
            })
          }
        />

        <YAxis axisLine={false} tickLine={false} tickMargin={16} tickFormatter={formatNumber} />

        <Tooltip
          formatter={(value?: number | string) => formatNumber(value)}
          labelFormatter={(label: string) =>
            new Date(label).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          }
        />

        {/* Templates */}
        <Line
          type="monotone"
          dataKey="templates"
          name="Templates"
          stroke="#2563eb"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
        />

        {/* Hosting */}
        <Line
          type="monotone"
          dataKey="hosting"
          name="Hosting"
          stroke="#fb923c"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrafficLineChart;
