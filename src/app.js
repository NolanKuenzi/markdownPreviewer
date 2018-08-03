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
      <div id="mdpDiv">
        <div className="markDownDivs" id="input">
        <h3 className="input_Output" id="markDownInputHeader">Markdown Input</h3>
       <div><textarea id="editor" onChange={this.handleInput} value={this.state.editor}></textarea></div>
       </div>
       <MarkDownOutput text={this.state.editor} /> 
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
      header: true
    }
  this.headerSwitch = this.headerSwitch.bind(this);
  }
    headerSwitch() {
      if (this.state.header === true) {
        this.setState({
          header: false
        });
      } else {
        this.setState({
          header: true
        })
      }
    }
    render() {
      return (
        <div id="headerDiv">
          <ul id="nB0">
            <li class="nB0Item"><Link onClick={this.headerSwitch} to="/Previewer">Previewer</Link></li>
            <li class="nB0Item"><Link onClick={this.headerSwitch} to="/About">About</Link></li>
          </ul>
           <h2 id="header">{this.state.header ? "Markdown Previewer" : null}</h2>
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