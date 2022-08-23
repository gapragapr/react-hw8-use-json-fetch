import React from 'react'
import useJsonFetch from '../../Hooks/useJsonFetch/useJsonFetch'

export default function GetError(){
    const [data, isLoading, error] = useJsonFetch('http://localhost:7070/error', {method: 'GET'})

    return (
        <div className="err">
            <h2>Error</h2>
            <p>data: {data}</p>
            <p>{isLoading}</p>
            <p>error: {error}</p>
        </div>
    )
}