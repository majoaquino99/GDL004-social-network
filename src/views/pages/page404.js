 
export default () => {
    const viewDifferent = `
  <div id="bodyPage404"
    <div class="page404">
      <h1>404 error</h1>
      <h2>Oops, the page you're looking for does not exist.</h2>
    
      <p> You may want to head back to the homepage.
       <br />
           If you think something is broken, report a problem.
      </p>
    </div>
  </div>
      `;
  
    const divElemt = document.createElement('div');
    divElemt.setAttribute('id', 'message');
    divElemt.innerHTML = viewDifferent;
    return divElemt;
  };