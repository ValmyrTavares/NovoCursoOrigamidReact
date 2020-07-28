import React from "react";
import RadioDesafio from "./FormDesafio/RadioDesafio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes",
    options: [
      "React.makeComponent()",
      "React.createComponent",
      "React.createElement",
    ],
    resposta: "React.createComponent",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo",
    options: [
      'import Component from "./Component',
      'require("./Component")',
      'import " ./Component',
    ],
    resposta: 'import Component from "./Component',
    id: "p2",
  },
  {
    pergunta: "Qual o Hook não é nativo",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavras devem ser utilizadas para criad um hook",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [respostas, setRespostas]= React.useState({
    p1:'',
    p2:'',
    p3:'',
    p4:'',

  })
  const [slide, setSlide]= React.useState(0)
  const [resultado, setResultado]=React.useState(null)

  function handleChange({target}){
    setRespostas({...respostas, [target.id]: target.value})
  }
   function resultadoFinal(){
    console.log("Final")
    const corretas = perguntas.filter(({id, resposta})=> respostas[id] ===resposta)
    setResultado(`Voce acertou: ${corretas.length} de ${perguntas.length}`)
    console.log(corretas)
   }


  function handleClick(){
    if(slide < perguntas.length - 1){
      setSlide(slide + 1)
    }else{
      setSlide(slide + 1)
      resultadoFinal()
    }
  }



  return (
    <>
      <form onSubmit={(event) =>event.preventDefault() }>
        {perguntas.map((pergunta, index)=>(
          <RadioDesafio
          active={slide===index}
           key={pergunta.id} 
           value={respostas[pergunta.id]} 
           onChange={handleChange} 
           {...pergunta} />

        ))}
        {resultado ? <p>{resultado}</p> :  <button onClick={handleClick}>Próxima</button>}
       
      </form>
    </>
  );
};

export default App;
