export default () => {
    const viewHome = `
    <h1>Bienvenida a READ & TELL</h1>
    <h2>HOME</h2>
    `
    const divHomeElement = document.createElement("div");
    divHomeElement.innerHTML = viewHome;
    return divHomeElement;
};