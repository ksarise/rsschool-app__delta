import { LineChart } from '@opd/g2plot-react'
import { useCallback, useRef, useState, useEffect } from 'react'

const config = {
  height: 300,
  width: 400,
  xField: "week",
  yField: "position",
  smooth: true,
  lineStyle: {
    shadowColor: "black",
    shadowBlur: 10,
    shadowOffsetX: 5,
    shadowOffsetY: 5,
    cursor: "pointer",
  },
  xAxis: {
    nice: true,
    title: {
      text: "Week",
      position: "mid",
      style: {
        fontSize: 16,
      },
    },
  },
  yAxis: {
    nice: true,
    title: {
      text: "Position",
      position: "mid",
      style: {
        fontSize: 16,
      },
    },
  },
  meta: {
    value: {
      max: 15,
    },
  },
}

export default  () => {
  const getChart = useCallback((chart) => {
    console.log(chart)
  }, [])

  const [data, setData] = useState([
    { week: "1", position: -1500, score: 200 },
  ])
  const newData = [
    { week: "1", position: -1500, score: 200 },
    { week: "2", position: -1150, score: 450 },
    { week: "3", position: -1000, score: 470 },
    { week: "4", position: -900, score: 520 },
    { week: "5", position: -1000, score: 520 },
    { week: "6", position: -650, score: 580 },
    { week: "7", position: -900, score: 590 },
    { week: "8", position: -1000, score: 600 },
    { week: "9", position: -800, score: 605 },
    { week: "10", position: -600, score: 640 },
    { week: "11", position: -500, score: 645 },
    { week: "12", position: -400, score: 700 },
  ];
  const i = useRef(0);
  
  useEffect(() => {
    let timer = setInterval(function run() {
      let deltaLocal = 0;
      setData((items) => {
       

      //select elements to display changes
      const DELTA = document.querySelector<HTMLElement>(".delta");
      const POSITION = document.querySelector(".position");
      const SCORE = document.querySelector(".score");
      const UP_ARROW = document.querySelector(".up-arrow");
      const DOWN_ARROW = document.querySelector(".down-arrow");
      const MINUS = document.querySelector(".minus");

      //compare changes
      // deltaLocal! = newData[i.current].position - data[i.current].position;
      
      if (!newData[i.current - 1]) {
        deltaLocal = 0;
      } else {
        deltaLocal = newData[i.current].position - newData[i.current - 1].position;
      }
      POSITION!.textContent = `${-newData[i.current].position}/1888`;
      SCORE!.textContent = `${newData[i.current].score}/1373`;

      //condition for delta arrows
      if (deltaLocal > 0) {
        DELTA!.textContent = deltaLocal.toString();
        MINUS!.classList.remove("show");
        DOWN_ARROW!.classList.remove("show");
        UP_ARROW!.classList.add("show");
        DELTA!.style.color = "green";
      } else if (deltaLocal < 0) {
        DELTA!.textContent = deltaLocal.toString();
        MINUS!.classList.remove("show");
        UP_ARROW!.classList.remove("show");
        DOWN_ARROW!.classList.add("show");
        DELTA!.style.color = "red";
      } else {
        DELTA!.textContent = "";
        MINUS!.classList.add("show");
        UP_ARROW!.classList.remove("show");
        DOWN_ARROW!.classList.remove("show");
        DELTA!.style.color = "gray";
      }

      //update data for re-render
      let last = newData[i.current];
      let retData = items.concat(last!);
      if (i.current === 11) {
        clearInterval(timer);
        i.current = 0;
        items.splice(0, items.length);
        items.concat(newData[i.current]);
        retData = items;
      }
      return retData;
        
      })
      i.current += 1;
    }, 2000);

    return () => clearInterval(timer); 
  }, [data]);

  return (
      <LineChart
        {...config}
        chartRef={getChart}
        data={data}
      />
  )
}