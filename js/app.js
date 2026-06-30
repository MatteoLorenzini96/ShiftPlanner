console.log("ShiftPlanner avviato");

// Stato globale (per ora minimale)
const AppState = {
    employees: [],
    rules: [],
    currentWeek: null
};

// render iniziale
document.getElementById("app").innerHTML = `
    <h1>ShiftPlanner</h1>
    <p>App inizializzata correttamente</p>
`;
