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
      spyOn(till, 'subTotal').and.returnValue(33.25)
      expect(till.taxTotal()).toEqual(Number((((14.80 * 2) + 3.65) * 0.0864).toFixed(2)))
  });

  it("should calculate a total price on an order", function() {
      spyOn(till, 'subTotal').and.returnValue(30)
      expect(till.Total()).toEqual(30)
  });

  it("should take payment for an order and return correct change", function() {
    spyOn(till, 'Total').and.returnValue(42);
    expect(till.processPayment(50)).toEqual(8)
  })

  it("should process 5% discount on order over $50", function() {
    spyOn(till, 'subTotal').and.returnValue(70)
    expect(till.orderDiscount()).toEqual(3.5)
    expect(till.Total()).toEqual(66.5)
  })

  it("should process 10% discount on muffins", function() {
    till.orderItem("Blueberry Muffin")  
    expect(till.subTotal()).toEqual(3.64)
    till.orderItem("Muffin Of The Day")  
    expect(till.subTotal()).toEqual(7.74)
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
