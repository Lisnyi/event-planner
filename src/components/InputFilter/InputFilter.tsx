import { FC, FormEvent } from 'react'
import { ClearButton } from '..'
import { Search } from '../../assets'
import { Filter, FilterBox, SearchIcon } from "./InputFilter.styled"

type Props = {
    value: string,
    handleChange: (value: string) => void
}

export const InputFilter: FC<Props> = ({value, handleChange}) => {

    function onChange ({currentTarget}: FormEvent<HTMLInputElement>) {
        handleChange(currentTarget.value)
    }

    return (
        <FilterBox>
            <SearchIcon component={Search} />
            <Filter
                value={value}
                onChange={onChange}
                placeholder='Search by keywords'
                aria-label='Search by keywords'
            />
            {value && <ClearButton handleClick={() => handleChange('')}/>}
        </FilterBox>
    )
}