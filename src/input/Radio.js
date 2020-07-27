import React from 'react'

function Radio({options, value, setValue, ...props}) {
    return (
        <>
        {options.map((option)=> (
               <lable key={option}>
               <input type="radio" value={option} checked={value ===option} onChange={({target})=> setValue(target.value)}/>
               {option}
               </lable>
        ))}
         
        </>
    )
}

export default Radio
