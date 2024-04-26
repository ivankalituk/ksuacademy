import { useEffect, useState } from "react"

export const useFetchRequest = ({fetchFunc, key}) => {

    const [data, setData] = useState(null)
    const [isFeching, setIsFecching] = useState(false)

    useEffect(() =>{
        fetchFunc().then((fechedData) => {
            setData(fechedData)
            setIsFecching(true)
            // console.log(fechedData)
        })
    }, key)

    return {data, isFeching}
}

export const useRequest = ({fetchFunc}) =>{
    const[data, setData] = useState(null)
    const[isFetching, setIsFetching] = useState(false)

    const mutatedFunc = (data) => fetchFunc(data).then((fechedData) =>{
        setData(fechedData)
        setIsFetching(true)
    })

    return {mutatedFunc, isFetching, data}
}