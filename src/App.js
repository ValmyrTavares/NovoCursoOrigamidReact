import React, { Fragment } from 'react'

const App = () => {
    const carro = {
        marca:"Ford",
        rodas: 4
    }

    const estiloP = {
        color:"blue",
        border: "solid 1px black",
        fontSize: '30px'
    }
    const nome = "Andre"
    const titulo = <h1>Issso é um titulo</h1>
    function mostraNome(sobrenome){
        return "Valmyr" + sobrenome
    }
    return (
        <Fragment>
    <a href="https://www.origamid.com" title="Isso é um site">
        Origamid
        </a>
        <input type="text" id="nome"/>
        <p>{nome}</p>
        {titulo}
        {mostraNome("Lima")}
    <p>{new Date().getFullYear()}</p>
    <p style={estiloP}>{carro.marca}</p>
    <p>{carro.rodas}</p>
        </Fragment>
        )
}
export default App;