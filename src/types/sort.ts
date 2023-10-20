import { FunctionComponent, SVGProps } from 'react'

export type SortDBOption = 'title desc' | 'date desc' | 'priority desc' | 'title asc' | 'date asc' | 'priority asc'
export type SortDBDirection = 'desc' | 'asc'

export type SortOptionTitle = 'by name' | 'by data' | 'by priority'

export type SortOption = {
    label: {
        text: SortOptionTitle,
        icon: FunctionComponent<SVGProps<SVGSVGElement>>
    }
    value: SortDBOption,
}