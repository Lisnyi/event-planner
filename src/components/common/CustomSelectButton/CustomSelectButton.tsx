import { FC, useEffect, useRef, useState } from "react"
import { SelectContainer, List, ListItem, Label } from './CustomSelectButton.styled'
import type { SelectOption } from "../../../types"

type Props = {
	label: string,
	options: SelectOption[]
	value: SelectOption
	onChange: (value: SelectOption) => void
} 

export const CustomSelectButton: FC <Props> = ({ value, onChange, options, label }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [highlightedIndex, setHighlightedIndex] = useState(0)
	const containerRef = useRef<HTMLDivElement>(null)

	function selectOption(option: SelectOption) {
		onChange(option)
	}

	useEffect(() => {
		if (isOpen) setHighlightedIndex(0)
	}, [isOpen])

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
		if (e.target != containerRef.current) return
		switch (e.code) {
			case "Enter":
			case "Space": {
				setIsOpen(prev => !prev)
				if (isOpen) selectOption(options[highlightedIndex])
				break
			}

			case "ArrowUp":
			case "ArrowDown": {
				if (!isOpen) {
					setIsOpen(true)
					break
				}
				const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
				if (newValue >= 0 && newValue < options.length) {
					setHighlightedIndex(newValue)
				}
				break
			}

			case "Escape":
				setIsOpen(false)
			break
		}
		}
		containerRef.current?.addEventListener("keydown", handler)

		return () => {
			containerRef.current?.removeEventListener("keydown", handler)
		}
	}, [isOpen, highlightedIndex, options, selectOption])

	return (
		<SelectContainer
			open={isOpen}
			ref={containerRef}
			onBlur={() => setIsOpen(false)}
			onClick={() => setIsOpen(prev => !prev)}
			tabIndex={0}
		>
			<Label>{label}</Label>
			<List open={isOpen}>   
				{options.map((option, index) => (
					<ListItem
						selected={option.value === value.value}
						highlighted={index === highlightedIndex}
						onClick={e => {
							e.stopPropagation()
							selectOption(option)
							setIsOpen(false)
						}}
						onMouseEnter={() => setHighlightedIndex(index)}
						key={option.value}
					>
						{option.label.text}
						{option.label.icon ? <option.label.icon/> : null}
					</ListItem>
				))}
			</List>
		</SelectContainer>
	)
}