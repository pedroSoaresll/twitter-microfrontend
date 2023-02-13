import { Avatar } from '@components/avatar'
import { LayoutWrapper } from '@components/layout-wrapper'
import { FC } from 'react'

const profileURL =
  'https://pbs.twimg.com/profile_images/1560430486517850113/dz1fyVTQ_400x400.jpg'

export const NewTweet: FC = () => {
  return (
    <div className="flex flex-col border-b dark:border-b-gray-700 border-b-gray-200 pb-2">
      <LayoutWrapper>
        <div className="flex items-center py-3">
          <Avatar profileURL={profileURL} className="mr-3" />
          <input
            type="text"
            className="text-xl bg-transparent border-none flex-1"
            placeholder="What's happening?"
          />
        </div>

        <div className="flex justify-end">
          <button
            disabled
            className="bg-blue-400 disabled:bg-blue-300 px-4 py-2 text-sm font-bold rounded-full text-white"
          >
            Tweet
          </button>
        </div>
      </LayoutWrapper>
    </div>
  )
}
