import { runTaskInPool } from './task';

describe('task', () => {
  // it('run task in pool', async () => {
  //   let start = Date.now();
  //   const results = await runTaskInPool(
  //     [1, 2, 3, 4],
  //     (i: number) => {
  //       return new Promise((resolve) => {
  //         setTimeout(() => {
  //           resolve(i);
  //         }, 1000);
  //       });
  //     },
  //     2,
  //   );
  //   const time = Date.now() - start;
  //   expect(time).toBeLessThan(3000);
  //   expect(results).toStrictEqual([1, 2, 3, 4]);
  // });

  it('run task in pool with fail task', async () => {
    let start = Date.now();
    const results = await runTaskInPool(
      [1, 2, 3, 4, 5],
      (i: number) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (i === 3) {
              reject('fail 3');
              return;
            }
            resolve(i);
          }, 1000);
        });
      },
      2,
    );
    const time = Date.now() - start;
    expect(time).toBeLessThan(4000);
    expect(results).toEqual([1, 2, undefined, 4, 5]);

    await new Promise((r) => setTimeout(r, 5000));
  });
});
