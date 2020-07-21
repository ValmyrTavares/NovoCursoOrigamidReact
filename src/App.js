import React, { Fragment } from 'react'

const Luana = {
    cliente: 'Mario',
    idade: 27,
    compras:[
        {nome:"Nonebook", preco: 'R$ 2500'},
        {nome:"Geladeira", preco: 'R$ 3000'},
        {nome:"Smartphone", preco: 'R$ 1500'},       
    ],
    ativa: true
}


const Mario = {
    cliente: 'Mario',
    idade: 31,
    compras:[
        {nome:"Nonebook", preco: 'R$ 2500'},
        {nome:"Geladeira", preco: 'R$ 3000'},
        {nome:"Smartphone", preco: 'R$ 1500'},
        {nome:"Guitarra", preco: 'R$ 3500'},
    ],
    ativa: false
}

const App = () => {
  
  const dados = Mario;
  const compras = dados.compras
  .map((item)=>  Number( item.preco.replace("R$", "")))
  .reduce((a, b)=> a + b)
     


      function soma(){
        compras.replace((x, y)=>{
            return x + y
        })
    }
    console.log(compras)
    

  return (
      <Fragment>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade} anos</p>
        <p>Situação: <span style={{color: dados.ativa ? 'green': 'red'}}> {dados.ativa===true ?  "Ativa": "Inativa"}</span></p>
        <p>Total de gastos {compras}</p>
        <p>{compras>10000 && "Vc está gastnado demais"}</p>

      </Fragment>
  )
}
export default App;