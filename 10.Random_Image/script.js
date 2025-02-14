const btn = document.querySelector("button")

let images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKa9jbAjw4tXhcAuCXPKVWxRrLBPxug9Hmw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xQBNH5RqyRQnFX4C7eb0YfbScec0ZZ4iGA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTxXJ3VK34jPX0hNFNqQdIUJwT3yThCc23Q&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuX-DR9WI-wB_-Cf0IC752qipr1ZD15fQCw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuS3WDY5BllUj74uwrhWDAytxrYr_go3hzSA&s"]


function random2() {
    const randomX = Math.floor(Math.random() * 95);
    const randomY = Math.floor(Math.random() * 95);
    const rotate = Math.floor(Math.random() * 360);
    return { randomX, randomY, rotate };
}



btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * images.length);
    let img = document.createElement("img");
    img.style.position = "absolute"
    let { randomX, randomY, rotate } = random2()
    img.style.top = randomY + "%";
    img.style.left = randomX + "%";
    img.style.rotate = rotate + "deg";
    img.style.width = "100px";
    img.style.height = "100px";
    img.style.objectFit = "cover";
    img.src = images[random];
    document.body.appendChild(img)
})