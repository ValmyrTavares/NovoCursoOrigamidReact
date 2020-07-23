import React from 'react'

const useLocalStorage = (key, inicial) =>{
    const [state, setState] = React.useState
    const local = window.localStorage.getItem(key)
    return local ? local : inicial
}