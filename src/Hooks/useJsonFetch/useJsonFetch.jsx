import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function useJsonFetch(url, opt){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null);

    useEffect(() => {
        // const asyncFetch = async() => {
        //     const response = await fetch(url, opt)
        //     console.log(response)
        //     if (!response.ok){
        //         return setErr(response.statusText), setData(`none response data`)
        //     }

            

        // }

        const asyncFetch = async () => {
            await fetch(url, opt)
                .then((response) => {
                    if (!response.ok){
                        return setErr(response.statusText), setData(`none response data`)
                    }
                    return response.json()
                })
                .then((responseData) => {
                    if (responseData){
                        return setIsLoading(false), setData(JSON.stringify(responseData)), setErr('none response errors')
                        
                    }
                })
        }
        asyncFetch()
    }, [])

    return [data, isLoading, err]
}