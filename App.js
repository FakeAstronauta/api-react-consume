import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

/** 
 * el use state sobreescribe su contenido cada vez que se usa el método, aunque exista un método dentro 
 * no se puede usar el use state con el onChange ya que renderiza nuevamente la pagina
 * */ 
function App() {
  console.log("rendered")
  // when should I implement useState?
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
    // FormData is a good alternative to get info from a form
    // https://react-hook-form.com/
    /* let form = new FormData(event.target);

    let data = {
      title: form.get('title'),
      body: form.get('body'),
    }; */

    console.log(data);

    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: obj.title,
      body: obj.body,
      userId: obj.userId
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <label>
        Title:
        <input type="text" id='title' name='title' onChange={(e) => handleTitle(e)} />
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

export default App;
