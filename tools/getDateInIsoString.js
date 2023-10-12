export const getDateInIsoString = () => {
  return new Date(new Date().getTime() + 3 * 60 * 60 * 1000).toISOString();
};
