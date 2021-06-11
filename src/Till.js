// const sourceData = new Request('../hipsterCoffee.json')

// fetch(sourceData)
//   .then(res => res.json())
//   .then(data => console.log(data))

class Till {
  constructor(data) {
    this.items = data[0].prices[0]
    this.orderList = []
    this.taxRate = 0.0864
    this.minOrderDiscount = 50
    this.orderDiscountRate = 0.05
  }
  
  orderItem(item, quantity = 1) {
    let price = this.items[item] * quantity
    this.orderList.push([item, quantity, price])
    return price
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
    const total = this.taxTotal() + this.subTotal() - this.orderDiscount()
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
