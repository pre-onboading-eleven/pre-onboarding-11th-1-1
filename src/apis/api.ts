import axios, { AxiosInstance } from 'axios';

const authAPI = () => {
  const api = axios.create({
    baseURL: 'https://pre-onboarding-selection-task.shop/',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      accept: 'application/json,',
      Authorization: null,
    },
  });
  interceptors(api);
  return api;
};

const interceptors = (api: AxiosInstance) => {
  api.interceptors.request.use(
    config => {
      const token = localStorage.getItem('access_token');

      config.headers = {
        authorization: token ? `bearer ${token}` : null,
      };
      return config;
    },
    error => Promise.reject(error.response)
  );
  return api;
};

export const apis = {
  //Login
  postSignUp: (data: Object) => authAPI().post('/auth/signup', data), // 회원가입
  postSignIn: (data: Object) => authAPI().post('/auth/signin', data), // 로그인

  //TODO
  getTodos: () => authAPI().get('/todos'), //Todo page 접속 시
  createTodo: (todo: Object) => authAPI().post('todos', todo), // 새로운 TODo 추가
  updateTodo: (id: number, updateTodo: Object) => authAPI().put(`/todos/${id}`, updateTodo),
  deleteTodo: (id: number) => authAPI().delete(`/todos/${id}`),
};
