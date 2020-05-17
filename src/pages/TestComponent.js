import React from 'react';
import axios from 'axios';
class TestComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            user : "admin"
        }
    }
    success(){
        // axios.post(
        //     'http://localhost:5000/users/add',
        //     { username: 'v47v' },
        //     { headers: { 'Content-Type': 'application/json' } }
        //   ).then(res => alert("success"));
        axios.get('http://localhost:5000/users/')
        .then(response => {
            const data = response.data;
            for(let d of data)
            {
                if(d.username=='Vignesh'){
                    alert(d.password);
                }
            }
        })
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.success()}>success!</button>
            </div>
        )
    }
}

export default TestComponent;