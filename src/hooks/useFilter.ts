import { useSelector, useDispatch } from "react-redux"
import { getFilter, setFilter } from "../redux"

export function useFilter(): [string, (value:string) => void] {

    const value: string = useSelector(getFilter)
    const dispatch = useDispatch()

    function handleChange (value: string) {
        dispatch(setFilter(value))
    }

    return [ value, handleChange ]
}