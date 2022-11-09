import React, { useState } from 'react'

export const useFetch = () => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const request = React.useCallback(
        async(url, options) =>{
            let res
            let json

            try{
                setError(null)
                setLoading(true)
                res = await fetch(url, options)
                json = await res.json()
                if(res.ok === false) throw new Error(json.message)
            } catch (err) {
                json = null
                setError(err.message)
            } finally {
                setData(json)
                setLoading(false)
                return {res, json}
            }
        }, [])

  return {
    data,
    error,
    loading,
    request
  }
}
