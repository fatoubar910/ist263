// Turn all planets off
function PlanetsOff() {
    const planets = ['mercury','venus','earth','mars','jupiter','saturn','uranus','neptune'];
    planets.forEach(planet => {
        document.getElementById(planet).style.display = 'none';
        document.getElementById(planet + 'info').style.display = 'none';
    });
}

// Show one planet
function ShowPlanet(planet) {
    PlanetsOff();
    document.getElementById(planet).style.display = 'block';
    document.getElementById(planet + 'info').style.display = 'block';
}

// Show Mercury by default on page load
window.onload = () => ShowPlanet('mercury');
