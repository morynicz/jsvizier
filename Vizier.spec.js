describe("detemines which viziers should be used on which stage of hunt", ()=>{
  it("returns empty array when given empty inputs", ()=>{
    expect(calcVizier([],[])).toEqual([]);
  });

  it("should return single vizier if his strength is not less than stage", () => {
    expect(calcVizier([2],[1])).toEqual([[2]]);
  });

  it("should return single vizier which is enough to pass the stage", ()=>{
    let sufficientVizier = 2;
    let viziers = [sufficientVizier,3];
    let stages = [1];
    expect(calcVizier(viziers, stages)).toEqual([[sufficientVizier]]);
  });

  it("should return enough viziers to beat stage", ()=>{
    let viziers = [1,2];
    let stages = [2];
    expect(calcVizier(viziers, stages)).toEqual([[1,2]]);
  });
});
