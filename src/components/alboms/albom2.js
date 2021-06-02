import React from 'react'

import './albom.scss'

const Picture = (props) => {
    return (
        <div className="card">
            <img src={props.url} alt="#"/>
            <div className="card__head">{props.title}</div>
        </div>
    )
}

export default function Albom2(){
    
    return (
    <div className="container">
        <Picture url="https://images.pexels.com/photos/3990673/pexels-photo-3990673.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Xyara" />
         <Picture url="https://images.pexels.com/photos/7701079/pexels-photo-7701079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Linda Luna" />
        <Picture url="https://images.pexels.com/photos/5871215/pexels-photo-5871215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Helen Ohara" />
        <Picture url="https://images.pexels.com/photos/7914437/pexels-photo-7914437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Laura Silva" />
        <Picture url="https://images.pexels.com/photos/2205415/pexels-photo-2205415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Marcela Oliveira" />
    </div>
    )
}