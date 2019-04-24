describe("detemines which viziers should be used on which stage of hunt", () => {
  it("returns empty array when viziers are empty", () => {
    let viziers = [];
    let stages = [2];
    expect(calcVizier(viziers, stages)).toEqual([]);
  });

  it("returns empty array when stages are empty", () => {
    let viziers = [1];
    let stages = [];
    expect(calcVizier(viziers, stages)).toEqual([]);
  });

  it("should return single vizier if his strength is not less than stage", () => {
    expect(calcVizier([2], [1])).toEqual([[2]]);
  });

  it("should return single vizier which is enough to pass the stage", () => {
    let sufficientVizier = 2;
    let viziers = [sufficientVizier, 3];
    let stages = [1];
    expect(calcVizier(viziers, stages)).toEqual([[sufficientVizier]]);
  });

  it("should return enough viziers to beat stage", () => {
    let viziers = [1, 2];
    let stages = [2];
    expect(calcVizier(viziers, stages)).toEqual([[1, 2]]);
  });

  it("should return not more viziers than required to beat stage", () => {
    let viziers = [1, 2, 6];
    let stages = [6];
    expect(calcVizier(viziers, stages)).toEqual([[1, 6]]);
  });

  xit("should return vizier sequence for two stages", () => {
    let viziers = [1, 2, 5, 10];
    let stages = [6, 11];
    expect(calcVizier(viziers, stages)).toEqual([[2, 5], [1, 10]]);
  });
});
