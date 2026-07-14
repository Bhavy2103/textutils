const text = document.getElementById("text");

text.addEventListener("input", updateCount);

function upperCase() {
    text.value = text.value.toUpperCase();
    updateCount();
}

function lowerCase() {
    text.value = text.value.toLowerCase();
    updateCount();
}

function italic() {
    if (text.style.fontStyle === "italic") {
        text.style.fontStyle = "normal";
    } else {
        text.style.fontStyle = "italic";
    }
    updateCount();
}
function Underline() {
    if (text.style.textDecoration === "Underline") {
        text.style.textDecoration = "normal";
    } else {
        text.style.textDecoration = "Underline";
    }
    updateCount();
}

function H1() {
    if (text.style.fontSize === "40px") {
        text.style.fontSize = "normal"
    }
    else {
        text.style.fontSize = "40px"
    }
    updateCount();
}

function Reverse() {
    text.value = text.value.split("").reverse().join("")
    updateCount();
}

function Copy() {
    navigator.clipboard.writeText(text.value)
        ? text.style.color = "Green"
        : navigator.clipboard.writeText(text.value);
    updateCount();
}

async function Past() {
    text.value = await navigator.clipboard.readText()
    text.style.color = "Green"
    updateCount();
}
function bold() {
    if (text.style.fontWeight === "bold") {
        text.style.fontWeight = "normal";
    }
    else {
        text.style.fontWeight = "bold";
    }

    updateCount();
}



function capitalizeText() {
    text.value = text.value
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    updateCount();
}

function clearText() {
    text.value = "";
    updateCount();
}

function updateCount() {
    document.getElementById("chars").textContent = text.value.length;

    const words = text.value.trim() === ""
        ? 0
        : text.value.trim().split(/\s+/).length;

    document.getElementById("words").textContent = words;

    const Line = text.value.trim() === "" ? 0 : text.value.trim().split("\n").length;
    document.getElementById("Line").textContent = Line;
}
