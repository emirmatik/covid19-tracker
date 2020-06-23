import React from "react";
import styles from "./Chart.module.css";
import { Bar } from "react-chartjs-2";

const Chart = ({ data: { Global }, country }) => {
  if (!Global) {
    return "Loading..";
  }

  let countryName = "Global";

  if (country.Country) {
    countryName = country.Country;
  }

  const barChart = (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              country.TotalConfirmed
                ? country.TotalConfirmed
                : Global.TotalConfirmed,
              country.TotalConfirmed
                ? country.TotalRecovered
                : Global.TotalRecovered,
              country.TotalConfirmed ? country.TotalDeaths : Global.TotalDeaths,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${countryName}` },
      }}
    />
  );

  return <div className={styles.container}>{barChart}</div>;
};

export default Chart;
