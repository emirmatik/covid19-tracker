import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ data: { Countries }, handleChange }) => {
  if (!Countries) {
    return "loading";
  }
  return (
    <FormControl className={styles.container}>
      <NativeSelect onChange={(e) => handleChange(e.target.value)}>
        <option className={styles.option} value="">
          Global
        </option>
        {Countries.map((country, i) => (
          <option key={i} value={country.Country}>
            {country.Country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
