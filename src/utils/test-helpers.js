export const mockInteger = (n = 10) => Math.floor(Math.random() * (9 * Math.pow(10, n))) + Math.pow(10, n)
export const mockString = () => `test_${Math.random().toString(36).substring(7)}`
