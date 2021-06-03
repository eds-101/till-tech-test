class Till {
  constructor(data) {
    this.items = data[0].prices[0]
  }
  
  order(item) {
      return this.items[item]
  }
  
}

