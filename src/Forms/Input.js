import React from 'react'

const Input = ({label,id})=>{
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} name={id}/>
        </div>
    )
}
export default Input;