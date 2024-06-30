import './style.css'


const data = [
  { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', phone2: '123-456-7891', phone3: '123-456-7892' },
  { name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901', phone2: '234-567-8902', phone3: '234-567-8903' },
  { name: 'Michael Johnson', email: 'michael@example.com', phone: '345-678-9012', phone2: '345-678-9013', phone3: '345-678-9014' },
  { name: 'Emily Davis', email: 'emily@example.com', phone: '456-789-0123', phone2: '456-789-0124', phone3: '456-789-0125' },
  // Ajoutez plus de données si nécessaire
];

const tableBody = document.querySelector('#dataTable tbody');
const searchInput = document.getElementById('searchInput');

function renderTable(data) {
  tableBody.innerHTML = '';
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.phone}</td>
      <td>${item.phone2}</td>
      <td>${item.phone3}</td>
      <td class="action-buttons">
        <button class="modify">Modifier</button>
        <button class="delete">Supprimer</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function filterData(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchTerm) ||
    item.email.toLowerCase().includes(searchTerm) ||
    item.phone.includes(searchTerm) ||
    item.phone2.includes(searchTerm) ||
    item.phone3.includes(searchTerm)
  );
  renderTable(filteredData);
}

searchInput.addEventListener('input', filterData);

// Initial rendering of the table
renderTable(data);
