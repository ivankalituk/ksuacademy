import { useEffect, useState } from "react"

export const useFetchRequest = ({fetchFunc, key, enebled, mutationFunc}) => {

    const [data, setData] = useState(null)
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() =>{
        setIsFetching(false)

        if (enebled) {
            fetchFunc().then((fetchedData) => {

                let data = fetchedData

                if(mutationFunc){
                    data = mutationFunc(fetchedData)
                }

                // console.log(data)
                setIsFetching(true)
                setData(data)

            })
        }
    }, key)

    return {data, isFetching}
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