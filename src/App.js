import React from 'react'




const App = ()=>{
  

  const [termos, setTermos]= React.useState(false)   
  
    return (    
      <div>
        <form  >
          <label>
            <input value={termos} type="checkbox" checked={termos} onChange={({target}) => setTermos(target.checked)}/>
            Aceito os termos
          </label>
        </form>
        {termos?"Está feito":"Vc precisa aceitar"}
     
      </div>
);

      
 
}


export default App;
  
    


   

