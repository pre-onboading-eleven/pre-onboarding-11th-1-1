import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Axios;
