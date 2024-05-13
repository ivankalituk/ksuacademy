import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Стили Quill
import './textEditor.scss'

class TextEditor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
      };
    }

    modules = {
      toolbar: [
        [{ 'header': '1' }, { 'header': '2' }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image',],
        ['clean'],
        [{'align': ''},{'align': 'center'},{'align': 'right'}],
      ],
    };
  
    formats = [
      'header', 'bold', 'italic', 'underline', 'strike',
      'list', 'bullet', 'link', 'image', 'align' 
    ];
  
    // handleTextChange = (value) => {
    //   this.setState({ text: value });
    //   this.props.onTextChange(value);
    // }
  
    render() {
      return (
        <div className="editorStyle">
          <ReactQuill
            value={this.state.text}
            // onChange={this.handleTextChange}
            modules={this.modules}
            formats={this.formats}
            style={{height: "300px"}}
          />
        </div>
      );
    }
  }
  
export default TextEditor