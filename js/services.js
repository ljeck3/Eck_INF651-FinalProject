document.addEventListener("DOMContentLoaded", async () => {
  const services = await getServices();
  renderServices(services);

//Sorts based on dropdown selectoin
  const dropdown = document.getElementById("sortSelect");
  dropdown.addEventListener("change", () => {
    const sortType = dropdown.value;
    if (sortType === "name") {
      services.sort((a, b) => a.service.localeCompare(b.service));
    } else if (sortType === "price") {
      services.sort((a, b) => Number(a.price) - Number(b.price));
    }
    renderServices(services);
  });
});

//Get from json
async function getServices() {
  const response = await fetch("../data/services.json");
  const data = await response.json();
  return data;
}

//Render
function renderServices(services) {

    
    //Test to see if getting data
    console.log("Loading Services...")
    services.forEach((service) => {
    console.log(`   ${service.service}`);
    })

    //For real
    const container = document.getElementById("service-list");
    container.innerHTML = "";

    services.forEach((service) => {
        const div = document.createElement("div");
        div.className = "service";
        div.innerHTML = `
        <img src="${service.image}" alt="${service.title}">
        <h2>${service.service}</h2>
        <p>$${service.price}</p>
        <p>${service.description}</p>
        `;
        container.appendChild(div);
    });
}
