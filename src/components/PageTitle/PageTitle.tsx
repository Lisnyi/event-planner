import { FC } from 'react'
import { Title } from './PageTitle.styled'

type Props = {
    content: string,
}

export const PageTitle: FC<Props> = ({content}) => {
  return (
    <Title>
        {content}
    </Title>
  )
}
