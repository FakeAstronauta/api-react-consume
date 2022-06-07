import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

/* 
para introducir valores en el formulario desde react debo de almacenarlos dentro de un useState-objeto y 
llamar cada clave dentro del parametro value del campo que le corresponda
*/
function PutForm() {
  console.log("rendered")
  let [data, setData] = useState({});
  
  let handleTitle = (event) => {
    data.title = event.target.value;
  }
  
  let handleBody = (event) => {
    data.body = event.target.value;
  }

  let handleId = (event) => {
    data.userId = event.target.value;
  }

  let handleSubmit = (event) => {
    event.preventDefault();

    /* axios.put('https://jsonplaceholder.typicode.com/posts', {
      title: obj.title,
      body: obj.body,
      userId: obj.userId
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); */
   
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <label>
        Title:
        <input  value={data.body} type="text" id='title' name='title' onChange={(e) => handleTitle(e)} />
      </label>
      <label>
        Body:
        <input type="text" id='body' name='body' onChange={(e) => handleBody(e)} />
      </label>
      <label>
        Id de usuario:
        <input type="text" id='body' name='body' onChange={(e) => handleId(e)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default PutForm;
