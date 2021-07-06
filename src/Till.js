export default class Till {
  constructor(data) {
    this.items = data[0].prices[0]
    this.orderList = []
    this.taxRate = 0.0864
    this.minOrderDiscount = 50
    this.orderDiscountRate = 0.05
    this.itemDiscounts = [["Test", 0.4],["Muffin", 0.1]]
  }
  
  orderItem(item, quantity = 1) {
    let price = this.items[item] * quantity
    if(this.addItemDiscount(item)){
      price = price - (price * this.addItemDiscount(item))
    }
    this.orderList.push([item, quantity, price])
    return price
  }

  addItemDiscount(item) {
    let discount = 1
    this.itemDiscounts.forEach(function(e) {
      if (item.includes(e[0])) {
        discount = e[1]
      }
    })
    if (discount != 1) {
      return discount
    }
  }
  
  subTotal() {
    let subTotal = 0
    for(let i = 0; i < this.orderList.length; i++ ) {
      subTotal += this.orderList[i][2]
    }
    return this.numToCurrency(subTotal)
  }

  taxTotal() {
    const subTotal = this.subTotal()
    const taxTotal = subTotal * this.taxRate
    return this.numToCurrency(taxTotal)
  }

  orderDiscount() {
    if (this.subTotal() < this.minOrderDiscount) {
      return 0
    }
    else {
      return this.numToCurrency(this.subTotal() * 0.05)
    }
  }

  Total() {
    let total = this.subTotal() - this.orderDiscount()
    return this.numToCurrency(total)
  }

  processPayment(cashValue) {
    const change = cashValue - this.Total()
    return this.numToCurrency(change)
  }

  numToCurrency(value){
    return Number((value).toFixed(2))
  }

}
