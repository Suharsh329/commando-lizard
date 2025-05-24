const links = [
    { name: "Cool Games", url: "https://coolgames.commando-lizard.xyz" },
    { name: "Mafia", url: "https://mafia.commando-lizard.xyz" },
    { name: "Impostor", url: "https://impostor.commando-lizard.xyz" },
    { name: "Trivia", url: "https://trivia.commando-lizard.xyz" },
    { name: "Mind Master", url: "https://mind-master.commando-lizard.xyz" }
];

function loadLinks() {
    const ul = document.getElementById("links-list");
    if (!ul) {
        console.error("Element with ID 'links-list' not found.");
        return;
    }
    // Sort links alphabetically by name
    links.sort((a, b) => a.name.localeCompare(b.name));

    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.name;
        li.appendChild(a);
        ul.appendChild(li);
    });
}

// Call loadLinks when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadLinks); 