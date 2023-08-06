import styled from "styled-components"
import { Tag } from ".."
import { pickPriorityColor } from "../../utils"
import type { Priority } from "../../types"

export const StyledTag = styled(Tag)<{content: Priority}>`
    color: ${p => pickPriorityColor(p.content)};
`