import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (startDate, endDate) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    // ! API key is safely stored on a backend server.
    const options = {
      method: "GET",
      url: "https://asteroid-tracker-api.vercel.com",
      params: { start_date: startDate, end_date: endDate },
    };

    axios
      .request(options)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [startDate, endDate]);

  return { data, loading, error };
};

export default useFetch;
