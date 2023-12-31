import StyledComponentsRegistry from './lib/registry'
import type { Metadata } from 'next'
import './reset.min.css'
import Navbar from './components/Navbar'
import { categories } from './categories/information'

export const metadata: Metadata = {
  title: 'lika-7 portfolio',
  description: 'This is my portfolio showcasing my work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const content= categories.map(category =>category.content)

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Navbar categories={content}/>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
