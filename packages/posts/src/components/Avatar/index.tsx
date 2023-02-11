import { forwardRef, HTMLAttributes } from 'react'

type Props = {
  profileURL: string
} & HTMLAttributes<HTMLDivElement>

export const Avatar = forwardRef<HTMLDivElement, Props>(
  ({ className, profileURL, ...props }, ref) => (
    <div
      ref={ref}
      className={`w-12 h-12 rounded-full flex items-center justify-center overflow-clip ${className}`}
      {...props}
    >
      <img src={profileURL} alt="profile image" />
    </div>
  )
)
Avatar.displayName = 'Avatar'