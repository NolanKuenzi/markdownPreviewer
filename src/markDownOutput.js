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
			<div className="markDownElements" id="preview"><h3 id="outputHeader">Markdown Output</h3><div dangerouslySetInnerHTML={{__html: marked(this.props.text)}}></div></div>
		);
	}
}

export { MarkDownOutput }




