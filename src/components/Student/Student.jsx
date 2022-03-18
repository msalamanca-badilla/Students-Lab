import React from "react";

export default function Student(props){
    return(
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Bio: {props.bio}</h3>
        </div>
    )
}