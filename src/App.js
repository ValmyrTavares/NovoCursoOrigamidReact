import React, { Fragment } from 'react'
import Produto from './produto'


const App = ()=>{

  const botao = {
    color:'red',
    padding:'15px 20px',
    background:'blue',
    margin:'5rem',
    borderRadius:'5px'
  }
  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  async function handleClick(event){
    setCarregando(true)
   const response = await fetch(`https:ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
   const json = await response.json();
   setDados(json)
   setCarregando(false)
  }
  return (
    <Fragment>
      <button style={botao}onClick={handleClick}>NoteBook</button>
      <button style={botao}onClick={handleClick}>Smartphone</button>
      <button style={botao}onClick={handleClick}>Tablet</button>
      {carregando && <p>Carregando</p>}
     {!carregando && dados && <Produto dados={dados}/>}
    </Fragment>
  )
}

export default App;

