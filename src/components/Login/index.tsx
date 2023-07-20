'use client'
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };


  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        margin="normal"
      />
      <Link href="/analyticsCharts">
          <Button variant="contained">
            Continuar
          </Button>
      </Link>
    </Box>
  );
};

export default Login;
