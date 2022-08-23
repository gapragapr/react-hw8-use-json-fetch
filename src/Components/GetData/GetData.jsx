import React from 'react'
import useJsonFetch from '../../Hooks/useJsonFetch/useJsonFetch'

export default function GetData(){
    const [data, isLoading, error] = useJsonFetch('http://localhost:7070/data', {method: 'GET'})

    return (
        <div className="data">
            <h2>Data</h2>
            <p>data: {data}</p>
            <p>{isLoading}</p>
            <p>error: {error}</p>
        </div>
    )
}