export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR'
  }).format(price).replace('₹', '₹ ');
};
