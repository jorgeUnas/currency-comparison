const fetchData = jest.fn(() => {
  Promise.resolve({ status: "Mock", data: {} });
});

export default fetchData;