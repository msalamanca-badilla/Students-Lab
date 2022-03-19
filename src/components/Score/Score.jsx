import React from "react";
import Student from "../Student/Student.jsx";

export default function Score(props){
    return(
        <div className="score">
            {props.studentItem.map(s=>s.scores.map(c=><Student score={c.score} />))}
        </div>
    )
}