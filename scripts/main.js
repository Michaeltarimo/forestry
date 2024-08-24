// Function to load an HTML component from a file
async function loadComponent(url, containerId) {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
}

// Load the navbar and footer components
loadComponent('components/navbar.html', 'navbar-container');
loadComponent('components/footer.html', 'footer-container');
