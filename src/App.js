import "./App.css";
import Chat from "./components/Chat";
import Bestsellers from "./components/Bestsellers";
import React from "react";

function App() {
  return (
    <main className="container mx-auto my-10 px-4 md:px-0 lg:px-0">
      <div>
        <Chat />
        <Bestsellers />
      </div>
    </main>
  );
}

export default App;
