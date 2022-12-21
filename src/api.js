const BASE_URL = "https://pre-onboarding-selection-task.shop";

const SIGN_UP = "/auth/signup";
const SIGN_IN = "/auth/signin";

const TODO = '/todos';

const api = {
  signup: () => BASE_URL + SIGN_UP,
  signin: () => BASE_URL + SIGN_IN,
  createTodo: () => BASE_URL + TODO,
  getTodos: () => BASE_URL + TODO,
  updateTodo: (id) => BASE_URL + TODO + "/" + id,
  deleteTodo: (id) => BASE_URL + TODO + "/" + id,
}

export default api;