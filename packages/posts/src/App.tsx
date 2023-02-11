import './main.css'

import { FC } from 'react'
import { NewTweet } from '@features/NewTweet'

export const App: FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Home</h1>

      <NewTweet />
    </div>
  )
}
