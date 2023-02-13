import './main.css'
import { FC } from 'react'

import { Menu } from '@features/menu'
import { Posts } from '@features/posts'

const App: FC = () => {
  return (
    <div className="w-full flex flex-row flex-auto">
      <header className="flex items-end flex-col grow">
        <Menu />
      </header>

      <main className="flex items-start flex-row grow">
        <div className="w-[990px] flex justify-between">
          <div className="flex w-[600px]">
            <Posts />
          </div>

          <div className="flex w-[350px] bg-slate-100 dark:bg-gray-900">
            {/* empty space, just to guarantee the correct layout */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
