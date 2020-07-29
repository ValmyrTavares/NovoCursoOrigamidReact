import React from 'react'
import { useParams, Routes, Route, NavLink } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

function Produto (){
    const params = useParams();
    return (
        <div>
            <h1>Produto: {params.id}</h1>
            <nav>
                <NavLink to="">Descrição</NavLink>  
                <NavLink to="avaliacao">Avaliação</NavLink>  
                <NavLink to="customizado">Customização</NavLink>     
                
            </nav>
            <Routes>
                <Route path="/" element={<ProdutoDescricao />}></Route>
                <Route path="avaliacao" element={<ProdutoAvaliacao />}></Route>
                <Route path="customizado" element={<ProdutoCustomizado />}></Route>
            </Routes>
        </div>
    )
}

export default Produto;
