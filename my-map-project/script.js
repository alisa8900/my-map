// Инициализация карты (центр - Лимасол)
const map = L.map('map').setView([34.707, 33.022], 13);

// Выбор стиля карты (3 варианта на выбор)
// 1. Стандартная светлая карта:
L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    attribution: '© Google Satellite'
}).addTo(map);

// Массив с местами (добавьте свои точки)
const places = [
    {
        name: "second cup 🤍",
        address: "Arch. Makarios III Avenue 139, Limassol 3085, Cyprus",
        coords: [34.68646, 33.03494], 
        videoUrl: "https://drive.google.com/file/d/1h7lGbYucJ8DNZRLmajoul2nGf7AhSGbO/preview"
    },
    {
        name: "starbucks",
        address: "Anexartisias 187, Limassol 3040, Cyprus",
        coords: [34.68030, 33.04335],
        videoUrl: "https://drive.google.com/file/d/1TvEpaU7t1VgIKyDpwzxE0J0RB6gmWDtf/preview"
    }
    // Добавьте другие места по аналогии
];

// Добавляем метки на карту
places.forEach(place => {
    const marker = L.marker(place.coords).addTo(map);
    
    let videoHtml;
    if (place.videoUrl.includes('youtube.com')) {
        // Для YouTube
        videoHtml = `
            <iframe width="250" height="200" 
                src="${place.videoUrl}" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        `;
    } else if (place.videoUrl.includes('google.com')) {
        // Для Google Drive
        videoHtml = `
            <iframe width="250" height="200" 
                src="${place.videoUrl}" 
                frameborder="0" 
                allow="autoplay">
            </iframe>
        `;
    } else {
        // Для локальных файлов
        videoHtml = `
            <video controls width="250">
                <source src="${place.videoUrl}" type="video/mp4">
                Ваш браузер не поддерживает видео
            </video>
        `;
    }

    marker.bindPopup(`
        <h3>${place.name}</h3>
        <div style="width: 250px; height: 400px; overflow: hidden; border-radius: 10px;">
            <iframe 
                src="${place.videoUrl}" 
                width="100%" 
                height="100%"
                style="object-fit: cover;"
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
    `);
});