/**
 * STRELECKÝ KLUB BELLATOR - Rezervačný systém
 */

let kapacity = {
    "20.2.2026": 6,
    "12.3.2026": 10
};

function otvoritDetail(typKurzu) {
    const modal = document.getElementById('courseModal');
    const title = document.getElementById('modalTitle');
    const details = document.getElementById('modalDetails');

    if (typKurzu === 'domov') {
        title.innerText = "Ochrana obydlia (Home Defence)";
        
        details.innerHTML = `
            <div class="modal-grid">
                <div class="modal-text">
                    <img src="img/HS-home.webp" class="modal-img-small" alt="Ochrana obydlia">
                    
                    <h4><i class="fas fa-bullseye"></i> CIEĽOM KURZU JE:</h4>
                    <ul>
                        <li>zvýšiť bezpečnostné povedomie jednotlivca v prostredí vlastného obydlia,</li>
                        <li>naučiť účastníkov bezpečne a zákonne reagovať na hrozbu v obydlí,</li>
                        <li>zdokonaliť manipuláciu so zbraňou v defenzívnom a stresovom prostredí,</li>
                        <li>zlepšiť rozhodovanie, orientáciu a sebaovládanie v krízovej situácii.</li>
                    </ul>

                    <h4><i class="fas fa-users"></i> CIEĽOVÁ SKUPINA:</h4>
                    <ul>
                        <li>civilné osoby – držitelia zbrojného preukazu,</li>
                        <li>jednotlivci zaujímajúci sa o osobnú a rodinnú bezpečnosť,</li>
                        <li>osoby vykonávajúce sebaobranu v rámci zákona.</li>
                    </ul>

                    <h4><i class="fas fa-book"></i> OBSAH KURZU:</h4>
                    
                    <div class="obsah-sekcia">
                        <i class="fas fa-gavel"></i>
                        <div>
                            <strong>1. Teoretická časť:</strong><br>
                            Právny rámec použitia zbrane civilnou osobou, princípy nutnej obrany a krajnej núdze, základné bezpečnostné princípy ochrany obydlia, prevencia, vyhodnocovanie rizík a rozhodovanie.
                        </div>
                    </div>

                    <div class="obsah-sekcia">
                        <i class="fas fa-person-military-pointing"></i>
                        <div>
                            <strong>2. Taktická príprava (defenzívna):</strong><br>
                            Bezpečný pohyb v priestore obydlia, práca s krytom a uhlami, orientácia v znížených svetelných podmienkach, ochrana seba a blízkych osôb.
                        </div>
                    </div>

                    <div class="obsah-sekcia">
                        <i class="fas fa-crosshairs"></i>
                        <div>
                            <strong>3. Strelecká časť:</strong><br>
                            Bezpečná manipulácia so zbraňou v interiéri, streľba v obmedzenom priestore a z defenzívnych pozícií.
                        </div>
                    </div>

                    <div class="obsah-sekcia">
                        <i class="fas fa-bolt"></i>
                        <div>
                            <strong>4. Modelové situácie:</strong><br>
                            Narušenie obydlia, reakcia jednotlivca bez podpory tímu, rozhodovanie medzi únikom, krytím a obranou, ukončenie situácie a následné kroky.
                        </div>
                    </div>

                    <h4 style="margin-top:25px;"><i class="fas fa-shield-alt"></i> DÔLEŽITÉ INFORMÁCIE</h4>
                    <div class="obsah-sekcia">
                        <span><i class="fas fa-check"></i> Účasť na kurze je možná <strong>aj bez zbrojného preukazu</strong>.</span>
                    </div>
                    <div class="obsah-sekcia">
                        <span><i class="fas fa-gun"></i> Možnosť prenajatia zbrane: 10 €/kurz (platba na mieste). Podmienkou prenájmu je zakúpenie munície od Bellator Armory. V cene kurzu nie je zahrnutý prenájom zbrane a strelivo.</span>
                    </div>
                    <div class="obsah-sekcia">
                        <span><i class="fas fa-hand-holding-heart"></i> Prenájom výstroja (puzdro, nosič, ochrana uší a očí) je <strong>zdarma</strong>.</span>
                    </div>

                    <h4 style="margin-top:20px;"><i class="fas fa-id-card-clip"></i> INFO K REGISTRÁCII</h4>
                    <p style="font-size: 0.85rem; color: #aaa; line-height: 1.4;">
                        Pre garantovanie miesta je potrebné uhradiť poplatok najneskôr 14 dní pred začiatkom. Ak sa prihlásite neskôr, úhrada je potrebná okamžite. 
                        Poplatok sa vracia len pri zrušení kurzu zo strany organizátora. Pri neúčasti poplatok neprepadá, ale presúva sa ako kredit na náhradný termín. 
                        Doplatky za muníciu sa hradia na mieste. Ak potrebujete FA, kontaktujte nás vopred.
                    </p>
                </div>

                <div class="modal-info-panel">
                    <div class="info-box">
                        <i class="fas fa-location-dot"></i>
                        <span><strong>Miesto:</strong><br>Strelnica Bellator Trenčín</span>
                    </div>
                    
                    <h4>Vyberte si termín:</h4>
                    <select id="termin-select" onchange="aktualizovatKapacitu()">
                        <option value="20.2.2026">20.02.2026 o 10:00</option>
                        <option value="12.3.2026">12.03.2026 o 10:00</option>
                    </select>

                    <div id="kapacita-status" style="margin-top:15px; font-weight:bold; text-align:center; padding:10px; border: 1px dashed #444;">
                    </div>

                    <div class="cena-box">120 €</div>
                </div>
            </div>
        `;
        aktualizovatKapacitu();
    } else {
        title.innerText = "Pripravujeme...";
        details.innerHTML = "<p style='padding:20px;'>Obsah pre tento kurz momentálne finalizujeme.</p>";
    }

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function aktualizovatKapacitu() {
    const termin = document.getElementById('termin-select').value;
    const volne = kapacity[termin];
    const statusDiv = document.getElementById('kapacita-status');
    statusDiv.innerHTML = `<i class="fas fa-users"></i> Voľné miesta: ${volne} / 10`;
    statusDiv.style.color = volne <= 3 ? "#ff4444" : "#8a9a5b";
}

function potvrditRezervaciu() {
    const termin = document.getElementById('termin-select').value;
    const details = document.getElementById('modalDetails');
    
    details.innerHTML = `
        <div style="max-width: 500px; margin: 0 auto; padding: 20px;">
            <h3 style="color:#8a9a5b; text-align:center;">Registrácia na ${termin}</h3>
            <label>Meno a priezvisko</label>
            <input type="text" id="reg-meno" placeholder="Jozef Mrkva">
            <label>E-mail</label>
            <input type="email" id="reg-email" placeholder="jozef@email.com">
            <label>Telefónne číslo</label>
            <input type="tel" id="reg-tel" placeholder="+421 900 000 000">
            <div style="margin-top: 15px; font-size: 0.8rem; color: #888;">
                <input type="checkbox" id="souhlas"> Súhlasím so spracovaním údajov a podmienkami kurzu.
            </div>
            <button onclick="odoslatFinalnuRezervaciu('${termin}')" style="margin-top:20px;">Odoslať prihlášku</button>
            <button onclick="otvoritDetail('domov')" style="background:none; color:#888; border:1px solid #444; margin-top:10px;">Späť na detaily</button>
        </div>
    `;
}

function odoslatFinalnuRezervaciu(termin) {
    const meno = document.getElementById('reg-meno').value;
    if (!meno || !document.getElementById('souhlas').checked) {
        alert("Prosím vyplňte meno a zaškrtnite súhlas.");
        return;
    }
    kapacity[termin] -= 1;
    alert(`Ďakujeme, ${meno}! Rezervácia bola zaznamenaná.`);
    zatvoritDetail();
}

function zatvoritDetail() {
    document.getElementById('courseModal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('courseModal')) zatvoritDetail();
}