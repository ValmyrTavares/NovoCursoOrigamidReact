import React from 'react'
import useFetch from './useFetch'



const App = ()=>{

  const {request, data, loading, error} = useFetch();

  React.useEffect(()=> {
    request('https://ranekapi.origamid.dev/json/api/produto')
  }, [])


  if(error)return <p>{error}</p>
  if(loading)return <p>Carregando...</p>
  if(data)
    return (    
      <div>

    {data.map((produto)=> (<h1 key={produto.id}>{produto.nome}</h1> ))}
      </div>
    );
  else return null;
}


export default App;
  
    


   

