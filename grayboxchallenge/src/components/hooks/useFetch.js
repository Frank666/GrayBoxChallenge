import { useState, useEffect } from 'react'

export const useFetch = url => {
    const [state, setState] = useState({ data: null, loading: true });
    useEffect(() => {
        setState(state => ({ data: state.data, loading: true }));
        fetch(url)
            .then(response => response.json() )
            .then(result => { console.log(result); setState({ data: result, loading: false }) })            
        .catch(function(error) {  
            console.log('Request failed, please check the url and the API', error)  
        })
    }, [url, setState]);    
    return state;
};