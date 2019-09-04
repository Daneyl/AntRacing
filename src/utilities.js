//@flow
export const promisify = cb =>
  new Promise(resolve => {
    cb(resolve);
  });

