function calcVizier(viziers, stages) {
  if (viziers.length == 0 || stages.length == 0) {
    return [];
  }


  let results = [];
  let result = [];

  result.push(viziers[0]);
  if (sum(result) <= stages[0]) {
    result = checkRestOfViziers(viziers, stages, result, 1);
  }

  if (sum(result) > stages[0]) {
    results.push(result);
  }


  let res2 = [];
  res2.push(viziers[1]);
  res2 = checkRestOfViziers(viziers, stages, res2, 2);

  if (sum(res2) > stages[0]) {
    results.push(res2);
  }

  results.sort((lhs, rhs) => { return sum(lhs) - sum(rhs); });

  return [results[0]];

}

function sum(arr) {
  return arr.reduce((total, added) => { return total + added; });
}

function checkRestOfViziers(viziers, stages, result, startIndex) {
  for (let i = startIndex; i < viziers.length; i++) {
    if (viziers[i] + sum(result) > stages[0]) {
      result.push(viziers[i]);
      return result;
    }
  }
  if (startIndex < viziers.length) {
    result.push(viziers[startIndex]);
    return checkRestOfViziers(viziers, stages, result, startIndex + 1);
  }
  return result;
}