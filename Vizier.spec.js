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
    let viziers = [2];
    let stages = [1];
    expect(calcVizier(viziers, stages)).toEqual([[2]]);
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

  it("should return three viziers if needed to beat stage", () => {
    let viziers = [1, 2, 3];
    let stages = [5];
    expect(calcVizier(viziers, stages)).toEqual([[1, 2, 3]]);
  });

  it("should use higher number viziers if needed to beat the stage", () => {
    let viziers = [1, 2, 3];
    let stages = [4];
    expect(calcVizier(viziers, stages)).toEqual([[2, 3]]);
  });

  it("should omit middle strength viziers if it is enough to beat stage", () => {
    let viziers = [1, 3, 7, 8];
    let stages = [8];
    expect(calcVizier(viziers, stages)).toEqual([[1, 8]]);
  });

  it("should handle multiple stages", () => {
    let viziers = [2, 6, 7];
    let stages = [5, 8];
    expect(calcVizier(viziers, stages)).toEqual([[6], [2, 7]]);
  });

  it("should handle repeating vizier powers", () => {
    let viziers = [2, 6, 6];
    let stages = [5, 7];
    expect(calcVizier(viziers, stages)).toEqual([[6], [2, 6]]);
  });

  xit("should handle sequences where low viziers are needed to pass higher stages", () => {
    let viziers = [10, 20, 30, 50, 61, 70];
    let stages = [50, 70, 80];

    expect(calcVizier(viziers, stages)).toEqual([[61], [50, 30], [70, 20]]);
  });
});
