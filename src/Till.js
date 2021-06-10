// const sourceData = new Request('../hipsterCoffee.json')

// fetch(sourceData)
//   .then(res => res.json())
//   .then(data => console.log(data))

class Till {
  constructor(data) {
    this.items = data[0].prices[0]
    this.orderList = []
    this.taxRate = 0.0864
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
    return Number(subTotal.toFixed(2))
  }

  taxTotal() {
    const subTotal = this.subTotal()
    let taxTotal = subTotal * this.taxRate
    return Number(taxTotal.toFixed(2))
  }

  Total() {
    const total = this.taxTotal() + this.subTotal()
    return Number(total.toFixed(2))
  }

  processPayment(cashValue) {
    const change = cashValue - this.Total()
    return Number(change.toFixed(2))
  }


}

// Total() {
//   const total = this.taxTotal + this.subTotal
//   return Number(total.toFixed(2))
// }