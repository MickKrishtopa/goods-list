import axios from 'axios';
import CryptoJS from 'crypto-js';
import dayjs from 'dayjs';

const currentDate = dayjs().format('YYYYMMDD');
const inputString = `Valantis_${currentDate}`;
const md5Hash = CryptoJS.MD5(inputString).toString();

const axiosInstance = axios.create({
  baseURL: 'https://api.valantis.store:41000/',
  headers: { 'X-Auth': md5Hash },
});

export { axiosInstance };
