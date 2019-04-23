function calcVizier(viziers, stages){
  if (viziers.length == 0) {
    return [];
  }

  if (viziers[0] > stages[0]){
    return [[viziers[0]]];
  } else {
    return [viziers];
  }

}
