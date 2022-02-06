import React, { useState } from "react";
import axios from "axios";

const CreateForm = () => {
    const [userName,setuserName] = useState("");
    const [password,setpassword] = useState("");

    const changeUserName = (e) => {
        console.log("In changeUserName:"+e.target.value);
        setuserName(e.target.value);
    };
    const changePassword = (e) =>{
        setpassword(e.target.value);
    };

    const submitThisForm = (e) => {
        e.preventDefault();
        console.log("in Submit Form Function "+userName+"-"+password);
        const response = loginUser({userName,password});
        console.log("response is:"+response);
    };
    

    return (
        <>
        <form method="get" onSubmit={submitThisForm}>
            <div>
                <h1>This is a Login Form</h1>
            </div>
            <div>
                <input type="text" placeholder="User Name" onChange={changeUserName} value={userName}/> 
                <input type="text" placeholder="Password" onChange={changePassword} value={password}/>
                <input type="submit" value="Submit Me" />
            </div>
        </form>
        </>
    );
};

async function loginUser(credentials)
{
    try {
        const res = await axios.get(
            "http://3.129.16.163:8080/api/users",
            {
                headers: {'Content-Type': 'application/json'},
                method: 'GET'
            }
        );

        const responce = res.data;
        //setCovidData(responce.countries_stat);
        //setCovidStats(responce.world_total);
        //console.log("in loginUser responce "+responce.get.);
    } catch (err) {
        console.log(err);
    }
}

async function loginUser1(credentials) {
    //body: JSON.stringify(credentials)
    debugger;
    const returnData = fetch('http://localhost:8080/api/users', {
        // mode:'no-cors',
       method: 'GET',
       headers: {'Content-Type': 'application/json'}
     }).then(data => data.json()).then(data => JSON.parse(JSON.stringify(data)));
     console.log("returnData1 :"+ returnData);
    return returnData;
   }

   function handleResponse(response) {
    return response.json()
       .then(text => {
         if (!response.ok) {
            const error = (response && response.message) || response.statusText;
            throw new Error(error);
         } else {
            const data = text && JSON.parse(text);
            return data;
         }
       });
  }

export default CreateForm;