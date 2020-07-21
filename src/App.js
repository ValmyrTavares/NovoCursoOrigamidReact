import React, { Fragment } from 'react'
import Home from './desafio/Home'
import Produtos from './desafio/Produtos'
import Header from './desafio/Header'




const App = () => {
  const {pathname} = window.location;
  let Pagina;
  if(pathname==='/')
 { Pagina = Home
}else{
  Pagina = Produtos
}

  return (
      <Fragment>
        <Header/>
        <Pagina/>
      
      
      </Fragment>
  )
}
export default App;