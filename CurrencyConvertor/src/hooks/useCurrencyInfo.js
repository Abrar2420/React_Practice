import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const res = await fetch(
          `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`,
        );
        const result = await res.json();
        setData(result[currency]);
      } catch (error) {
        console.error("Error fetching currency data", error);
      }
    };
    fetchCurrency();
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
