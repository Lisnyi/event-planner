import { FC, useState, ReactNode } from 'react'
import { MenuItem } from '@mui/material';
import { OpenButton, List } from './SelectButton.styled';
import { SortArrowDown, SortArrowUp } from '../../../assets';
import type { SelectOptions, Category } from '../../../types';

type Props = {
    title: string,
    icon: ReactNode,
    options: SelectOptions,
    handleSelect: (value: Category) => void
}

export const SelectButton: FC<Props> = ({title, icon, options, handleSelect}) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (value: Category) => {
        handleSelect(value)
        setAnchorEl(null);
    };

  return (
        <div>
            <OpenButton
                id={title}
                open={open}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={icon}
                aria-label={title}
            >
                {open && title} 
            </OpenButton>
            <List
                id={title}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': `${title}`,
                }}
            >   {options.map(({value, arrow}, index) =>
                    <MenuItem
                        key={index}
                        onClick={() => handleClose(value)}
                    >
                        {value}
                        {arrow && (arrow === 'up' ? <SortArrowUp/> : <SortArrowDown/>)}
                    </MenuItem>
                )}
            </List>
        </div>
    )
}