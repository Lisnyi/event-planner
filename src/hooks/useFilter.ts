import { useSelector, useDispatch } from "react-redux"
import { getFilter, setInputFilter, setCategoryFilter } from "../redux"
import type { FilterType, Category } from "../types"

export function useFilter(): [FilterType, (value: string) => void, (value: Category | '') => void] {

    const value: FilterType = useSelector(getFilter)
    const dispatch = useDispatch()

    function handleInputFilterChange (value: string) {
        dispatch(setInputFilter(value))
    }

    function handleCategoryFilterChange (value: Category | '') {
        dispatch(setCategoryFilter(value))
    }

    return [ value, handleInputFilterChange, handleCategoryFilterChange ]
}