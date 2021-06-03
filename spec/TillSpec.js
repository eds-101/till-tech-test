describe("Hipster Till", function() {
  let till;

  beforeEach(function() {
    till = new Till();
  });

  it("should provide price of an item", function() {
      expect(till.order('Cafe Latte')).toBe(4.75)
  });

});
