import styled from "styled-components"
import { Chip } from ".."
import { pickPriorityColor } from "../../utils"
import type { Priority } from "../../types"

export const StyledChip = styled(Chip)<{text: Priority}>`
    color: ${p => pickPriorityColor(p.text)};
`