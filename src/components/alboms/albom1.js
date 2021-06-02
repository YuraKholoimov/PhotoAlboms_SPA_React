import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './albom.scss';


const Picture = (props) => {

    return (
        
            <div className="card">
                <img src={props.url} 
                alt="#"/>
                <div className="card__head" ><NavLink to={"/notice/" + props.id}>{props.title}</NavLink>
                </div>
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
       ]  
    } 

    render() {
        // const {id, url, title} = this.state.data;

        return (
            <div className="container">
                <Picture url={this.state.data[0].url}
                    title={this.state.data[0].title}
                    id={this.state.data[0].id}/>

                <Picture url={this.state.data[1].url}
                    title={this.state.data[1].title}
                    id={this.state.data[1].id}/>

                <Picture url={this.state.data[2].url}
                    title={this.state.data[2].title}
                    id={this.state.data[2].id}/>

                <Picture url={this.state.data[3].url}
                    title={this.state.data[3].title}
                    id={this.state.data[3].id}/>

                <Picture url={this.state.data[4].url}
                    title={this.state.data[4].title}
                    id={this.state.data[4].id}/>
            </div>
        )
    }
    
}