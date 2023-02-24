import React from 'react';
// import {props} from 'react';

const User=(props)=>{
    console.warn(props.data);
    return(
        <div>
           <h1>{props.data.name}</h1>
           <h2>{props.data.age}</h2>
        </div>
    )
}


export default User;