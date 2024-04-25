import { useEffect, useState } from "react"

export const useFetchRequest = ({fetchFunc, key}) => {

    const [data, setData] = useState(null)
    const [isFeching, setIsFecching] = useState(false)

    useEffect(() =>{
        fetchFunc().then((fechedData) => {
            setData(fechedData)
            setIsFecching(true)
        })
    }, key)

    return {data, isFeching}
}

export const useRequest = ({fetchFunc}) =>{
    const[data, setData] = useState(null)
    const[isFeching, setIsFecching] = useState(false)

    fetchFunc().then((fechedData) => {
        setData(fechedData)
        setIsFecching(true)
    })

    return {data, isFeching}
}