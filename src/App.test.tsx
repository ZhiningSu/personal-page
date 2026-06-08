import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Home from '@/pages/Home'
import WorkDetail from '@/pages/WorkDetail'

describe('Homepage', () => {
  it('renders the key homepage sections', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'Yanda Su' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Research' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Interests' })).toBeInTheDocument()
  })
})

describe('Work detail page', () => {
  it('renders the selected work content', () => {
    render(
      <MemoryRouter initialEntries={['/work/financial-world-model']}>
        <Routes>
          <Route path="/work/:slug" element={<WorkDetail />} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'Financial World Model' })).toBeInTheDocument()
    expect(screen.getByText('Project Links')).toBeInTheDocument()
    expect(screen.getByText('Research premise')).toBeInTheDocument()
  })
})
