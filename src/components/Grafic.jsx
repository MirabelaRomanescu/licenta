import { Bar } from "react-chartjs-2";
import React from "react";

const Grafic = ({ data }) => {
  const chartData = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Glicemie",
        data: (!!data? data : [0,0,0,0,0,0,0]),
        backgroundColor: "hsl(164, 47%, 45%)",
      },
    ],
  };

  return (
    <>
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Ultimele măsuratori de glicemie",
            fontSize: 22,
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </>
  );
};

export default Grafic;
