//create server ini mengambil fungsi dari moduk http
const { createServer } = require("node:http");

//kita membuat hostname untuk server
const hostname = "127.0.0.1";

//Lalu, mendeklarasikan sebuah port untuk apklikasi kita
const port = 5000;
//menjalankan createServer dan memberikan konfigurasi untuk server
const server = createServer((req, res) => {
  //untuk status kode response
  res.statusCode = 200;
  //untuk pembukaan tipe data ke website
  res.setHeader("Content-Type", "text/plain");
  //untuk hasil akhir dari konfigurasi server, yaitu mencetak  hasil
  res.end("Hello world");
});
//menjalanakan server dengan .listen dan memberikan port, hostname, dan callback
server.listen(port, hostname, () => {
  //mencetak log atau text ke server
  console.log(`Server berjalan di http://${hostname}:${port}`);
});
