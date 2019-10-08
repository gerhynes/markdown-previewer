import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import "./MarkdownPreviewer.css";

export default class MarkdownPreviewer extends Component {
  static defaultProps = {
    placeholderMD: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
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
      md: this.props.placeholderMD
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      md: e.target.value
    });
  }

  render() {
    return (
      <div className="MarkdownPreviewer">
        <textarea
          name="markdown"
          id="markdown-input"
          className="markdown-input"
          value={this.state.md}
          onChange={this.handleChange}
        ></textarea>
        {/* <div className="markdown-preview"> */}
        <Markdown options={{ forceBlock: true }} className="markdown-preview">
          {this.state.md}
        </Markdown>
        {/* </div> */}
      </div>
    );
  }
}
