import { useState } from 'react';
import axios from 'axios';
import './App.css'

export default function App() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("myFile", file);

    console.log(file);
    axios.post("http://localhost:3001/api/uploadfile", formData, {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      },
    });
  }

  return (
    <div className="App">
      <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleSubmit}>Upload</button>
      </div>
    </div>
  )
};
