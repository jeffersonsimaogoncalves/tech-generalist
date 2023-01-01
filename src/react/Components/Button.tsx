import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  preValue?: JSX.Element | string
  postValue?: JSX.Element | string
}

export const Button = (props: ButtonProps) => {
  const { value, preValue, postValue } = props
  return <button {...props}>{preValue}{value}{postValue}</button>
}