import { Line } from '@antv/g2plot';
//create line plot
function Plot() {
  const data = [
    { week: '1', position: -1500, score: 100 },
    { week: '2', position: -1350, score: 150 },
    { week: '3', position: -1100, score: 170 },
    { week: '4', position: -1000, score: 200 },
    { week: '5', position: -1050, score: 210 },
    { week: '6', position: -900, score: 250 },
    { week: '7', position: -1100 , score: 260},
    { week: '8', position: -1000 , score: 270},
    { week: '9', position: -1200 , score: 275},
    { week: '10', position: -1000, score: 350 },
    { week: '11', position: -1100, score: 360 },
    { week: '12', position: -900, score: 470 },
  ];
 
  // console.log(data);
  //config for plot
  const line = new Line('plot', {
    data: data,
    height: 300,
    width:400,
    padding: 'auto',
    xField: 'week',
    yField: 'position',
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
    smooth: true,
    point: {},
  });
  
  return  line;
}
export default Plot
