import React from 'react'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../pages/create/index'

describe('Testa pagina de criação de usuário da Aplicação', () => {
  test('Testa se a pagina de criação de usuario tem um botão inicio', async () => {
    const { getByText } = render(<App />)
    await waitFor(async () => {
      const buttoncreatePage = getByText('Início')
      expect(buttoncreatePage).toBeInTheDocument
    })
  })

  test('Testa se a pagina de criação de usuário tem um text hero', async () => {
    const { getAllByTestId } = render(<App />)
    await waitFor(async () => {
      const createPageHero = getAllByTestId('typewriter-wrapper')
      expect(createPageHero).toBeInTheDocument
    })
  })

  test('Testa se a pagina de criação de usuário tem um form', async () => {
    const { getByTestId } = render(<App />)
    await waitFor(async () => {
      const createPageForm= getByTestId('form_create')
      expect(createPageForm).toBeInTheDocument
    })
  })

  test('Testa se a pagina de criação de usuário tem um input name', async () => {
    const { getByTestId } = render(<App />)
    await waitFor(async () => {
      const createPageForm= getByTestId('form_create_input_name')
      expect(createPageForm).toBeInTheDocument
    })
  })

  test('Testa se a pagina de criação de usuário tem um input email', async () => {
    const { getByTestId } = render(<App />)
    await waitFor(async () => {
      const createPageForm= getByTestId('form_create_input_email')
      expect(createPageForm).toBeInTheDocument
    })
  })

  test('Testa se a pagina de criação de usuário tem um button status', async () => {
    const { getByTestId } = render(<App />)
    await waitFor(async () => {
      const createPageForm= getByTestId('form_create_button_status_active')
      const createPageForm2= getByTestId('form_create_button_status_inactive')
      expect(createPageForm).toBeInTheDocument
      expect(createPageForm2).toBeInTheDocument
    })
  })

  test('Testa se a pagina de criação de usuário tem um button criar', async () => {
    const { getByTestId } = render(<App />)
    await waitFor(async () => {
      const createPageForm= getByTestId('form_create_button')
      expect(createPageForm).toBeInTheDocument
    })
  })

  test('Testa se não é possivel criar um usuário com dados incorretos', async () => {
    const { getByTestId, getByText } = render(<App />)
    const createPageForm= getByTestId('form_create_input_name')
    userEvent.type(createPageForm, 'Vitor545')
    const createPageForm2= getByTestId('form_create_input_email')
    userEvent.type(createPageForm2, 'tutordssas@gmail')
    const createPageForm3= getByTestId('form_create_button_status_active')
    userEvent.click(createPageForm3)
    const createPageForm4= getByTestId('form_create_button')
    userEvent.click(createPageForm4)
    expect(getByText('O email deve ter o formato xxxx@yyyy.zzz')).toBeInTheDocument
  })
})
