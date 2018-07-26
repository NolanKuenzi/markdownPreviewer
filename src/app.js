import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { About } from './about.js';
import { MarkDownOutput } from './markDownOutput.js';

class Header extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    home: true  
    }
  this.move = this.move.bind(this);
  }
  move(event) {
    if (event.target.id === "home") {
      this.setState({
        home: true
      });
    } 
    if (event.target.id === "abt") {
      this.setState({
        home: false
      });
    }
  }
  render() {
  return (
    <div id="headerDiv">
      <ul id="nB0">
        <li className="nB0Item"><Link id="home" onClick={this.move} to="/markdownPreviewer">Home</Link></li>
        <li className="nB0Item"><Link id="abt" onClick={this.move} to="/about">About</Link></li>
      </ul>
      <div>{this.state.home ? <MarkdownPreviewer /> : null}</div>
    </div>
    );
  }
}

function Main() {
  return (
  <div id="Main">
    <Switch>  
      <Route path="/markdownPreviewer" component={MarkdownPreviewer} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
  );
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: "# This is a Markdown Previewer\n\n## Give it a try...\n\n### Some Markdown Examples:\n\n - **Bold Text**\n - *Italicized Text*\n - ***Bold Italicized Text***\n\nAn Image:\n\n ![image](https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg)\n\n~~~\nFenced\nCode\nBlocks\n~~~\n\n<span style=\"color:gold\">Inline Code</span>\n\n> ### Block\n> Quotes\n\n[Learn More About Markdown](https://github.github.com/gfm/)"
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

function App() {
  return (
    <div>
    <Header />
    <Main />
    </div>
  );
}

export { App }
