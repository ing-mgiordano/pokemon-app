import { render, screen, fireEvent } from '@testing-library/react'
import Login from '../src/app/login/page'
import { signIn } from 'next-auth/react'

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}))

describe('Login Page', () => {
  it('Renderiza el botón de inicio de sesión', () => {
    render(<Login />)
    const button = screen.getByText('Sign in with GitHub')
    expect(button).toBeInTheDocument()
  })

  it('Llama a signIn al hacer clic en el botón', () => {
    render(<Login />)
    const button = screen.getByText('Sign in with GitHub')
    fireEvent.click(button)
    expect(signIn).toHaveBeenCalledWith(undefined, { callbackUrl: '/' })
  })
})