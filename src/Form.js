import React from "react";
import Input from "./input/Input";
import Select from "./input/Select"
import CheckBox from "./input/CheckBox";
import Radio from "./input/Radio";


function Form() {
const [nome, setNome] = React.useState("")
const [email, setEmail] = React.useState("")
const [produto, setProduto] = React.useState("")
const [materia, setMateria] = React.useState("")
const[fruta, setFruta] = React.useState("")
const[cor, setCor] = React.useState("")
const[pais, setPais] = React.useState("")

 

  return (
    <>
    <Radio options={["melancia","Pera","Maçã","Melão"]} value={fruta} setValue={setFruta}/>
    <Radio options={["vermelho","Preto","Azul","Verde"]} value={cor} setValue={setCor}/>
    <CheckBox setValue={setMateria} value={materia} options={["Harmonia", "ContraPonto","Composição","Regência"]} />
   <Input id="nome" label="Nome" value={nome} setValue={setNome} placeholder="Nome" />
   <Input id="email" label="E-mail" value={email} setValue={setEmail} placeholder="Email" />
   <Input id="pais" label="País" value={pais} setValue={setPais} placeholder="País" />
   <Select value={produto} setValue={setProduto} options={['Saramago','Machado de Assis','João Guimarães Rosa','Carlos Drumond de Andrade','Manoel Bandeira']}/>
   
  <p>{nome}</p>
  <p>{email}</p>
  <p>{produto}</p>
  <p>{materia}</p>
  <p>{fruta}</p>
  <p>{pais}</p>

  </>
   
  )
  }

export default Form;