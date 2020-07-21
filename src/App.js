import React, { Fragment } from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal'

const App = () => {
 const [modal, setModal] = React.useState(false)


  return (
    <Fragment>      
      <div>{modal ? "Modal Aberto": " Modal Fechado"}</div>
        <ButtonModal setModal={setModal} />
        <Modal modal={modal} setModal={setModal} />
    </Fragment>
  )
}
export default App;