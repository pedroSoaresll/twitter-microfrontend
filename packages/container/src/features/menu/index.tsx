import { FC } from 'react'
import Twitter from '@images/twitter.svg'
import { menuItems } from './helpers'

export const Menu: FC = () => {
  return (
    <div className="w-[250px] flex flex-col">
      <div className="w-12 h-12 rounded-full dark:hover:bg-[#181818] hover:bg-blue-50 flex justify-center items-center">
        <a href="/">
          <Twitter className="fill-blue-400 dark:fill-white w-7 h-7" />
        </a>
      </div>
      <nav className="my-1">
        {menuItems.map(({ text, icon: Icon, link }) => (
          <a
            key={text}
            href={link}
            className="flex flex-row gap-x-5 items-center p-3 rounded-full max-w-max transition-colors dark:hover:bg-[#181818] hover:bg-gray-200"
          >
            {Icon}
            <span className="text-xl dark:text-red-50 text-black font-normal mr-4">{text}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}
