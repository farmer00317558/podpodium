export declare function runTaskInPool<S, R>(source: S[], taskGenerator: (source: S) => Promise<R>, batchSize?: number, onBatchCompleted?: () => void): Promise<(R | null)[]>;
