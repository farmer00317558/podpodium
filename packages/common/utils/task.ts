export async function runTaskInPool<S, R>(
  source: S[],
  taskGenerator: (source: S) => Promise<R>,
  batchSize: number = 6,
  onBatchCompleted?: () => void,
): Promise<(R | null)[]> {
  if (source.length === 0) {
    return [];
  }

  let done: (_: (R | null)[]) => void = () => {};
  let fail = (_: Error) => {};

  const ret = new Promise<(R | null)[]>((resolve, reject) => {
    done = resolve;
    fail = reject;
  });

  if (batchSize <= 0) {
    fail(new Error('size must be greater than 0'));
    return [];
  }

  const results: (R | null)[] = new Array(source.length);

  let current = -1;
  let scheduled = 0;
  let completed = 0;

  const scheduleTask = async (index: number) => {
    scheduled += 1;

    return taskGenerator(source[index])
      .then((r) => {
        results[index] = r;
      })
      .catch((e) => {
        console.info('pool task error, source', source[index], e);
      })
      .finally(() => {
        completed += 1;
        if (completed % batchSize === 0) {
          onBatchCompleted?.();
        }
        if (completed === source.length) {
          done(results);
        }
        if (scheduled !== source.length) {
          scheduleTask(++current);
        }
      });
  };

  for (let i = 0; i < Math.min(batchSize, source.length); i++) {
    scheduleTask(++current);
  }
  return ret;
}
