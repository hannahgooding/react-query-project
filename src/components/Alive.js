import React from "react";
import { useQuery } from "react-query";

const fetchAlive = async () => {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/?status=alive"
  );
  return res.json();
};

function Alive() {
  // Making a fetch request using the React Query library hook: useQuery
  // useQuery needs to be called with a unique key and an async function
  // it also takes an object as the third argument which has custom config for the fetch request
  const { data, status } = useQuery("alive", fetchAlive, {
    onSuccess: () => console.log("data fetched successfully"),
  });
  // useQuery calls the fetchAlive function and then manages the fetching without having to call the function again later
  // You can destructure the info returned from useQuery e.g. status to conditionally render components based on the query status

  return (
    <>
      <h2>Alive</h2>
      {status === "error" && <p>There was an error fetching the data.</p>}
      {status === "loading" && <p>Loading the data...</p>}
      {status === "success" && (
        <ul>
          {/* data.results returns some duplicate characters so need a new object with just the unique character names */}
          {[...new Set(data.results.map((character) => character.name))].map(
            (name) => (
              <li key={name}>{name}</li>
            )
          )}
        </ul>
      )}
    </>
  );
}

export default Alive;
