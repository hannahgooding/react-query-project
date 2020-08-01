import React from "react";
import { useQuery } from "react-query";

const fetchDead = async () => {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/?status=dead"
  );
  return res.json();
};

function Dead() {
  const { data, status } = useQuery("dead", fetchDead);

  return (
    <>
      <h2>Dead</h2>
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

export default Dead;
