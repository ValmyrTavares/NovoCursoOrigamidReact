import React from 'react'

const useFetch = ()=>{
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    
    async function request(url, option){
        let response;
        let json
    try{
        setError(null)
        setLoading(true)
        response = await fetch(url);
        json = await response.json();
       setData(json)
      
    } catch(erro){
        setError("Erro")
    }finally{
        setLoading(false);
        return response, json
    }
    }
    
    
    return{data, error, loading, request}
}
export default useFetch;