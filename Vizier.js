function calcVizier(viziers, stages) {
  if (viziers.length == 0 || stages.length == 0) {
    return [];
  }

  let result = [];

  result.push(viziers[0]);
  if (viziers[0] > stages[0]) {
    return [result];
  } else {
    for (let i = 1; i < viziers.length; i++) {
      if (viziers[i] + result[0] > stages[0]) {
        result.push(viziers[i]);
        return [result];
      }
    }
  }
}
