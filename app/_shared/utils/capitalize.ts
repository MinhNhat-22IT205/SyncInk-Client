export const capitalize = (str: string) => {
  const lowercaseStr = str.toLowerCase();
  return lowercaseStr.charAt(0).toUpperCase() + lowercaseStr.slice(1);
};
