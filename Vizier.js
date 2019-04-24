function calcVizier(viziers, stages) {
  if (viziers.length == 0 || stages.length == 0) {
    return [];
  }

  let results = [];
  for (let i = 0; i < viziers.length; i++) {
    results = checkSequenceStartingWithVizier([], viziers, stages, results, i);
  }
  results.sort((lhs, rhs) => { return sum(lhs) - sum(rhs); });

  return [results[0]];

}

function checkSequenceStartingWithVizier(initialResult, viziers, stages, results, vizierIndex) {
  let result = initialResult.slice();
  result.push(viziers[vizierIndex]);
  if (sum(result) > stages[0]) {
    results.push(result);
  } else {
    for (let i = vizierIndex + 1; i < viziers.length; i++) {
      results = checkSequenceStartingWithVizier(result, viziers, stages, results, i);
    }
  }
  return results;
}

function sum(arr) {
  return arr.reduce((total, added) => { return total + added; });
}