const getApiToken = () => {
  const storedToken = localStorage.getItem('dolphin-api-token');
  return storedToken && typeof storedToken === 'string' ? storedToken : '';
};

export {
  getApiToken,
};