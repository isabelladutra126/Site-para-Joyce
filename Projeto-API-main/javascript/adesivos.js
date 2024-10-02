document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll("#box .card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "transform 0.2s";
            card.style.transform = "scale(1.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transition = "transform 0.2s";
            card.style.transform = "scale(1)";
        });
    });
});

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    const data = [
        { name: 'Barbie', description: 'Adesivo da Barbie', image: 'fotos/figurinha1.png' },
        { name: 'Heartstopper', description: 'Adesivo Heartstopper ', image: 'fotos/figurinha2.png' },
        { name: 'Jujutsu', description: 'Adesivo Jujutsu', image: 'fotos/figurinha3.png' },
        { name: 'Percabeth', description: 'Adesivo percabeth ', image: 'fotos/figurinha4.png' },
        { name: 'Solangelo', description: 'Adesivo Solangelo', image: 'fotos/figurinha5.png' },
        { name: 'Pet', description: 'Adesivo Pet', image: 'fotos/figurinha6.png' },
        { name: 'Nimona', description: 'Adesivo Nimona ', image: 'fotos/adesivo_nimona.png' },
        { name: 'SPQR', description: 'Adesivo SPQR', image: 'fotos/camp.png' }
    ];

    const filteredData = data.filter(item => item.name.toLowerCase().includes(query));

    filteredData.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        const span = document.createElement('span');
        span.innerHTML = `<strong>${item.name}</strong> - ${item.description}`;
        li.appendChild(img);
        li.appendChild(span);
        searchResults.appendChild(li);
    });

    searchResults.style.display = 'block';
});

searchResults.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        const description = e.target.querySelector('span').textContent;
        searchInput.value = description.split(' - ')[0];
        searchResults.style.display = 'none';
    }
});

function expandImage(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("expandedImg");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

