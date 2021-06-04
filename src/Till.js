class Till {
  constructor(data) {
    this.items = data[0].prices[0]
    this.orderList = []
  }
  
  orderItem(item, quantity = 1) {
    let price = this.items[item] * quantity
    this.orderList.push([item, quantity, price])
    return price
  }
  
  totalPrice() {
    let totalPrice = 0
    for(let i = 0; i < this.orderList.length; i++ ) {
      totalPrice += this.orderList[i][2]
    }
    return totalPrice
  }

}

