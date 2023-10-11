export const getDateInIsoString = () => {
  return new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  ).toISOString();
};
