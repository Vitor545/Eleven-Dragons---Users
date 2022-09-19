import React from 'react'
import { render, waitFor } from '@testing-library/react'
import App from '../../pages/index'

describe('Testa Home da Aplicação', () => {
  test('Testa se a pagina home tem um header com uma barra de pesquisa', () => {
    const { getAllByPlaceholderText } = render(<App />)
    const searchBar = getAllByPlaceholderText('Quem você está procurando?')
    expect(searchBar).toBeInTheDocument
  })

  test('Testa se a pagina home tem um header com um botão', () => {
    const { getByText } = render(<App />)
    const buttonHome = getByText('Criar Usuário')
    expect(buttonHome).toBeInTheDocument
  })

  test('Testa se a pagina home tem um text hero', () => {
    const { getAllByTestId } = render(<App />)
    const homeHero = getAllByTestId('typewriter-wrapper')
    expect(homeHero).toBeInTheDocument
  })

  test('Testa se a pagina home tem um filtro', () => {
    const { getByTestId, getByText } = render(<App />)
    const homeFilter = getByText('Filtrar por:')
    const homeFilterActiveButton = getByTestId('button_active_filter')
    const homeFilterInactiveButton = getByTestId('button_active_filter')
    expect(homeFilter).toBeInTheDocument
    expect(homeFilterActiveButton).toBeInTheDocument
    expect(homeFilterInactiveButton).toBeInTheDocument
  })

  test('Testa se a pagina home tem os cards', async () => {
    const { getAllByTestId } = render(<App />)
    await waitFor(async () => {
      setTimeout(() => {
        const homeCard = getAllByTestId('card_home_container')
        expect(homeCard).toBeInTheDocument
      }, 1000)
    })
  })
})
