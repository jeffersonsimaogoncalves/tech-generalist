import { CSSProperties, forwardRef, PropsWithChildren } from 'react'
import classname from 'classnames'

interface ContainerProps extends PropsWithChildren {
  className?: string
  Outer?: any
  Inner?: any
  style?: CSSProperties
}

const OuterContainer = forwardRef<HTMLDivElement, ContainerProps>((
  props: ContainerProps,
  ref
) => {
  const { className, children } = props
  return (
    <div ref={ref} className={classname('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef<HTMLDivElement, ContainerProps>((
  props: ContainerProps,
  ref
) => {
  const { className, children } = props
  return (
    <div ref={ref}
      className={classname('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  props: ContainerProps,
  ref
) {
  const { children } = props
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

export const Outer = OuterContainer
export const Inner = InnerContainer
