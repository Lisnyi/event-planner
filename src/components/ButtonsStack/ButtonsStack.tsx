import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectButton, AddButton } from '..'
import { filterCategories, sortOptions } from '../../db'
import { Sort, Filter } from '../../assets'
import { Box } from "./ButtonsStack.styled"

export const ButtonsStack: FC = () => {

	const navigate = useNavigate()

	function goToCreateEventPage() {
		navigate("/create-event")
	}

	return (
		<Box>
			<SelectButton icon={<Filter/>} title='Category' options={filterCategories}/>
			<SelectButton icon={<Sort/>} title='Sort by' options={sortOptions}/>
			<AddButton handleClick={goToCreateEventPage}/>
		</Box>
	)
}