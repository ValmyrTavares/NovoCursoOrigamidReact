import React from 'react'

const ButtonModal = ({setModal})=>{
    return(
        <React.Fragment>
            <button onClick={()=> setModal(true)}>
                Abrir
            </button>
        </React.Fragment>

    )
}
export default ButtonModal;