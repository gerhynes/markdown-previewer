import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="Header">
      <div
        className={`menu-btn ${props.isMenuOpen ? "close" : ""}`}
        onClick={props.toggleMenu}
      >
        <div className="menu-btn__line"></div>
        <div className="menu-btn__line"></div>
        <div className="menu-btn__line"></div>
      </div>
      <nav className="header-nav">
        <div className={`header-left ${props.isMenuOpen ? "show" : ""}`}>
          <button className="clear-btn" onClick={props.clearMarkdown}>
            Clear Markdown
          </button>
          <CopyToClipboard text={props.currentMarkdown}>
            <button className="copy-btn">Copy to clipboard</button>
          </CopyToClipboard>
        </div>
        <div className="header-center">
          <h1 className="app-title ">Preview Your Markdown</h1>
        </div>
        <div className={`header-right ${props.isMenuOpen ? "show" : ""}`}>
          <a
            href="https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="GitHub-link"
          >
            GitHub Markdown Cheatsheet
          </a>
        </div>
      </nav>
    </header>
  );
}
