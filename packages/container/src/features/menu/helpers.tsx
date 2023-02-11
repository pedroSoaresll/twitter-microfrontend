import { ReactNode } from 'react'
import HomeIcon from '@images/home.svg'
import HashTagIcon from '@images/hash-tag.svg'
import ProfileIcon from '@images/user.svg'

type MenuIcon = {
  text: string
  icon: ReactNode
  link: string
}

export const menuItems: MenuIcon[] = [
  {
    text: 'Home',
    icon: <HomeIcon className='w-[26px] h-[26px]' />,
    link: '#',
  },
  {
    text: 'Explore',
    icon: <HashTagIcon className='w-[26px] h-[26px]' />,
    link: '#',
  },
  {
    text: 'Profile',
    icon: <ProfileIcon className='w-[26px] h-[26px]' />,
    link: '#',
  },
]
