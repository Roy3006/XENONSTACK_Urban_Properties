window.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:5000/properties');
    const properties = await response.json();

    const propertiesDiv = document.getElementById('properties');
    properties.forEach((property) => {
        const propertyCard = document.createElement('div');
        propertyCard.innerHTML = `
            <h2>${property.name}</h2>
            <p>Location: ${property.location}</p>
            <p>Price: $${property.price}</p>
            <p>${property.description}</p>
            <img src="${property.image_url}" alt="${property.name}" style="width:200px;height:150px;">
        `;
        propertiesDiv.appendChild(propertyCard);
    });
});
