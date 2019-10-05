import React from "react";
import MarkdownPreviewer from "./MarkdownPreviewer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-title">
        <h1>Preview Your Markdown</h1>
      </header>
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
