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

    expect(screen.getByRole('heading', { name: 'YOUR NAME' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '代表作品' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '联系与合作' })).toBeInTheDocument()
  })
})

describe('Work detail page', () => {
  it('renders the selected work content', () => {
    render(
      <MemoryRouter initialEntries={['/work/embodied-atlas']}>
        <Routes>
          <Route path="/work/:slug" element={<WorkDetail />} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'Embodied Atlas' })).toBeInTheDocument()
    expect(screen.getByText('Project Links')).toBeInTheDocument()
    expect(screen.getByText('项目主张')).toBeInTheDocument()
  })
})
