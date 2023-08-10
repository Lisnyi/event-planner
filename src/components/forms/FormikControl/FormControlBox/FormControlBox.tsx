import { FC, PropsWithChildren } from 'react'
import { Box } from './FormControlBox.styled'

type Props = { 
	area: string,
}

export const FormControlBox: FC<PropsWithChildren<Props>> = ({children, area}) => {
	return (
		<Box fullWidth area={area}>
			{children}
		</Box>
	)
}
