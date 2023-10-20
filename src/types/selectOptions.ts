import { FunctionComponent, SVGProps } from 'react'

export type SelectOption = {
	label: {
		text: "" | string,
		icon?: FunctionComponent<SVGProps<SVGSVGElement>>
	},
	value: "" | string
}