const URL = 'https://reqres.in/api/users';

const getUsers = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default getUsers;
