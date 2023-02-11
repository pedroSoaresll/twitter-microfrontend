import { mount } from 'posts/PostsApp'
import { useEffect, useRef } from 'react'

export const Posts = () => {
  const ref = useRef()

  useEffect(() => {
    if (ref) {
      mount(ref.current)
    }
  }, [])

  return <div className='w-full' ref={ref}></div>
}
