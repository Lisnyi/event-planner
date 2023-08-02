import { FC, useState, ChangeEvent } from 'react'
import { ClearButton } from '..'
import { Search } from '../../assets'
import { Filter, FilterBox, SearchIcon } from "./InputFilter.styled"

export const InputFilter: FC = () => {

    const [filter, setFilter] = useState('')
    
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setFilter(e.target.value)
    }

    return (
        <FilterBox>
            <SearchIcon component={Search} />
            <Filter
                value={filter}
                onChange={handleChange}
                placeholder='Search by keywords'
                aria-label='Search by keywords'
            />
            {filter && <ClearButton handleClick={()=>setFilter('')}/>}
        </FilterBox>
    )
}