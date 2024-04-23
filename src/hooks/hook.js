import { useEffect, useState } from "react"

export const useFetchRequest = ({fetchFunc, key}) => {

    let [data, setData] = useState(null)
    const [isFeching, setIsFecching] = useState(false)

    useEffect(() =>{
        fetchFunc().then((fechedData) => {
            setData(fechedData)
            setIsFecching(true)
        })
    }, key)

    return {data, isFeching}
}