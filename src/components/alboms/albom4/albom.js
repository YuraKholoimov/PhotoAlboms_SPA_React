import React, {Component} from 'react'

import './albom.module.scss'

export default class Albom4 extends Component{

    constructor(props){
        super(props);
        this.state = {
            header: null,
            id: null,
            name: props.name,
            url: props.url
            
        }
    }
    

    showDescripton() {
        return (
            console.log("Hi")
        )
        
    }

    discroption() {
        const {header, id, url} = this.state;
        return (
            <div>
                {header},{id},{url}
            </div>
        )
    }

    render(props) {
        const {header, id, url, name} = this.state;

        return (
            <div className="container">
                <div className="card">
                    <img src={url} 
                    onMouseOver={this.showDescripton}
                    onClick={this.discroption}
                    alt="#"/>
                    <div className="card__head">
                        <a href={url}>{name}</a>
                    </div>
                </div>
                
            </div>
        )

    }
    
}