class Order {
  constructor(id, tanggalPesan, total, user) {
    this.id = id;
    this.tanggalPesan = tanggalPesan;
    this.total = total;
    this.user = user;
  }

  // Menampilkan informasi pesanan
  displayInfo() {
    return `ID Pesanan: ${this.id}, Tanggal Pesan: ${
      this.tanggalPesan
    }, Total Harga: ${this.total}, User: ${this.user.displayInfo()}`;
  }
}

module.exports = Order;
