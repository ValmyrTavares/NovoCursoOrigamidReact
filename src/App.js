import React from 'react'
import UserContext from './UserContext'
import Produto from './Produto'



const App = ()=>{

  return (
  
     <UserContext.Provider value={{value: "Andre"}}>
      <Produto />
     </UserContext.Provider>    
 
  )
  }

export default App;
  
    


   

