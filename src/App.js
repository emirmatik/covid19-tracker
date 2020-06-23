import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import img from "./images/image.png";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: {},
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleChange = async (country) => {
    const data = await fetchData();
    const countries = data.Countries;
    if (country === "") {
      this.setState({ country: {} });
    } else {
      const myCountry = countries.find((c) => c.Country === country);

      this.setState({ country: myCountry });
    }
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.img} src={img} alt="COVID-19"></img>
        <Cards data={data} date={data.Date} country={country} />
        <CountryPicker data={data} handleChange={this.handleChange} />
        <Chart country={country} data={data} />
        <div className={styles.footer}>
          <h3>
            {" "}
            <span role="img" aria-label="footer-emote">
              ⚫
            </span>{" "}
            Designed by Emir
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
