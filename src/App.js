import React, { Fragment } from 'react'





const App = () => {
 const ativo = false;

  return (
      <Fragment>      
        <button disabled={!ativo}>{ativo ? 'Ativo': 'Inativo'}</button>
      </Fragment>
  )
}
export default App;