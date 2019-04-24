function calcVizier(viziers, stages) {
  if (viziers.length == 0 || stages.length == 0) {
    return [];
  }

  let finalResult = [];
  let availableViziers = viziers.slice();
  for (let i = 0; i < stages.length; i++) {
    findStageSolution(availableViziers, stages[i], finalResult);
    availableViziers = filterUsedViziers(availableViziers, finalResult);
  }
  return finalResult;
}

function filterUsedViziers(availableViziers, finalResult) {
  availableViziers = availableViziers.filter((value, index, arr) => {
    if (finalResult[finalResult.length - 1].includes(value)) {
      return false;
    }
    return true;
  });
  return availableViziers;
}

function findStageSolution(availableViziers, stage, finalResult) {
  let results = [];
  for (let i = 0; i < availableViziers.length; i++) {
    results = checkSequenceStartingWithVizier([], availableViziers, stage, results, i);
  }
  results.sort((lhs, rhs) => { return sum(lhs) - sum(rhs); });
  finalResult.push(results[0]);
  return results;
}

function checkSequenceStartingWithVizier(initialResult, viziers, stage, results, vizierIndex) {
  let result = initialResult.slice();
  result.push(viziers[vizierIndex]);
  if (sum(result) > stage) {
    results.push(result);
  } else {
    for (let i = vizierIndex + 1; i < viziers.length; i++) {
      results = checkSequenceStartingWithVizier(result, viziers, stage, results, i);
    }
  }
  return results;
}

function sum(arr) {
  return arr.reduce((total, added) => { return total + added; });
}