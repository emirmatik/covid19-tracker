import React from "react";
import { Grid, CardContent, Typography, Card } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { Global }, date, country }) => {
  if (!Global && !country.TotalConfirmed) {
    return "Loading..";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={11}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color={"textSecondary"}>Infected</Typography>
            <Typography variant={"h5"}>
              <CountUp
                start={0}
                end={
                  country.TotalConfirmed
                    ? country.TotalConfirmed
                    : Global.TotalConfirmed
                }
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color={"textSecondary"}>
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant={"body2"}>
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={11}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color={"textSecondary"}>Recovered</Typography>
            <Typography variant={"h5"}>
              {" "}
              <CountUp
                start={0}
                end={
                  country.TotalConfirmed
                    ? country.TotalRecovered
                    : Global.TotalRecovered
                }
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color={"textSecondary"}>
              {" "}
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant={"body2"}>
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={11}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color={"textSecondary"}>Deaths</Typography>
            <Typography variant={"h5"}>
              {" "}
              <CountUp
                start={0}
                end={
                  country.TotalConfirmed
                    ? country.TotalDeaths
                    : Global.TotalDeaths
                }
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color={"textSecondary"}>
              {" "}
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant={"body2"}>
              Number of Deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
