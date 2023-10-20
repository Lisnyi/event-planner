import { CustomSelectButton } from '..'
import { categories } from '../../db'
import { useFilter } from '../../hooks'
import type { Category, SelectOption } from '../../types'

export const FilterButton = () => {

	const [{category}, , handleCategoryFilterChange ] = useFilter()

	const currentValue = {
		label: {
			text: category
		},
		value: category
	}

	function selectCategoryFilter(option: SelectOption) {
		if (option.value === category) return handleCategoryFilterChange("")
		return handleCategoryFilterChange(option.value as Category)
	}
        
    return (
        <CustomSelectButton options={categories} onChange={selectCategoryFilter} value={currentValue} label='Category'/>
    )
}
