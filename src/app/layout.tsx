import StyledComponentsRegistry from './lib/registry'
import type { Metadata } from 'next'
import { Rajdhani } from 'next/font/google'
import './reset.min.css'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: '300'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}