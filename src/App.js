import React from 'react'




const App = ()=>{
  

  const [mensagem, setMensagem]= React.useState('')

  

  
  
    return (    
      <div>
        <form  >
         <select type="text" value={mensagem} onChange={({target}) => setMensagem(target.value) }>
           <option value='notebook'>Notebook</option>
           <option value='smartphone'>Smartphone</option>
           <option value='tablet'>Tablet</option>
           </select>
        </form>
        <p>{mensagem}</p>
      </div>
);

      
 
}


export default App;
  
    


   

