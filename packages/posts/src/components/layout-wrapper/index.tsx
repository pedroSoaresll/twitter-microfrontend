import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const LayoutWrapper: FC<Props> = ({ children }) => {
  return <div className="px-4">{children}</div>
}
