import React from "react";
import Alive from "./components/Alive";
import Dead from "./components/Dead";
import Unknown from "./components/Unknown";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  const [page, setPage] = React.useState("Alive");

  return (
    <>
      <div className="App">
        <h1>Ricky and Morty Characters</h1>
        <nav>
          <button onClick={() => setPage("Alive")}>Alive</button>
          <button onClick={() => setPage("Dead")}>Dead</button>
          <button onClick={() => setPage("Unknown")}>Unknown</button>
        </nav>
        <main>
          {page === "Alive" && <Alive />}
          {page === "Dead" && <Dead />}
          {page === "Unknown" && <Unknown />}
        </main>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
