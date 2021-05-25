import React, {Component} from 'react'
import Albom from './albom4/albom'

import './albom.scss'

export default class Albom4 extends Component{
    
 

    render() {
     

        return (
            <>
            <Albom name="New York" url="https://cdn.pixabay.com/photo/2020/06/06/06/44/new-york-5265414_1280.jpg"/>
            <Albom name="Impire State" url="https://cdn.pixabay.com/photo/2015/12/08/00/40/empire-state-building-1081929_1280.jpg"/>
            <Albom name="Liberty Statue" url="https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_1280.jpg"/>
            <Albom name="Brooklyn Bridge" url="https://cdn.pixabay.com/photo/2013/04/16/14/22/brooklyn-bridge-105079_960_720.jpg"/>
            <Albom name="Washington Bridge" url="https://cdn.pixabay.com/photo/2017/02/25/17/38/george-washington-bridge-2098351_1280.jpg"/>
            </>
        )
    } 
}