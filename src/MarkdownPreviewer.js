import React, { Component } from "react";
import marked from "marked";
import insane from "insane";
import Header from "./Header";
import Footer from "./Footer";
import "./MarkdownPreviewer.css";

export default class MarkdownPreviewer extends Component {
  static defaultProps = {
    placeholderMarkdown: `# Start with a Main Heading
## Then a sub-heading
### More headings are always useful, right?

Short code cnippets, \`<div></div>\`, go between two backticks.

\`\`\`
// Multi-line code is fenced into code blocks:

  <Markdown>
    {props.currentMarkdown}
  </Markdown>
\`\`\`
  
Use **bold** for emphasis, not _italics_, and never **_both_**.

What's the shortcut for ~~crossing out text~~?

Markdown handles [links](https://www.freecodecamp.com) pretty easily, and images too 
![React Logo w/ Text](https://goo.gl/Umyytc)

> It also does blockquotes

And even tables:

| Feature   | Supports |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |

- You can have lists.
  - Unordered lists.
     - With different indentation levels.
        - That look like this.


1. And also numbererd lists.
1. Did you know you can just use 1s if you want?
1. But Markdown will keep counting
`
  };
  constructor(props) {
    super(props);
    this.state = {
      currentMarkdown: this.props.placeholderMarkdown,
      copied: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearMarkdown = this.clearMarkdown.bind(this);
  }

  clearMarkdown() {
    this.setState({
      currentMarkdown: ""
    });
  }

  handleChange(e) {
    this.setState({
      currentMarkdown: e.target.value
    });
  }

  render() {
    // Render carriage returns as line breaks
    marked.setOptions({
      breaks: true
    });
    return (
      <div className="MarkdownPreviewer">
        <Header
          clearMarkdown={this.clearMarkdown}
          currentMarkdown={this.state.currentMarkdown}
          copied={this.state.copied}
        />
        <main className="markdown-main">
          <textarea
            name="markdown"
            id="editor"
            className="markdown-input"
            value={this.state.currentMarkdown}
            onChange={this.handleChange}
          ></textarea>
          <div
            className="markdown-preview"
            id="preview"
            dangerouslySetInnerHTML={{
              __html: insane(marked(this.state.currentMarkdown))
            }}
          ></div>
        </main>
        <Footer />
      </div>
    );
  }
}
