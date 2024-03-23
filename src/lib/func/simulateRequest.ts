export const simulateRequest = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random() < 0.8);
    }, 800);
  });
};
