const sheetId = '1rZekKmhyswz5hHC4vuA0BZnGWKEFkBv-AzDEOupC9es'; // Ganti dengan ID Sheet
const sheetName = 'PROGRESS'; // Ganti jika nama sheet berbeda
const apiKey = ''; // Ganti dengan API Key Google (atau kosong jika sheet publik)

// const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;
const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=PROGRESS`;


fetch(url)
  .then(response => response.json())
  .then(data => {
    const values = data.values;
    const rows = values.slice(1); // skip header
    const container = document.getElementById('data-container');

    rows.forEach(row => {
      const content = `
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p><strong>No.:</strong> ${row[0]}</p>
              <p><strong>Jenis Hewan:</strong> ${row[1]}</p>
              <p><strong>Harga:</strong> ${row[2]}</p>
              <p><strong>Penjual:</strong> ${row[3]}</p>
              <p><strong>Kontak Penjual:</strong> ${row[4]}</p>
              <p><strong>Keterangan:</strong> ${row[5]}</p>
              <p><strong>Tanggal Transaksi:</strong> ${row[6]}</p>
              <p><strong>Jumlah Transaksi:</strong> ${row[7]}</p>
              <p><strong>Sisa:</strong> ${row[8]}</p>
              <p><strong>Tanggal Pelunasan:</strong> ${row[9]}</p>
              <p><strong>Tanggal Pengiriman:</strong> ${row[10]}</p>
              <p><strong>Petugas Penerima:</strong> ${row[11]}</p>
            </div>
          </div>
        </article>
      `;
      container.innerHTML += content;
    });
  })
  .catch(error => {
    console.error('Error:', error);
    const container = document.getElementById('data-container');
    container.innerHTML = `<div class="notification is-danger">Gagal memuat data.</div>`;
  });
