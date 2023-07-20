'use client'

import { ChangeEvent, createContext, useEffect, useState } from 'react'
import { data, ProviderChildrenProp, employeesTypes, AnalyticsData } from '@/types';
import apiKPI from '@/service/api';


const initialValue = {
  employees: [{
    id: 0,
    matricula: 0,
    status: '',
    nome: '',
    email: '',
    email_do_gestor: '',
    data_de_admissão: new Date,
    data_de_rescisão: new Date,
    cargo: ''
  }],
  setEmployees: () => { },
  TOHC: { turnover: [{ x: '', y: 0 }], headcount: [{ x: '', y: 0 }] },
  setTOHC: () => {},
  loading: false,
  setLoading: () => { },
  email: '',
  setEmail: () => { },
  headcount: () => { },
  turnover: () => { },
}

export const EmployeesContext = createContext<data>(initialValue);

export const EmployeesProvider = ({ children }: ProviderChildrenProp) => {
  const [employees, setEmployees] = useState<employeesTypes[]>([])
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<string>('')
  const [TOHC, setTOHC] = useState<AnalyticsData>({
    turnover: [],
    headcount: [],
  })

  const turnover = async () => {
    await apiKPI.get('/turnover')
      .then(({ data }) => {
        setTOHC({
          ...TOHC,
          turnover: data
        })
      })
      .catch(err => console.log(err))
  }

  const headcount = async () => {
    await apiKPI.get('/headcount')
      .then(({ data }) => {
        setTOHC({
          ...TOHC,
          headcount: data
        })
      })
      .catch(err => console.log(err))
  }

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setEmail(value)
  }

  return (
    <EmployeesContext.Provider value={{
      setEmail,
      email,
      loading,
      setLoading,
      employees,
      setEmployees,
      TOHC,
      headcount,
      turnover,
    }} >
      {children}
    </EmployeesContext.Provider>
  )
}
