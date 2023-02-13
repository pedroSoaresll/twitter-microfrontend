import './main.css'

import { FC } from 'react'
import { NewTweet } from '@features/NewTweet'
import { LayoutWrapper } from '@components/layout-wrapper'

export const App: FC = () => {
  return (
    <div>
      <LayoutWrapper>
        <h1 className="text-xl font-bold">Home</h1>
      </LayoutWrapper>

      <NewTweet />
    </div>
  )
}
