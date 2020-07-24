import React from 'react'



const coresArray = ["azul","roxo","laranja","verde","vermelho","cinza"]
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
          {coresArray.map((cor)=>  (<label key={cor}>
            <input value={cor} checked={cores.includes(cor)} type="checkbox"  onChange={handleChange}/>
           {cor}
          </label>  
          ))}       
        </form>
      </div>
);
     

      
 
}


export default App;
  
    


   

