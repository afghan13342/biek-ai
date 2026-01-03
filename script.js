// Load JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('app-container');

    // Display each item in the JSON
    data.forEach(item => {
      const div = document.createElement('div');
      div.style.border = '1px solid #ccc';
      div.style.padding = '10px';
      div.style.margin = '10px';
      div.style.borderRadius = '8px';
      div.innerHTML = `
        <strong>${item.name || item.title || 'No Title'}</strong>
        <p>${item.description || item.content || ''}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Error loading JSON:', err));
