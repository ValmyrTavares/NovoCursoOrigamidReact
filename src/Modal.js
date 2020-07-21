import React from 'react'

const Modal = ({modal, setModal})=>{
    return(
        <React.Fragment>
            <div>
                Esse é um modal .
                <button onClick={()=> setModal(false)}>Fecha</button>
            </div>
        </React.Fragment>

    )
}
export default Modal;