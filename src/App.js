import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [stl, setStl] = useState("");

  useEffect(() => {
    const headers = {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    };

    async function getSTL() {
      try {
        const response = await axios.get("http://localhost:8000/stl", headers);
        console.log(response);
        setStl(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getSTL();
  }, []);

  return <div className="App">{stl}</div>;
}

export default App;
