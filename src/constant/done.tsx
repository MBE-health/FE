import { routineDone } from "../typings";

function getDoneCount(days: routineDone[]): number[] {
  const count = days.map((item: routineDone) => item[0] + item[1] + item[2]);
  console.log(count);
  return count;
}
function getDoneDate(days: routineDone[]) {
  const data = days.map((item: routineDone) =>
    (item.createdAt as string).slice(-4)
  );
  console.log(data);
  return data;
}

export { getDoneCount, getDoneDate };
