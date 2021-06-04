import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Notice from '../notice/notice';
import './albom.scss';


const Picture = (props) => {

    return (
        <div className="card">
            <img src={props.url} alt="#"/>
            <div  className="card__head" ><NavLink to={"/notice/" + props.id}>{props.title}</NavLink></div>
        </div>
    )
}


export default class Albom1 extends Component{
    
    state = {
       data: [
        {id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg", title: "Plotting Cat" },
        {id: 2, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg", title: "Angry Cat" },
        {id: 3, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG", title: "Curious Cat" },
        {id: 4, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg", title: "Prowling Cat" },
        {id: 5, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg", title: "Sleepy Cat" }
       ],
       noties: [
        {id: 1, note: "One" },
        {id: 2, note: "Two"},
        {id: 3, note: "Three"},
        {id: 4, note: "Fore"},
        {id: 5, note: "Five"}
       ]
    } 

    getMessage() {
        const message = this.state.noties.map(message => <Notice id={message.id} note={message.note} />)
        return message
    }

    showAllPicture() {
        const dataBLL = this.state.data.map( el => <Picture url={el.url} title={el.title} id={el.id}/>)
        return dataBLL
    }

    render() {
        return (
            <div className="container">
                {this.showAllPicture()}
            </div>
        )
    }
}

const ryy = new Albom1();
console.log(ryy.getMessage())