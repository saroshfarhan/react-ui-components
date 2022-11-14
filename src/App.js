import "./App.css";
import Chat from "./components/Chat";
import Bestsellers from "./components/Bestsellers";
import React from "react";
import NewCard from "./components/NewCard";
import Profile from "./components/Profile";
import Creditcard from "./components/Creditcard";

function App() {
  return (
    <main className="container mx-auto my-10 px-4 md:px-0 lg:px-0 lg:flex lg:gap-5 lg:flex-wrap">
        <Chat />
        <Bestsellers />
        <NewCard />
        <Profile />
        <Creditcard />
    </main>
  );
}

export default App;
