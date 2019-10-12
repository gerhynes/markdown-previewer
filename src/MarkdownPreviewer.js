import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import Header from "./Header";
import Footer from "./Footer";
import "./MarkdownPreviewer.css";

export default class MarkdownPreviewer extends Component {
  static defaultProps = {
    placeholderMarkdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

> Blockquote

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.

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
            id="markdown-input"
            className="markdown-input"
            value={this.state.currentMarkdown}
            onChange={this.handleChange}
          ></textarea>
          <Markdown options={{ forceBlock: true }} className="markdown-preview">
            {this.state.currentMarkdown}
          </Markdown>
        </main>
        <Footer />
      </div>
    );
  }
}
