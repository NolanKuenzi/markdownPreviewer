import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { About } from './about.js';
import { MarkDownOutput } from './markDownOutput.js';

class Previewer extends React.Component {
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

function Main() {
  return (
  <div id="Main">
    <Switch>  
      <Route exact path="/" component={Previewer} />
      <Route path="/Previewer" component={Previewer} />
      <Route path="/About" component={About} />
    </Switch>
  </div>
  );
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      input: false
    });
  }
  render() {
    //       {this.state.input ? <Previewer /> : null}
   return (
    <div id="headerDiv">
      <ul id="nB0">
      <li class="nB0Item"><Link onClick={this.handleClick} to="/Previewer">Previewer</Link></li>
      <li class="nB0Item"><Link onClick={this.handClick} to="/About">About</Link></li>
      </ul>

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