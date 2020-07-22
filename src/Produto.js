import React from  'react'
import {GlobalContext} from './GlobalContext'


const Produto = ()=>{
   const global = React.useContext(GlobalContext)
   console.log(global)
   function handleClick(){
       global.setContar(global.contar= global.contar + 1)
   }
return(<div>
    {global.contar}
    <button onClick={handleClick}>Contar</button>
    </div> )
}
export default Produto;