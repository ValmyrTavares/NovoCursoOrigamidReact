import React from 'react'


const App = ()=>{
  const [form, setForm] = React.useState({
    nome: '',
    email:'',
    idade: undefined
  })

  function handleChange({target}){
    const {id, value} = target
   setForm({...form, [id]: value})
    console.log(id, value)
  }
  
    return (    
      <div>
        <form >
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type='text' value={form.nome} onChange={handleChange}/>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type='text' value={form.email} onChange={handleChange}/>
          <label htmlFor="idade">Idade</label>
          <input id="idade" name="idade" type='number' value={form.idade} onChange={handleChange}/>
          <p>{form.email}</p>
          <p>{form.nome}</p>
          <p>{form.idade}</p>
          <button>Enviar</button>
        </form>


      </div>
    );
 
}


export default App;
  
    


   

