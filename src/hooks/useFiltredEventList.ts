import { useGetEventsQuery } from '../redux'
import { useFilter } from "."
import { normalizeText } from "../utils"

export function useFiltredEventList () {

    const { data } = useGetEventsQuery()
    const [filter] = useFilter()
    
    const filtredList = data?.filter(({title, description}) => {
        const normalizedTitle = normalizeText(title)
        const normalizedFilter = normalizeText(filter)
        const normalizedDescription = normalizeText(description)
        return normalizedTitle.includes(normalizedFilter) || normalizedDescription.includes(normalizedFilter)   
    })
    
    return [filtredList]
}