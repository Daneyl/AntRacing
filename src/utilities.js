//@flow
export const promisify = cb =>
  new Promise(resolve => {
    return cb(resolve);
  });
