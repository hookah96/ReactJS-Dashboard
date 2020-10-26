const URL = 'https://reqres.in/api/products/';

const getColors = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default getColors;
