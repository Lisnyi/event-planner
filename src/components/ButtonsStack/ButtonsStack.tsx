import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddButton, FilterButton, SortButton } from '..'
import { Box } from "./ButtonsStack.styled"

export const ButtonsStack: FC = () => {

	const navigate = useNavigate()

	function goToCreateEventPage() {
		navigate("/create-event")
	}

	return (
		<Box>
			<FilterButton/>
			<SortButton/>
			<AddButton handleClick={goToCreateEventPage}/>
		</Box>
	)
}