'use client'
import Chart from '@/components/chart';
import { useContext, useEffect, useState } from 'react';
import { EmployeesContext } from '../context/employeesContext';
import styles from './analyticsCharts.module.scss'
import { DataPoint } from '@/types';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const AnalyticsCharts: React.FC = () => {
  const { TOHC, turnover: funcTO, headcount: funcHC } = useContext(EmployeesContext)
  const [age, setAge] = useState('2020');
  const [currentHC, setCurrentHC] = useState<DataPoint[]>([])
  const [currentTO, setCurrentTO] = useState<DataPoint[]>([])
  const { headcount, turnover } = TOHC;
  const separateByYear = (data: DataPoint[]): Record<string, DataPoint[]> => {
    const dataByYear: Record<string, DataPoint[]> = {};

    data.forEach(item => {
      const [month, year] = item.x.split('/');
      
      if (!dataByYear[year]) {
        dataByYear[year] = [];
      }

      dataByYear[year].push({ x: month, y: item.y });
    });

    return dataByYear;
  };
  
  const handleChange = (event: SelectChangeEvent, tipo: string) => {
    setAge(event.target.value);
  };
  const dataByYearHC = separateByYear(headcount);
  const yearsArray: string[] = Object.keys(dataByYearHC)! ? ['2020', '2021', '2022', '2023'] : Object.keys(dataByYearHC);
  const dataByYearTO = separateByYear(turnover);
  
  useEffect(() => {
    console.log('dentro do use effect', dataByYearHC[age], 'age', age);
    setCurrentHC(dataByYearHC[age])
    setCurrentTO(dataByYearTO[age])
  }, [age, headcount, turnover])
  useEffect(() => {
    console.log('entrei no contexto');
    
    funcHC();
    funcTO();
  }, [])

  return (
    <div className={styles.chart}>
      <FormControl fullWidth>
        <InputLabel id="headcount-select-label">Age</InputLabel>
        <Select
          labelId="headcount-select-label"
          id="headcount-select"
          value={age}
          label="Age"
          onChange={(e) => handleChange(e, 'HC')}
        >
          {
            yearsArray.map((year) => {
              return (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
      {
        currentHC && <Chart title="Evolução de Headcount" legend="Headcount" data={currentHC} />
      }
      {
        currentTO && <Chart title="Evolução de Turnover" legend="Turnover" data={currentTO} />
      }
    </div>
  );
};

export default AnalyticsCharts;
