import React from 'react'

const Message = (props) => {
    return (
        <>
        {props.desc}
        </>
    )
}



const Notice = () => {
    return (
        <div>
        <Message desc="its desc..."/>
        <Message desc="its desc..."/>
        </div>

    )
}

export default Notice;