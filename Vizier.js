function calcVizier(viziers, stages, multiplier) {
  if (viziers.length == 0 || stages.length == 0) {
    return [];
  }

  let finalResult = [];
  let availableViziers = Array.apply(null, { length: viziers.length }).map((val, idx) => idx);
  for (let i = 0; i < stages.length; i++) {
    findStageSolution(availableViziers, stages[i], finalResult, viziers, multiplier);
    availableViziers = filterUsedViziers(availableViziers, finalResult);
  }

  return translateVizierIndicesToStrengths(finalResult, viziers);
}

function translateVizierIndicesToStrengths(finalResult, viziers) {
  let translated = [];
  for (let i = 0; i < finalResult.length; i++) {
    translated.push([]);
    for (let j = 0; j < finalResult[i].length; j++) {
      translated[i].push(viziers[finalResult[i][j]]);
    }
  }
  return translated;
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

function findStageSolution(availableViziers, stage, finalResult, viziers, multiplier) {
  let results = [];
  for (let i = 0; i < availableViziers.length; i++) {
    results = checkSequenceStartingWithVizier([], availableViziers, stage, results, i, viziers, multiplier);
  }

  if (results.length > 0) {
    results.sort((lhs, rhs) => { return sum(lhs, viziers, multiplier) - sum(rhs, viziers, multiplier); });
    finalResult.push(results[0]);
  }
}

function checkSequenceStartingWithVizier(initialResult, availableViziers, stage, results, vizierIndex, viziers, multiplier) {
  let result = initialResult.slice();
  result.push(availableViziers[vizierIndex]);
  if (sum(result, viziers, multiplier) > stage) {
    results.push(result);
  } else {
    for (let i = vizierIndex + 1; i < availableViziers.length; i++) {
      results = checkSequenceStartingWithVizier(result, availableViziers, stage, results, i, viziers, multiplier);
    }
  }
  return results;
}

function sum(arr, viziers, multiplier) {
  let translated = [];
  for (let i = 0; i < arr.length; i++) {
    translated.push(viziers[arr[i]] * multiplier);
  }
  let sumOfTranslated = translated.reduce((total, added) => total + added);
  return sumOfTranslated;
}