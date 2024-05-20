import React, { Component } from 'react';
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Стили Quill
import './textEditor.scss'
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';

Quill.register("modules/imageUploader", ImageUploader)

class TextEditor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: props.lection_contnent || '<p>empty</p>',
        lection_id: props.lection_id
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
      imageUploader: {
        upload: file => {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("photo", file);
            formData.append("lection_id", this.state.lection_id)
  
            fetch(
              "http://localhost:1000/lection/photo",
              {
                method: "POST",
                body: formData
              }
            )
              .then(response => response.json())
              .then(result => {
                console.log(result);
                resolve(result.imageUrl);
              })
              .catch(error => {
                reject("Upload failed");
                console.error("Error:", error);
              });
          });
        }
      }
    };
  
    formats = [
      'header', 'bold', 'italic', 'underline', 'strike',
      'list', 'bullet', 'link', 'image', 'align' 
    ];
  
    handleTextChange = (value) => {
      this.setState({ text: value });
      this.props.onTextChange(value);
    }
  

    
    render() {
      return (
        <div className="editorStyle">
          <ReactQuill
            value={this.state.text}
            onChange={this.handleTextChange}
            modules={this.modules}
            formats={this.formats}
            style={{height: "300px"}}
          />
        </div>
      );
    }
  }
  
export default TextEditor