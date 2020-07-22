import React from 'react'
import Product from './Product'



const App = ()=>{
  const [produto, setProduto] = React.useState(null)
  const stilo = {
    background:"green",
    padding:'15px 25px',
    color:'white',
    margin: '10px'
  }

  React.useEffect(()=>{
    const produtoLocal = window.localStorage.getItem('produto')
    if (produtoLocal!==null) setProduto(produtoLocal)
  },[])

  React.useEffect(()=>{
   if(produto !==null) window.localStorage.setItem('produto', produto)
  },[produto])

  function handleClick(event){
    setProduto(event.target.innerText)
  }
 
 
  return (
   <React.Fragment>
     <p>Esse é o {produto}</p>
     <button onClick={handleClick} style={stilo}>Smartphone</button>
     <button onClick={handleClick} style={stilo}>Notebook</button>
     <Product produto={produto} />
   </React.Fragment>
  )
  }

export default App;
  
    


   

