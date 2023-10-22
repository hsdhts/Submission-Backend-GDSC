class Cart {
    constructor(id, items, user) {
      this.id = id;
      this.items = items;
      this.user = user;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    // displayInfo untuk menampilkan item-item dalam keranjang
    displayInfo() {
      const itemInfo = this.items.join(', ');
      return `ID Keranjang: ${this.id}, Items: ${itemInfo}, User: ${this.user.displayInfo()}`;
    }
  }
  
  module.exports = Cart;
  