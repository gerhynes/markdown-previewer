import React, { Component } from "react";
import { Remarkable } from "remarkable";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import "./Preview.css";

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.getRawMarkup = this.getRawMarkup.bind(this);
  }
  getRawMarkup() {
    const md = new Remarkable("full", {
      langPrefix: "language-",
      highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (err) {}
        }

        try {
          return hljs.highlightAuto(str).value;
        } catch (err) {}

        return ""; // use external default escaping
      }
    });
    return { __html: md.render(this.props.currentMarkdown) };
  }
  render() {
    return (
      <div
        className="markdown-preview"
        id="preview"
        dangerouslySetInnerHTML={this.getRawMarkup()}
      ></div>
    );
  }
}
