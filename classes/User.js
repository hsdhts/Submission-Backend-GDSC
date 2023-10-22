class User {
    constructor(id, nama, alamat) {
      this.id = id;
      this.nama = nama;
      this.alamat = alamat;
    }
  
    // Menampilkan informasi pengguna
    displayInfo() {
      return `ID: ${this.id}, Nama: ${this.nama}, Alamat: ${this.alamat}`;
    }
  }
  
  module.exports = User;
  