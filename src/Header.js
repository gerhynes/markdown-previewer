import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <div className="header-left">
        <button className="clear-btn">Clear Markdown</button>

        <a
          href="https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="GitHub-link"
        >
          GitHub MD Cheatsheet
        </a>
      </div>
      <div className="header-center">
        <h1 className="app-title ">Preview Your Markdown</h1>
      </div>
      <div className="header-right"></div>
    </header>
  );
}
