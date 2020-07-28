import React from 'react'

function Radio({options, value, setValue,pergunta,  ...props}) {
    return (
        <>
            <p>{pergunta}</p>
        {options.map((option)=> (
             
               <lable key={option}>
               <input type="radio" value={option} checked={value ===option} onChange={({target})=> setValue(target.value)}/>
               {option}
               <br/>
               <br/>
               </lable>
        ))}
       
         
        </>
    )
}

export default Radio
