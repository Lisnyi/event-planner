import { FC, useState } from 'react'
import { ArrowDown } from '../../assets'
import { LangSelect, useStyles } from './LanguageSelect.styled'
import { MenuItem } from '@mui/material'
import { useTheme } from 'styled-components'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export const LanguageSelect: FC = () => {

    const [language, setLanguage] = useState("EN")
    const theme = useTheme()
    const { classes } = useStyles({"theme": theme});

    function handleChange(event: SelectChangeEvent) {
        setLanguage(event.target.value);
    }

    const menuProps = {
      classes: {
        list: classes.list,
        paper: classes.paper
      },
    };

    return (
        <Select
          value={language}
          label="language"
          onChange={handleChange}
          input={<LangSelect />}
          IconComponent={ArrowDown}
          MenuProps={menuProps}
          classes={{
            select: 'select',
            icon: 'selectIcon',
          }}
        >
          <MenuItem value={"EN"}>EN</MenuItem>
          <MenuItem value={"UA"}>UA</MenuItem>
        </Select>
    )
}