import axios from 'axios';
require('dotenv').config();

const url: any = process.env.NEXT_PUBLIC_URL || 'https://ex996qe54l.execute-api.us-east-1.amazonaws.com';

const apiKPI = axios.create({
  baseURL: url,
})

export default apiKPI;
