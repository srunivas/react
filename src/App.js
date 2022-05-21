import axios from 'axios';
import { useEffect } from 'react';
var token;
function App()
{ 
  useEffect(()=>{
    console.log("useEffect");
      async function fun()
      {
        await axios.get("http://localhost:3000/").then(function (response) {
          token = response.data;
          console.log("token = ",token);
          return token;
        })
      }
      // fun();
  },[])
  async function postData()
  {
    var config = {
      method: 'post',
      url: 'http://localhost:4000/money',
      headers: {
        'Authorization': 'Bearer '+token
      }
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  
  }
    return (
      <>
        <input placeholder="Enter Username"/>
        <input placeholder="Enter Password"/>
        <button onClick={()=>{postData()}}>Login</button>
      </>
    )
}
export default App;