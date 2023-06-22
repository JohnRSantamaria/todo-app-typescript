import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handelSubmit = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handelSubmit}>
      <input
        className='new-todo'
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
        placeholder='¿Que quieres hacer?'
        autoFocus
      />
    </form>
  )
}
