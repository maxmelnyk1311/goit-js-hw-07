const arr = document.querySelectorAll(".item");

console.log(`Number of categories: ${arr.length}`);


arr.forEach(function (item, index) {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
})