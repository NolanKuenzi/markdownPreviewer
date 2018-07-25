import React from 'react';
import ReactDOM from 'react-dom';
import marked from "marked";

marked.setOptions({
  breaks: true,
});
class MarkDownOutput extends React.Component {
	constructor(props) {
		super(props);
	}
  	render() {
		return (
			<div className="markDownDivs" id="output">
			<div id="markdownOutputHeader"><h3 className="input_Output">Markdown Output</h3></div>
			<div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.text)}}></div>
			</div>
		);
	}
}

export { MarkDownOutput }
