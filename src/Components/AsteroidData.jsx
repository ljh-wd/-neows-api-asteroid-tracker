const AsteroidData = ({ data }) => {
  const dates = Object.values(data["near_earth_objects"]);

  return (
    <table>
      <thead>
        <tr>
          <th>Asteroid Name</th>
          <th>Magnitude</th>
          <th>Close approach</th>
          <th>Hazardous</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapping through the dates, then mapping through each asteroid within the returned dates */}
        {dates.map((date) =>
          date.map((asteroid) => (
            <tr
              key={asteroid["id"]}
              className={
                asteroid["is_potentially_hazardous_asteroid"]
                  ? "dangerous"
                  : "safe"
              }
            >
              <td>{asteroid["name"]}</td>
              <td>{asteroid["absolute_magnitude_h"]}</td>

              <td>
                {asteroid["close_approach_data"][0]["close_approach_date"]}
              </td>
              <td>
                {asteroid["is_potentially_hazardous_asteroid"].toLocaleString()}{" "}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AsteroidData;
