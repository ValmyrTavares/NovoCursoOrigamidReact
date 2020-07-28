import React from "react";
import Radio from "./input/Radio";

const App = () => {
 const [comp, setComp]= React.useState("")
 const [pagina, setPagina] = React.useState(0)
//  const [nota, setNota] = React.useState(0)
 


  return(
   <>
   {pagina===0 &&  <Radio pergunta="Qual compositor pertence ao Romantismo" options={["Beethoven","Vivaldi","Bartok","Chopin"]} setValue={setComp} 
   value={comp}/>}  
   {pagina===1 &&  <Radio pergunta="Qual a nocionalidade de Antônio Vivaldi" options={["Alemanha","Italia","Brasil","Etiópia"]} setValue={setComp} value={comp}/> }  
   {pagina===2 &&  <Radio pergunta="Qual o principal instrumento de Chopin" options={["Piano","Cítara","Violino","Flauta"]} setValue={setComp} value={comp}/> }  
   {pagina===3 &&  <Radio pergunta="Quantas sinfonias Beethovem compôs" options={["2","3","12","9"]} setValue={setComp} value={comp}/> }  


   <button onClick={()=> setPagina(pagina + 1)}>Resonder</button>
 
   {pagina}
  </>
  )
};

export default App;
