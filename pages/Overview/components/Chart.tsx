import { Cell, Pie, PieChart } from 'recharts';

type ChartProps = {
  data: { label: string; value: number }[];
};

const colorPalette = ['#277C78', '#82C9D7', '#F2CDAC', '#626070'];
export const Chart = ({ data }: ChartProps) => {
  return (
    <PieChart width={240} height={240}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="label"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={100}
        stroke="none"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={colorPalette[index % colorPalette.length]} />
        ))}
      </Pie>
      <Pie
        data={data}
        dataKey="value"
        nameKey="label"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={70}
        opacity={0.8}
        stroke="none"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={colorPalette[index % colorPalette.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};
