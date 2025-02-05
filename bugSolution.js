function foo(a, b) {  const epsilon = 0.000001; // A small tolerance value
  return Math.abs(a - b) < epsilon;} 