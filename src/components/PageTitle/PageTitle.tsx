import { FC } from 'react'
import { Title } from './PageTitle.styled'

type Props = {
    content: string,
    homePage?: boolean | undefined
}

export const PageTitle: FC<Props> = ({content, homePage}) => {
  return (
    <Title homePage={homePage}>
        {content}
    </Title>
  )
}
