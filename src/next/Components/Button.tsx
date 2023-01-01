import { ButtonHTMLAttributes } from "react"
import classname from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button = (props: ButtonProps) => {
  const { value, className } = props
  return <button {...props} className={classname('bg-blue-500 rounded-md pl-2 pr-2', className)}>
    {value}
  </button>
}