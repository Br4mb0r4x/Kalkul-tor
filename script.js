function spocitat() {
    let cpu = Number(document.getElementById("cpu").value) || 0;
    let mb = Number(document.getElementById("mb").value) || 0;
    let ram = Number(document.getElementById("ram").value) || 0;
    let ssd = Number(document.getElementById("ssd").value) || 0;
    let psu = Number(document.getElementById("psu").value) || 0;
    let pcCase = Number(document.getElementById("case").value) || 0;
    let gpu = Number(document.getElementById("gpu").value) || 0;

    let rozpocet = Number(document.getElementById("budgetType").value);

    let celkem = cpu + mb + ram + ssd + psu + pcCase + gpu;

    let zprava = `Celková cena: ${celkem} Kč<br>`;

    if (celkem <= rozpocet) {
        zprava += "Sestava se vejde do rozpočtu.";
    } else {
        zprava += "Sestava překračuje rozpočet.";
    }

    document.getElementById("vysledek").innerHTML = zprava;
}