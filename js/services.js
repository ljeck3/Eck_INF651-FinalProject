document.addEventListener("DOMContentLoaded", async () => {
  const services = await getServices();
  renderServices(services);
});

//Get from json
async function getServices() {
  const response = await fetch("../data/services.json");
  const data = await response.json();
  return data;
}

//Render
function renderServices(services) {
    services.forEach((service) => {
    console.log(`${service.service}`);
  })
}
