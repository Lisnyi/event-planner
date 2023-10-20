import type { SortOption } from "../types"
import { SortArrowDown, SortArrowUp } from '../assets';

export const sortOptions: Array<SortOption> = [
	{	
		label: {
			text: 'by name',
			icon:  SortArrowDown
		},
		value: 'title asc'
	},
	{	
		label: {
			text: 'by name',
			icon:  SortArrowUp
		},
		value: 'title desc'
	},
    {	
		label: {
			text: 'by data',
			icon:  SortArrowDown
		},
		value: 'date asc' 
	},
    {	
		label: {
			text: 'by data',
			icon:  SortArrowUp
		},
		value: 'date desc'  
	},
    {	
		label: {
			text: 'by priority',
			icon:  SortArrowDown
		},
		value: 'priority asc' 
	},
    {	
		label: {
			text: 'by priority',
			icon:  SortArrowUp
		},
		value: 'priority desc'  
	},
]