import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Autocomplete } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setfetchedCountries] = useState([]);
  useEffect(() => {
    const fetchedAPI = async () => {
      setfetchedCountries(await fetchCountries());
    };
    fetchedAPI();
  }, [setfetchedCountries]);
  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option> )}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
