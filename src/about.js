import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './app.js'

function About() {
return (
    <div id="aboutDiv">
    <Header />
    <h4>This Markdown Previewer Application renders Github flavored markdown entered into the app's Markdown Input section into HTML in the 
    app's Markdown Output section, using the Marked Library (version 0.4.0).</h4>
    <p>To use the app users simply need to enter markdown into the input section and it will apear as html in the output section. 
    Several examples of markdown are provided in the previewer when the page first loads, however, if users would like to learn about more of 
    the many features available to this Github flavored markdown or learn about markdown more generally they can refer <a href="https://github.github.com/gfm/" target="_blank">here.</a></p>
    </div>   
  );
}

export { About }


