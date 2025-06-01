const sheetId = '1rZekKmhyswz5hHC4vuA0BZnGWKEFkBv-AzDEOupC9es';
const sheetName = 'PROGRESS PEMBELIAN!A1:C13';
const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

fetch(url)
  .then(response => response.text())
  .then(text => {
    // Hilangkan prefix & suffix agar valid JSON
    const json = JSON.parse(text.substr(47).slice(0, -2));

    const rows = json.table.rows;
    const container = document.getElementById('data-container');

    rows.forEach(row => {
      const cells = row.c;
      const content = `
        <article class="media box mb-3">
          <div class="media-content">
            <div class="content">
              <p><strong>No.:</strong> ${cells[0]?.v || ''}</p>
              <p><strong>Jenis Hewan:</strong> ${cells[1]?.v || ''}</p>
              <p><strong>Harga:</strong> ${cells[2]?.v || ''}</p>
              <p><strong>Penjual:</strong> ${cells[3]?.v || ''}</p>
              <p><strong>Kontak Penjual:</strong> ${cells[4]?.v || ''}</p>
              <p><strong>Keterangan:</strong> ${cells[5]?.v || ''}</p>
              <p><strong>Tanggal Transaksi:</strong> ${cells[6]?.v || ''}</p>
              <p><strong>Jumlah Transaksi:</strong> ${cells[7]?.v || ''}</p>
              <p><strong>Sisa:</strong> ${cells[8]?.v || ''}</p>
              <p><strong>Tanggal Pelunasan:</strong> ${cells[9]?.v || ''}</p>
              <p><strong>Tanggal Pengiriman:</strong> ${cells[10]?.v || ''}</p>
              <p><strong>Petugas Penerima:</strong> ${cells[11]?.v || ''}</p>
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
