// ! IMPORTS
import { useState } from "react";
import AsteroidData from "./Components/AsteroidData";
import DatePicker from "./Components/DatePicker";
import Error404 from "./Components/404";
import useFetch from "./Hooks/useFetch";
import format from "date-fns/format";

function App() {
  // ! Setting the state

  const [startDate, setStartDate] = useState(() =>
    format(new Date(), "yyyy-MM-dd")
  );
  const [endDate, setEndDate] = useState("");

  // ! useFetch hook

  const { data, loading, error } = useFetch(startDate, endDate);

  // ! callback from getting the dates from DatePicker and updating the state.

  const pullDate = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="App">
      {error && <Error404 />}
      <div className="wrapper">
        {!error && <DatePicker func={pullDate} />}
        {loading && (
          <div className="loading-container">
            <h2>Loading Data</h2>
            <div className="loading-spinner"></div>
          </div>
        )}
        {data && !loading && <AsteroidData data={data} />}
      </div>
    </div>
  );
}

export default App;
