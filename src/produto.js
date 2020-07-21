import React from 'react'

const Produto = ({dados})=>{
    return(
    <React.Fragment>
        <h1>{dados.nome}</h1>
        <p>R${dados.preco}</p>
        <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </React.Fragment>
    )
    //Uma atenção especial ao .src e .titulo que vem depois da imagem e do alt

}
export default Produto;