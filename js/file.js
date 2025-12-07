const desserts = [
    { name: "Tiramisu", desc: "Layers of espresso-soaked ladyfingers and silky mascarpone cream dusted with cocoa powder — a dreamy Italian classic.", images: ["images/tiramisu.png"] },
    { name: "White Chocolate Macadamia Nut Cookies", desc: "Crispy on the outside, chewy on the inside, loaded with sweet white chocolate chunks and buttery macadamia nuts.", images: ["images/macadamia.png"] },
    { name: "Portugese Egg Tart", desc: "A delicate, flaky pastry shell filled with smooth, caramelized custard — the perfect balance of crisp and creamy.", images: ["images/eggtart.png"] },
    { name: "Kunafa", desc: "Golden shredded pastry woven with sweet cheese and soaked in fragrant orange blossom syrup — a decadent Middle Eastern delight.", images: ["images/kunafa.png"] },
    { name: "Creme Brulee", desc: "A velvety vanilla custard crowned with a crisp, caramelized sugar crust that cracks under your spoon.", images: ["images/cremebruleepng.png"] },
    { name: "Carrot Cake", desc: "Moist, spiced cake with shredded carrots and walnuts, topped with a luscious cream cheese frosting.", images: ["images/carrotcake.png"] }
];

const btn = document.getElementById("generate-btn");
const resultBox = document.getElementById("result");
const dessertName = document.getElementById("dessert-name");
const dessertDesc = document.getElementById("dessert-desc");

btn.addEventListener("click", () => {
    let dessertImg = document.getElementById("dessert-img");
    if (!dessertImg) {
        dessertImg = document.createElement("img");
        dessertImg.id = "dessert-img";
        dessertImg.alt = "Dessert result";
        resultBox.insertBefore(dessertImg, dessertName);
    }

    dessertImg.classList.add("shuffle");
    setTimeout(() => dessertImg.classList.remove("shuffle"), 400);

    const selected = desserts[Math.floor(Math.random() * desserts.length)];
    const randomImage = selected.images[Math.floor(Math.random() * selected.images.length)];

    setTimeout(() => {
        dessertName.textContent = selected.name;
        dessertDesc.textContent = selected.desc;
        dessertImg.src = randomImage;
        resultBox.classList.remove("hidden");
    }, 150);
});