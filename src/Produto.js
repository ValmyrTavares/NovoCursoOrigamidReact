import React from  'react'
import {GlobalContext} from './GlobalContext'


const Produto = ()=>{
   const global = React.useContext(GlobalContext)
   console.log(global)
  
return(<div>
    {global.contar}
    <button onClick={global.adicionarUm}>Contar Um</button>
    <button onClick={global.adicionarDois}>Contar Dois</button>
    </div> )
}
export default Produto;