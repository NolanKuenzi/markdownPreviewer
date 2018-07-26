import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { About } from './about.js';
import { MarkDownOutput } from './markDownOutput.js';

function Header() {
  return (
    <div id="linksDiv">
      <ul id="nB0">
        <li className="nB0Item"><Link to="/">Home</Link></li>
        <li className="nB0Item"><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: "# This is a Markdown Previewer\n\n## Give it a try...\n\n### Some Markdown Examples:\n\n - **Bold Text**\n - *Italicized Text*\n - ***Bold Italicized Text***\n\nAn Image:\n\n ![](wiki_logo.svg)\n\n~~~\nFenced\nCode\nBlocks\n~~~\n\n<span style=\"color:gold\">Inline Code</span>\n\n> ### Block\n> Quotes\n\n[Learn More About Markdown](https://github.github.com/gfm/)"
    }
  this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      editor: event.target.value
    });
  }
  render() {
    return (
      <div id="containerDiv">  
      <div id="mdpDiv">
         <h2 id="header">Markdown Previewer</h2>
        <Header />
        <div className="markDownDivs" id="input">
        <h3 className="input_Output" id="markDownInputHeader">Markdown Input</h3>
        <div><textarea id="editor" onChange={this.handleInput} value={this.state.editor}></textarea></div>
        </div>
        <MarkDownOutput text={this.state.editor} />
      <div id="footer"><h4 id="footerText">Copyright © 2018 Nolan Kuenzi. Made for the freeCodeCamp Development Challenge: Build a Markdown Previewer.</h4></div>
      </div>
      </div>
    );
  }
}

class App extends React.Component {
constructor(props) {
    super(props);
    }
  render() {
    return (
      <div id="containerDiv">
        <Switch>  
          <Route exact path="/" component={MarkdownPreviewer} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export { Header }
export { App }
