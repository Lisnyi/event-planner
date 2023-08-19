import { useSelector } from "react-redux"
import { useGetEventsQuery, getFilter } from '../redux'
import { normalizeText } from "../utils"

export function useFiltredEventList () {

    const { data } = useGetEventsQuery()
    const filter = useSelector(getFilter)
    
    const filtredList = data?.filter(({title, description}) => {
        const normalizedTitle = normalizeText(title)
        const normalizedFilter = normalizeText(filter)
        const normalizedDescription = normalizeText(description)
        return normalizedTitle.includes(normalizedFilter) || normalizedDescription.includes(normalizedFilter)   
    })
    
    return [filtredList]
}