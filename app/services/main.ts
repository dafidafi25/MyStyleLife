export const MockFetch = async () => {
  // Mock fetch with timeout to emulate network latency
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({data: 'mock data'});
    }, 1500);
  });
};
