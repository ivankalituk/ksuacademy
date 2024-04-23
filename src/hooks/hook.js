import { useEffect, useState } from "react"

const useFetchRequest = ({fetchFunc, key}) => {

    let [data, setData] = useState(null)

    useEffect(() =>{
        fetchFunc().then(setData)
    }, [key])

    return data
}