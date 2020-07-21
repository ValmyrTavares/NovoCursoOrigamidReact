import React, { Fragment } from 'react'



const App = ()=>{
  const [dados, setDados] = React.useState(null)

  React.useEffect (() =>{
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
    .then((response) => response.json())
    .then((json) => setDados(json))
  },[])
 
  return (
    <Fragment>  
      {dados && 
      <p style={{color:'blue', fontSize:"30px"}}>{dados.nome}</p>   
}
    </Fragment>
  )
}

export default App;

