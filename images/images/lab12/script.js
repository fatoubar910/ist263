// Turn all planets off
function PlanetsOff() {
    document.getElementById('mercury').style.display = 'none';
    document.getElementById('venus').style.display = 'none';
    document.getElementById('earth').style.display = 'none';
    document.getElementById('mars').style.display = 'none';
    document.getElementById('jupiter').style.display = 'none';
    document.getElementById('saturn').style.display = 'none';
    document.getElementById('uranus').style.display = 'none';
    document.getElementById('neptune').style.display = 'none';

    document.getElementById('mercuryinfo').style.display = 'none';
    document.getElementById('venusinfo').style.display = 'none';
    document.getElementById('earthinfo').style.display = 'none';
    document.getElementById('marsinfo').style.display = 'none';
    document.getElementById('jupiterinfo').style.display = 'none';
    document.getElementById('saturninfo').style.display = 'none';
    document.getElementById('uranusinfo').style.display = 'none';
    document.getElementById('neptuneinfo').style.display = 'none';
}

// Functions to turn each planet on
function MercuryOn() {
    PlanetsOff();
    document.getElementById('mercury').style.display = 'block';
    document.getElementById('mercuryinfo').style.display = 'block';
}

function VenusOn() {
    PlanetsOff();
    document.getElementById('venus').style.display = 'block';
    document.getElementById('venusinfo').style.display = 'block';
}

function EarthOn() {
    PlanetsOff();
    document.getElementById('earth').style.display = 'block';
    document.getElementById('earthinfo').style.display = 'block';
}

function MarsOn() {
    PlanetsOff();
    document.getElementById('mars').style.display = 'block';
    document.getElementById('marsinfo').style.display = 'block';
}

function JupiterOn() {
    PlanetsOff();
    document.getElementById('jupiter').style.display = 'block';
    document.getElementById('jupiterinfo').style.display = 'block';
}

function SaturnOn() {
    PlanetsOff();
    document.getElementById('saturn').style.display = 'block';
    document.getElementById('saturninfo').style.display = 'block';
}

function UranusOn() {
    PlanetsOff();
    document.getElementById('uranus').style.display = 'block';
    document.getElementById('uranusinfo').style.display = 'block';
}

function NeptuneOn() {
    PlanetsOff();
    document.getElementById('neptune').style.display = 'block';
    document.getElementById('neptuneinfo').style.display = 'block';
}

// Show Mercury by default on page load
window.onload = MercuryOn;
