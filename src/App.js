import React from "react";
import Input from "./Forms/Input";
import Select from "./Forms/Select";

const App = () => {
const [nome, setNome] = React.useState("")
const [email, setEmail] = React.useState("")
const [produto, setProduto]= React.useState('');


  return (
  <div>
    <Select options={["Paris", "Firenzi", "Roma","Buenos Aires","Mendonza","Verona"]} value={produto} setValue={setProduto}/>
    <Input id="nome" label="Nome"/>
    <Input id="email" label="Email"/>
  <p>{produto}</p>
  </div>
    )
};
export default App;
