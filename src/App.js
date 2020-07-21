import React, { Fragment } from 'react'



const App = ()=>{
  const [contar, setContar] = React.useState(0)

  React.useEffect (() =>{
    console.log("Executou")
  },[contar])
 
  return (
    <Fragment>
      <button onClick={()=>setContar(contar + 1)}>Clique aqui</button>
      <p>{contar}</p>
   
    </Fragment>
  )
}

export default App;

