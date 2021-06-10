describe("Hipster Till", function() {
  let till;

  beforeEach(function() {
    till = new Till(jsonData);
  });

  it("should provide price of an item", function() {
      expect(till.orderItem('Cafe Latte')).toBe(4.75)
  });

  it("should calculate price of an item, based on order quantity", function() {
      expect(till.orderItem('Cafe Latte', 2)).toBe(9.5)
  });
  
  it("should sum the price of a full order", function() {
    till.orderItem("Double Espresso", 2)  
    till.orderItem("Choc Mudcake", 2)  
    till.orderItem("Cortado")  
    expect(till.subTotal()).toEqual(24.85)
  });
  
  it("should calculate tax on an order", function() {
    // how to isolate this test
      till.orderItem("Affogato", 2)  
      till.orderItem("Tea") 
      expect(till.taxTotal()).toEqual(Number((((14.80 * 2) + 3.65) * 0.0864).toFixed(2)))
  });

  it("should calculate a total price on an order", function() {
    // how to isolate this test
      till.orderItem("Cafe Latte")  
      till.orderItem("Flat White", 2)  
      till.orderItem("Cappucino")  
      till.orderItem("Choc Mudcake", 2)  
      till.orderItem("Choc Mousse")  
      till.orderItem("Affogato")  
      till.orderItem("Tiramisu")  
      expect(till.subTotal()).toEqual((65.30))
      expect(till.taxTotal()).toEqual(5.64)
      expect(till.Total()).toEqual((65.30 + 5.64))
  });

  // - Add functionality to take payment and calculate correct change. 
  it("should take payment for an order and return correct change", function() {
    let spy = spyOn(till, 'Total').and.returnValue(42);
    till.Total()
    // expect(spy).toHaveBeenCalled()
    expect(till.processPayment(50)).toEqual(8)
  })

});

const jsonData = [
  {
    "shopName": "The Coffee Connection",
    "address": "123 Lakeside Way",
    "phone": "16503600708",
    "prices": [
      {
        "Cafe Latte": 4.75,
        "Flat White": 4.75,
        "Cappucino": 3.85,
        "Single Espresso": 2.05,
        "Double Espresso": 3.75,
        "Americano": 3.75,
        "Cortado": 4.55,
        "Tea": 3.65,
        "Choc Mudcake": 6.40,
        "Choc Mousse": 8.20,
        "Affogato": 14.80,
        "Tiramisu": 11.40,
        "Blueberry Muffin": 4.05,
        "Chocolate Chip Muffin": 4.05,
        "Muffin Of The Day": 4.55
      }
    ]
  }
]
