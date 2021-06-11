describe("Hipster Till: Feature Test", function() {

  it("should reproduce example on receipt.jpeg", function() {
      let till = new Till(jsonData);
      till.orderItem("Cafe Latte")
      till.orderItem("Flat White", 2)  
      till.orderItem("Cappucino")  
      till.orderItem("Choc Mudcake", 2)  
      till.orderItem("Choc Mousse")  
      till.orderItem("Affogato")  
      till.orderItem("Tiramisu")  
      expect(till.subTotal()).toEqual(65.30)
      expect(till.orderDiscount()).toEqual(3.27)
      expect(till.taxTotal()).toEqual(5.64)
      expect(till.Total()).toEqual(62.04)
      expect(till.processPayment(70)).toEqual(7.97)
  });

});

