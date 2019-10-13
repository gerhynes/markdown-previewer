import React from "react";
import marked from "marked";
import insane from "insane";
import "./Preview.css";

export default function Preview(props) {
  // Render carriage returns as line breaks
  marked.setOptions({
    breaks: true
  });
  return (
    <div
      className="markdown-preview"
      id="preview"
      dangerouslySetInnerHTML={{
        __html: insane(marked(props.currentMarkdown))
      }}
    ></div>
  );
}
