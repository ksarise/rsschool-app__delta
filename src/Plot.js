import { Line } from '@antv/g2plot';
//create line plot
function Plot() {
  const data = [
    { week: '1', position: -1500, score: 200 },
    { week: '2', position: -1150, score: 450 },
    { week: '3', position: -1000, score: 470 },
    { week: '4', position: -900, score: 520 },
    { week: '5', position: -1000, score: 520 },
    { week: '6', position: -650, score: 580 },
    { week: '7', position: -900, score: 590},
    { week: '8', position: -1000, score: 600},
    { week: '9', position: -800, score: 605},
    { week: '10', position: -600, score: 640 },
    { week: '11', position: -500, score: 645 },
    { week: '12', position: -400, score: 700 },
  ]
  // console.log(data);
  //config for plot
  const line = new Line('plot', {
    data: data,
    height: 300,
    width: 400,
    padding: 'auto',
    xField: 'week',
    yField: 'position',
    seriesField: 'score',
    lineStyle: {
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      cursor: 'pointer',
    },
    xAxis: {
      nice:true,
      title: {
        text: 'Week',
        position: "mid",
        style: {
          fontSize: 16,
        },
      }
    },
    yAxis: {
      nice:true,
      title: {
        text: 'Position',
        position: "mid",
        style: {
          fontSize: 16,
        },
      },
    },
    
    annotations: [
      {
        type: 'regionFilter',
        start: ['min', -700],
        end: ['max', '0'],
        color: 'gold',
      },
      {
        type: 'text',
        position: ['min', -800],
        content: '70% border',
        offsetY: -4,
        style: {
          textBaseline: 'top',
          fill: 'gold',
        },
      },
      {
        type: 'line',
        start: ['min', -700],
        end: ['max', -700],
        style: {
          stroke: 'gold',
          lineDash: [2, 2],
        },
      },
    ],
    smooth: true,
    point: {},
  });
  
  return  line;
}
export default Plot
