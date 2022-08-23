import React from 'react'
import useJsonFetch from '../../Hooks/useJsonFetch/useJsonFetch'

export default function GetLoading(){
    const [data, isLoading, error] = useJsonFetch('http://localhost:7070/loading', {method: 'GET'})

    return (
        <div className="loading">
            <h2>Loading</h2>
            <p>data: {data}</p>
            <p>{isLoading}</p>
            <p>error: {error}</p>
        </div>
    )
}