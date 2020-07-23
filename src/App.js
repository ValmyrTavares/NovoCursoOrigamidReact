import React from 'react'




const App = ()=>{
  

  const [mensagem, setMensagem]= React.useState('')

  

  
  
    return (    
      <div>
        <form  >
         <textarea type="text" value={mensagem} onChange={({target}) => setMensagem(target.value) }/>
        </form>
        <p>{mensagem}</p>
      </div>
);

      
 
}


export default App;
  
    


   

