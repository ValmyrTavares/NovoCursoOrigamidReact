import React from 'react'




const App = ()=>{
  

  const [cores, setCores]= React.useState(['vermelho'])   

  function handleChange({target}){
    if(target.checked){
      setCores([...cores, target.value])
      }else{
        setCores(cores.filter((cor)=> cor !==target.value))
      }
  }

   
    console.log(cores)
  

  
    return (    
      <div>
        <form  >
          <label>
            <input value="azul" checked={cores.includes("azul")} type="checkbox"  onChange={handleChange}/>
           Azul
          </label>
          <label>
            <input value="vermelho" checked={cores.includes("vermelho")}type="checkbox"  onChange={handleChange}/>
           Vermelho
          </label>
        </form>
      
     
      </div>
);

      
 
}


export default App;
  
    


   

