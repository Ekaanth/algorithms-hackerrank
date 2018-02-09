function serviceLane(n, cases, width) {
  cases.forEach(c => {
    lane = [];
    for (let i = c[0]; i <= c[1]; i++) {
      lane.push(width[i]);
    }
    console.log(Math.min(...lane));
  });
}
serviceLane(
  8,
  [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]],
  [2, 3, 1, 2, 3, 2, 3, 3]
);
// serviceLane(5, [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]], [1, 2, 2, 2, 1]);
