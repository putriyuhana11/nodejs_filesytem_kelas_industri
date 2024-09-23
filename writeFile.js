const fs = require("node:fs");

fs.writeFile(
  "biodata.txt" , "Hello, perkenalkan saya putri yuhana saat ini saya kelas XI TJKT 2, Alamat rumah saya Jl.yayasan nurul huda Bantargebang lapangan jonjing Blok m No.9, Usia saya saat ini 16 tahun",
  function (error) {
    if (error) {
      console.error("Terjadi Error", error);
    } else {
      console.log("File bisa dibuat");
    }
  }
);
