import React from "react";
import Input from "./Forms/Input";
import Select from "./Forms/Select";
import Radio from "./Forms/Radio";

const App = () => {
const [nome, setNome] = React.useState("")
const [email, setEmail] = React.useState("")
const [produto, setProduto]= React.useState('');
const [cor, setCor] = React.useState('')


  return (
  <div>
    <Radio  options={["Azul","Vermelho"]} value={cor} setValue={setCor}/>
    <Select options={["Paris", "Firenzi", "Roma","Buenos Aires","Mendonza","Verona"]} value={produto} setValue={setProduto}/>
    <Input id="nome" label="Nome"/>
    <Input id="email" label="Email"/>
  <p>{produto}</p>
  </div>
    )
};
export default App;
