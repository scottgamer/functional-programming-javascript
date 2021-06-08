const memo = (f) => {
  let memoMap = new Map();

  return (fArg) =>
    memoMap.has(fArg)
      ? memoMap.get(fArg)
      : memoMap.set(fArg, f(fArg)).get(fArg);
};
