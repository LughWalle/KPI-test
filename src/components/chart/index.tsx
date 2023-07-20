'use client'
import { ChartProps } from "@/types";
import { ResponsiveLine } from "@nivo/line";

const Chart: React.FC<ChartProps> = ({ title, legend, data }) => {
  const series = [
    {
      id: legend,
      data: data.map((point) => ({ x: point.x, y: point.y })),
    },
  ];


  console.log('no chart', data);


  return (
    <>
      <h2>{title}</h2>
      <ResponsiveLine
        data={data.length ? series : [{ id: '', data: [{ x: '', y: 0 }]}] }
        // curve="monotoneX"
        // animate
        // margin={{
        //   bottom: 60,
        //   left: 80,
        //   right: 20,
        //   top: 20
        // }}
        // xScale={{
        //   type: 'linear',
        //   min: 0,
        //   max: 'auto'
        // }}
        // axisLeft={{
        //   legend: legend,
        //   legendOffset: 12
        // }}
        // axisBottom={{
        //   legend: 'Mês/ano',
        //   legendOffset: -12
        // }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        // pointSize={10}
        // pointColor={{ theme: 'background' }}
        // pointBorderWidth={2}
        // pointBorderColor={{ from: 'serieColor' }}
        // pointLabelYOffset={-12}
        // useMesh={true}
        // legends={[
        //   {
        //     anchor: 'bottom-right',
        //     direction: 'column',
        //     justify: false,
        //     translateX: 100,
        //     translateY: 0,
        //     itemsSpacing: 0,
        //     itemDirection: 'left-to-right',
        //     itemWidth: 80,
        //     itemHeight: 20,
        //     itemOpacity: 0.75,
        //     symbolSize: 12,
        //     symbolShape: 'circle',
        //     symbolBorderColor: 'rgba(0, 0, 0, .5)',
        //     effects: [
        //       {
        //         on: 'hover',
        //         style: {
        //           itemBackground: 'rgba(0, 0, 0, .03)',
        //           itemOpacity: 1
        //         }
        //       }
        //     ]
        //   }
        // ]}
      />
    </>
  );
};

export default Chart;
