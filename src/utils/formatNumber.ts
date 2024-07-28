export const formatNumber = (number: number | string): string => {
  const stringNumber = number.toString().replace(/\D/g, '');
  
  return stringNumber.split('').reverse().reduce((acc, digit, index) => {
    if (index > 0 && index % 3 === 0) {
      return digit + '.' + acc;
    }
    return digit + acc;
  }, '');
};