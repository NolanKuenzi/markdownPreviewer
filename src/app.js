import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { About } from './about.js';
import { MarkDownOutput } from './markDownOutput.js';

function Header() {
  return (
    <div id="headerDiv">
      <ul id="nB0">
        <li class="nB0Item"><Link to="/Previewer">Previewer</Link></li>
        <li class="nB0Item"><Link to="/About">About</Link></li>
      </ul>
      <h2 id="header">Mardown Previewer</h2>
    </div>
  );
}

function Footer() {
  return (
  <h4>Copyright © 2018 Nolan Kuenzi. Made for the freeCodeCamp Development Challenge: Build a Markdown Previewer.</h4>
  );
}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: "\n\n# This is a Markdown Previewer\n\n## Give it a try...\n\n### Some Markdown Examples:\n\n - **Bold Text**\n - *Italicized Text*\n - ***Bold Italicized Text***\n\nAn Image:\n\n ![image](https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg)\n\n~~~\nFenced\nCode\nBlocks\n~~~\n\n<span style=\"color:gold\">Inline Code</span>\n\n> ### Block\n> Quotes\n\n[Learn More About Markdown](https://github.github.com/gfm/)"
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
        <Header />
        <div className="markDownDivs" id="input">
        <h3 className="input_Output" id="markDownInputHeader">Markdown Input</h3>
       <div><textarea id="editor" onChange={this.handleInput} value={this.state.editor}></textarea></div>
       </div>
       <MarkDownOutput text={this.state.editor} /> 
       <div id="footer"><Footer /></div>
      </div>
    );
  }
}

function App() {
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

export { Header }
export { Footer }
export { App }
