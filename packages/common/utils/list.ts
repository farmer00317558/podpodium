export function mergeTwo<T>(arr1: T[], arr2: T[], compare: (a: T, b: T) => boolean): T[] {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < arr1.length + arr2.length) {
    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || compare(arr1[index1], arr2[index2]))) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }

    current++;
  }

  return merged;
}

export function random(max: number, count: number) {
  const ret = [];
  let tryTimes = 0;
  while (ret.length < count) {
    ret.push(Math.floor(Math.random() * max));
    tryTimes += 1;
    if (tryTimes >= count * 2) {
      break;
    }
  }
  return ret;
}

export function randomElements<T>(list: T[], count: number = 3): T[] {
  const results = [];
  let tryTimes = 0;
  while (results.length < count) {
    results.push(list[Math.floor(Math.random() * list.length)]);
    tryTimes += 1;
    if (tryTimes >= count * 2) {
      break;
    }
  }
  return results;
}
