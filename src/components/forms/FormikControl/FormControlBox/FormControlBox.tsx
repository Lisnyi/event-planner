import { FC, PropsWithChildren } from 'react'
import { Box } from './FormControlBox.styled'

export const FormControlBox: FC<PropsWithChildren> = ({children}) => {
	return (
		<Box fullWidth>
			{children}
		</Box>
	)
}
