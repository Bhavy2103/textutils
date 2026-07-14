const text = document.getElementById("text");

text.addEventListener("input", updateCount);

function upperCase(){
    text.value = text.value.toUpperCase();
    updateCount();
}

function lowerCase(){
    text.value = text.value.toLowerCase();
    updateCount();
}

function capitalizeText(){
    text.value = text.value
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    updateCount();
}

function clearText(){
    text.value = "";
    updateCount();
}

function updateCount(){
    document.getElementById("chars").textContent = text.value.length;

    const words = text.value.trim() === ""
        ? 0
        : text.value.trim().split(/\s+/).length;

    document.getElementById("words").textContent = words;
}
