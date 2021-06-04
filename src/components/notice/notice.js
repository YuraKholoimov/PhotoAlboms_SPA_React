import React from 'react'
import { NavLink } from 'react-router-dom'
import "./notice.css"
// import { BrowserRouter } from 'react-router-dom';
// import Albom1 from "../alboms/albom1"

// const mes = new Albom1();

const NoteItem = (props) => {
    
    return (  
        <div>
            <div className="navLinkBlock">
               <NavLink to={"/notice/" + props.id}>{props.id}</NavLink>
            </div>
            {props.note}
        </div>
    )
    
}

const Notice =()=> {
    const noties = [
        {id: 1, note: "One" },
        {id: 2, note: "Two"},
        {id: 3, note: "Three"},
        {id: 4, note: "Fore"},
        {id: 5, note: "Five"}
       ]
       const message = noties.map( message => <NoteItem id={message.id} note={message.note} />)

    return (
        <div>
            {message}
        </div>
    )
}

export default Notice;