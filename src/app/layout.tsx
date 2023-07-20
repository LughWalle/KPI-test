import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { EmployeesProvider } from './context/employeesContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Analise de Funcionarios',
  description: 'Teste KPI',
}

EmployeesProvider
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <EmployeesProvider>

        <body
          className={inter.className}
          suppressHydrationWarning={true}
          >
          {children}
        </body>
      </EmployeesProvider>
    </html>
  )
}
