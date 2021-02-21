function generateColors () {
    
    let color = Math.floor(Math.random() * 16777216).toString(16);

    return '#000000'.slice(0, -color.length) + color;

    
}

function headerColors () {
    let headers = document.querySelectorAll('.card-header')

    headers.forEach((header) => {
        header.style.backgroundColor = generateColors()
    })
}

