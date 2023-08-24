import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectButton, AddButton } from '..'
import { categories, sortOptions } from '../../db'
import { useFilter } from '../../hooks'
import { Sort, Filter } from '../../assets'
import { Box } from "./ButtonsStack.styled"
import type { Category } from '../../types'

export const ButtonsStack: FC = () => {

	const navigate = useNavigate()

	const [{category}, , handleCategoryFilterChange ] = useFilter()

	function goToCreateEventPage() {
		navigate("/create-event")
	}

	function selectCategoryFilter(value: Category) {
		if (category === value) return handleCategoryFilterChange("")
		return handleCategoryFilterChange(value)
	}

	return (
		<Box>
			<SelectButton icon={<Filter/>} handleSelect={selectCategoryFilter} title='Category' options={categories}/>
			<SelectButton icon={<Sort/>} handleSelect={(a) => console.log(a)} title='Sort by' options={sortOptions}/>
			<AddButton handleClick={goToCreateEventPage}/>
		</Box>
	)
}