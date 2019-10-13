import React, { Component } from "react";
import Header from "./Header";
import Editor from "./Editor";
import Preview from "./Preview";
import Footer from "./Footer";
import "./MarkdownPreviewer.css";

export default class MarkdownPreviewer extends Component {
  static defaultProps = {
    placeholderMarkdown: `# Start with a Main Heading
## Then a sub-heading
### More headings are always useful, right?

Short code snippets, \`<div></div>\`, go between two backticks.

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
      isMenuOpen: false,
      copied: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.clearMarkdown = this.clearMarkdown.bind(this);
  }

  toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
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
    const { currentMarkdown, isMenuOpen, copied } = this.state;
    return (
      <div className="MarkdownPreviewer">
        <Header
          clearMarkdown={this.clearMarkdown}
          currentMarkdown={currentMarkdown}
          copied={copied}
          isMenuOpen={isMenuOpen}
          toggleMenu={this.toggleMenu}
        />
        <main className={`markdown-main ${isMenuOpen ? "menu-open" : ""}`}>
          <Editor
            currentMarkdown={currentMarkdown}
            handleChange={this.handleChange}
          />
          <Preview currentMarkdown={currentMarkdown} />
        </main>
        <Footer />
      </div>
    );
  }
}
