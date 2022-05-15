import loginRepository from './loginRepository';

const repositories = {
  login: loginRepository,
};

export default {
  get: (name) => repositories[name],
};
