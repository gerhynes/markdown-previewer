import React from "react";
import "./Editor.css";

export default function Editor(props) {
  return (
    <textarea
      name="markdown"
      id="editor"
      className="markdown-editor"
      value={props.currentMarkdown}
      onChange={props.handleChange}
    ></textarea>
  );
}
