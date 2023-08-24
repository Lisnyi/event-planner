import { useGetEventsQuery } from '../redux'
import { useFilter } from "."
import { normalizeText } from "../utils"

export function useFiltredEventList () {

    const { data } = useGetEventsQuery()
    const [ {input: inputFilter, category: categoryFilter} ] = useFilter()
    
    const filtredList = data?.filter(({title, description}) => {
        const normalizedTitle = normalizeText(title)
        const normalizedFilter = normalizeText(inputFilter)
        const normalizedDescription = normalizeText(description)
        return normalizedTitle.includes(normalizedFilter) || normalizedDescription.includes(normalizedFilter)   
    }).filter(({category}) => {
        if (categoryFilter === '') return category
        return category === categoryFilter
    })

    return [filtredList]
}