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

  let newData = [{ week: '1', position: -1500, score: 200 }]
  // console.log(data);
  //config for plot
  const line = new Line('plot', {
    data: newData,
    height: 300,
    width: 400,
    renderer: 'svg',
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
  
  //as herself
  let deltaLocal;
  let i = 0;

  //timer function to update data step by step
  function setTimer (delay) {
    let timer = setInterval(function run() {
      //select elements to display changes
      const DELTA = document.querySelector(".delta");
      const POSITION = document.querySelector(".position");
      const SCORE = document.querySelector(".score");
      const UP_ARROW = document.querySelector(".up-arrow");
      const DOWN_ARROW = document.querySelector(".down-arrow");
      const MINUS = document.querySelector(".minus");
      
      //update data and compare changes
      deltaLocal = data[i].position - newData[i].position;
      newData.push(data[i]);

      //update plot
      line.changeData(newData);

      POSITION.textContent = `${-newData[i].position}/1888`
      SCORE.textContent = `${newData[i].score}/1373`
      
      //condition for delta arrows
      if (deltaLocal > 0) {
        DELTA.textContent = deltaLocal;
        MINUS.classList.remove("show");
        DOWN_ARROW.classList.remove("show");
        UP_ARROW.classList.add("show");
        DELTA.style.color = "green";
      } else if (deltaLocal < 0){
        DELTA.textContent = deltaLocal;
        MINUS.classList.remove("show");
        UP_ARROW.classList.remove("show");
        DOWN_ARROW.classList.add("show")
        DELTA.style.color = "red";
      } else {
        DELTA.textContent = "";
        MINUS.classList.add("show");
        UP_ARROW.classList.remove("show");
        DOWN_ARROW.classList.remove("show")
        DELTA.style.color = "gray";
      }

      // console.log('data', newData, data, "shift", deltaLocal);
      i += 1;
      
      //loop it
      if (i === 12) {
        clearInterval(timer);

        i = 0;
        newData =[]
        newData = [{ week: '1', position: -1500, score: 200 }];
        
        setTimer (2000);
      }
    }, delay);
  }
  setTimer(2000);

  return  line;
}
export default Plot;
