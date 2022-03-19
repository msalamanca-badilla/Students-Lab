import React from "react";

export default function Student(props){
    return(
        <div className="Student">
            {props.studentItem.map(m =>
            <div>
                <h3>{m.name}</h3>
                <p>{m.bio}</p>
                {props.studentItem.map(s=>s.scores.map(c=>
                <table>
                    <tr>            
                        <th>Date</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>{c.date}</td>
                        <td>{c.score}</td>
                    </tr>
                </table>
                ))}
            </div>
            )}
            {/* {props.studentItem.map(s=>s.scores.map(c=><div><h1>{c.score}</h1> </div>))} */}
        </div>
    )
}