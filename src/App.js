import React from 'react'




const App = ()=>{
  

  const [radio, setRadio]= React.useState('')

  
  function handleChange({target}){
    setRadio(target.value)
  }
  
  
    return (    
      <div>
        <form  >
         <label>
           <input type="radio" onChange={handleChange} checked={radio === "stratocaster" } value="stratocaster"/>
           Stratocaster
         </label>
         <label>
           <input type="radio" onChange={handleChange} checked={radio === "lespaul" }  value="lespaul"/>
           Les Paul
         </label>
        </form>
        <p>{radio}</p>
      </div>
);

      
 
}


export default App;
  
    


   

