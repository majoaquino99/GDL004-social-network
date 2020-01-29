export default () => {
    const viewHome = `
    <header>
    <h1>BOOK · ING</h1>
    </header>
    <div>
    <h1>Bienvenida a READ & TELL</h1>
    <h2>HOME</h2>
    </div>
    
    
    `
    const divHomeElement = document.createElement("div");
    divHomeElement.innerHTML = viewHome;
    return divHomeElement;
};