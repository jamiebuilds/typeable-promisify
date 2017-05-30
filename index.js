// @flow

const AnyPromise = require('any-promise');

/*::
type Promisify = <T>((
  & ((mixed) => void)
  & ((null, T) => void)
) => mixed) => Promise<T>;
*/

let promisify /*: Promisify */ = fn => new AnyPromise((resolve, reject) => {
  fn((err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res);
    }
  });
});

module.exports = promisify;
