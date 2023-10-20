// import { useState } from 'react'
import { CustomSelectButton } from '..'
import { sortOptions } from '../../db'
import { SortArrowDown } from '../../assets';

export const SortButton = () => {
    
    // const { sort, setSort } = useState<SelectOption>({label: '', value: ''})
    const sort = 	{	
		label: {
			text: 'by name',
			icon:  SortArrowDown
		},
		value: 'title asc'
	}

    return (
        <CustomSelectButton options={sortOptions} label='Sort' value={sort} onChange={v => console.log(v)}/>
    )
}
