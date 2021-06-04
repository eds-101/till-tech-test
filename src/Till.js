class Till {
  constructor(data) {
    this.items = data[0].prices[0]
  }
  
  order(item, quantity = 1) {
    return this.items[item] * quantity
  }
  
}

