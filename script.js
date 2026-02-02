/**
 * STRELECKÝ KLUB BELLATOR - Rezervačný systém (KOMPLETNÁ VERZIA)
 */

let kapacity = {
    "20.2.2026": 6,
    "12.3.2026": 10
};

// --- 1. FUNKCIA PRE MOBILNÉ MENU (HAMBURGER) ---
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Zatvorenie menu po kliknutí na odkaz
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// --- 2. HLAVNÁ FUNKCIA OTVORENIA DETAILU ---
function otvoritDetail(typKurzu) {
    const modal = document.getElementById('courseModal');
    const textPanel = document.querySelector('.modal-text');
    const infoPanel = document.querySelector('.modal-info-panel');

    if (typKurzu === 'domov') {
        // --- OCHRANA OBYDLIA ---
        textPanel.innerHTML = `
            <h2 id="modalTitle">Ochrana obydlia (Home Defence)</h2>
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
                <div><strong>1. Teoretická časť:</strong> Právny rámec, nutná obrana a krajná núdza, základné bezpečnostné princípy ochrany obydlia.</div>
            </div>
            <div class="obsah-sekcia">
                <i class="fas fa-map-signs"></i>
                <div><strong>2. Taktická príprava (defenzívna):</strong> Bezpečný pohyb v priestore, práca s krytom a uhlami, nízke svetelné podmienky.</div>
            </div>
            <div class="obsah-sekcia">
                <i class="fas fa-crosshairs"></i>
                <div><strong>3. Strelecká časť:</strong> Bezpečná manipulácia v interiéri, streľba v obmedzenom priestore a z defenzívnych pozícií.</div>
            </div>
            <div class="obsah-sekcia">
                <i class="fas fa-bolt"></i>
                <div><strong>4. Modelové situácie:</strong> Narušenie obydlia, rozhodovanie medzi únikom a obranou, ukončenie situácie.</div>
            </div>

            <h4><i class="fas fa-shield-alt"></i> DÔLEŽITÉ INFORMÁCIE</h4>
            <div class="obsah-sekcia"><span><i class="fas fa-check" style="color:var(--army-olive)"></i> Účasť možná <strong>aj bez zbrojného preukazu</strong>.</span></div>
            <div class="obsah-sekcia"><span><i class="fas fa-gun"></i> Prenájom zbrane: 10 €/kurz. Podmienkou je zakúpenie munície u nás.</span></div>
            <div class="obsah-sekcia"><span><i class="fas fa-hand-holding-heart"></i> Prenájom výstroja (puzdro, ochrana sluchu a zraku) je <strong>zdarma</strong>.</span></div>
        `;

        infoPanel.innerHTML = `
            <div class="info-box-modern">
                <i class="fas fa-location-dot"></i>
                <span><strong>Miesto výcviku:</strong><br>Strelnica Bellator Trenčín</span>
            </div>
            
            <h4 class="select-title">Dostupné termíny:</h4>
            <div class="terminy-container">
                <div class="termin-card active" onclick="vybratTermin(this, '20.2.2026')">
                    <div class="date">20. Február 2026</div>
                    <div class="time">Piatok o 10:00</div>
                    <div class="slots" id="slots-20-2" style="color: ${kapacity["20.2.2026"] <= 3 ? '#ff4444' : '#8a9a5b'}">
                        Voľné miesta: ${kapacity["20.2.2026"]} / 10
                    </div>
                </div>

                <div class="termin-card" onclick="vybratTermin(this, '12.3.2026')">
                    <div class="date">12. Marec 2026</div>
                    <div class="time">Štvrtok o 10:00</div>
                    <div class="slots" id="slots-12-3" style="color: ${kapacity["12.3.2026"] <= 3 ? '#ff4444' : '#8a9a5b'}">
                        Voľné miesta: ${kapacity["12.3.2026"]} / 10
                    </div>
                </div>
            </div>

            <input type="hidden" id="termin-select" value="20.2.2026">

            <button class="btn-main-modern" onclick="potvrditRezervaciu('domov')">
                <span>POTVRDIŤ REZERVÁCIU</span>
                <i class="fas fa-chevron-right"></i>
            </button>

            <div class="price-tag">120 € <span>vč. DPH</span></div>
        `;

    } else if (typKurzu === 'aktivny_utocnik') {
        // --- OBRANA PRED AKTÍVNYM ÚTOČNÍKOM ---
        textPanel.innerHTML = `
            <h2 id="modalTitle">Obrana pred aktívnym útočníkom</h2>
            <img src="img/HS-obrana.png" class="modal-img-small" alt="Obrana pred aktívnym útočníkom">
            
            <p style="color: var(--army-olive); font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Strelecko - taktický kurz</p>
            
            <p>Kurz je zameraný na praktickú prípravu civilných osôb na zvládnutie situácie s aktívnym útočníkom v uzavretých aj otvorených priestoroch (verejné budovy, pracovisko, školy, obchodné centrá).</p>
            <p>Účastníci sa naučia rozpoznať hrozbu, správne reagovať a zvýšiť šancu na prežitie pomocou jednoduchých, realistických a právne obhájiteľných postupov.</p>

            <h4><i class="fas fa-bullseye"></i> CIEĽ KURZU:</h4>
            <ul>
                <li>Rýchle rozpoznanie aktívnej hrozby.</li>
                <li>Správne rozhodovanie v krízovej situácii.</li>
                <li>Minimalizovanie rizika pre seba a ostatných.</li>
                <li>Bezpečné ukrytie, únik alebo obranu podľa situácie.</li>
            </ul>

            <h4><i class="fas fa-list-ul"></i> OBSAH KURZU:</h4>
            <div class="obsah-sekcia"><div><i class="fas fa-skull-crossbones"></i> Čo je aktívny útočník a ako sa správa.</div></div>
            <div class="obsah-sekcia"><div><i class="fas fa-eye"></i> Včasné varovné signály a prevencia.</div></div>
            <div class="obsah-sekcia"><div><i class="fas fa-shield-alt"></i> Zásady reakcie (ukrytie, únik, obrana).</div></div>
            <div class="obsah-sekcia"><div><i class="fas fa-walking"></i> Pohyb v budovách, využitie krytu a prostredia.</div></div>
            <div class="obsah-sekcia"><div><i class="fas fa-headset"></i> Komunikácia s okolím a zložkami IZS.</div></div>
            <div class="obsah-sekcia"><div><i class="fas fa-user-ninja"></i> Modelové situácie a praktický nácvik.</div></div>
        `;

        infoPanel.innerHTML = `
            <div class="info-box-modern">
                <i class="fas fa-location-dot"></i>
                <span><strong>Miesto výcviku:</strong><br>Strelnica Bellator Trenčín</span>
            </div>
            
            <h4 class="select-title">Dostupné termíny:</h4>
            <div class="terminy-container">
                <p style="color: #bbb; font-size: 0.9rem; text-align: center; padding: 20px; border: 1px dashed #444; border-radius: 6px;">
                    Aktuálne pripravujeme nové termíny pre tento kurz.
                </p>
            </div>

            <button onclick="zatvoritDetail()" style="background: transparent; color: #ffffff !important; border: 1px solid #ffffff; margin-top: 20px; width: 100%; cursor: pointer; padding: 12px; border-radius: 6px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 10px;">
                <i class="fas fa-arrow-left" style="color: #ffffff !important;"></i> 
                <span style="color: #ffffff !important;">Späť na ponuku</span>
            </button>
            
            <div class="price-tag">110 € <span>vč. DPH</span></div>
        `;

    } else if (typKurzu === 'auto') { 
    // --- STREĽBA Z AUTA ---
        textPanel.innerHTML = `
            <h2 id="modalTitle">Streľba z auta: Obrana proti útočníkovi vo vozidle</h2>
            <img src="img/HS-auto.jpg" class="modal-img-small" alt="Streľba z auta">
            
            <p style="color: var(--army-olive); font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Strelecko-taktický kurz</p>
            
            <p>Realistický výcvik zameraný na obranu civilnej osoby pri násilnom útoku vo vozidle alebo v jeho bezprostrednom okolí. Kurz vás pripraví na situácie, kde rozhodujú sekundy, správne rozhodnutie a bezpečná manipulácia so zbraňou v obmedzenom priestore.</p>
            <p>Výcvik je postavený na reálnych civilných scenároch, nie na športovej streľbe. Dôraz kladieme na funkčné taktické postupy, bezpečnosť a použiteľnosť v reálnom živote.</p>

            <h4><i class="fas fa-users"></i> PRE KOHO JE KURZ URČENÝ:</h4>
            <ul>
                <li>Držitelia zbrojného preukazu.</li>
            </ul>

            <h4><i class="fas fa-list-ul"></i> OBSAH KURZU:</h4>
            <div class="obsah-sekcia"><div><i class="fas fa-eye"></i> Rozpoznanie hrozby a včasná reakcia pri prepadnutí.</div></div>
            <div class="obsah-sekcia"><div><i class="fas fa-shuffle"></i> Rozhodovanie: únik alebo zotrvanie vo vozidle.</div></div>
            <div class="obsah-sekcia"><div><i class="fas fa-gun"></i> Bezpečná manipulácia so zbraňou vo vozidle.</div></div>
            <div class="obsah-sekcia"><div><i class="fas fa-car-side"></i> Streľba z vozidla a pri vozidle (využitie vozidla ako krytu).</div></div>
            <div class="obsah-sekcia"><div><i class="fas fa-walking"></i> Pohyb, krytie a opustenie vozidla.</div></div>
            <div class="obsah-sekcia"><div><i class="fas fa-user-ninja"></i> Modelové situácie a praktické scenáre.</div></div>

            <h4><i class="fas fa-graduation-cap"></i> PRÍNOS KURZU:</h4>
            <ul>
                <li>Lepšie situačné povedomie.</li>
                <li>Schopnosť správne reagovať v kritických situáciách.</li>
                <li>Praktické postupy použiteľné v reálnom živote.</li>
            </ul>
        `;

        infoPanel.innerHTML = `
            <div class="info-box-modern">
                <i class="fas fa-location-dot"></i>
                <span><strong>Miesto výcviku:</strong><br>Strelnica Bellator Trenčín</span>
            </div>
            
            <h4 class="select-title">Dostupné termíny:</h4>
            <div class="terminy-container">
                <p style="color: #bbb; font-size: 0.9rem; text-align: center; padding: 20px; border: 1px dashed #444; border-radius: 6px;">
                    Aktuálne pripravujeme nové termíny pre tento kurz.
                </p>
            </div>

            <button onclick="zatvoritDetail()" style="background: transparent; color: #ffffff !important; border: 1px solid #ffffff; margin-top: 20px; width: 100%; cursor: pointer; padding: 12px; border-radius: 6px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 10px;">
                <i class="fas fa-arrow-left" style="color: #ffffff !important;"></i> 
                <span style="color: #ffffff !important;">Späť na ponuku</span>
            </button>
            
            <div class="price-tag">110 € <span>vč. DPH</span></div>
        `;

    } else if (typKurzu === 'sutaz_liga') {
        // --- KLUBOVÁ LIGA ---
        textPanel.innerHTML = `
            <h2 id="modalTitle">Klubová liga Bellator</h2>
            <img src="img/sutaz-klubova.jpg" class="modal-img-small" alt="Súťaž">
            <h4><i class="fas fa-trophy"></i> O SÚŤAŽI:</h4>
            <p>Pravidelná súťaž určená pre širokú streleckú verejnosť. Cieľom je preveriť strelecké zručnosti v dynamických parkúroch.</p>
            <ul>
                <li><strong>Divízie:</strong> Standard, Open, PCC.</li>
                <li><strong>Počet parkúrov:</strong> 4 - 5 situácií.</li>
                <li><strong>Min. počet rán:</strong> cca 100.</li>
            </ul>
        `;

        infoPanel.innerHTML = `
            <div class="info-box-modern">
                <i class="fas fa-calendar-day"></i>
                <span><strong>Termín súťaže:</strong><br>25. Február 2026</span>
            </div>
            <button class="btn-main-modern" onclick="potvrditRezervaciuSutaz('Klubová liga')">
                <span>REGISTROVAŤ SA</span>
                <i class="fas fa-user-plus"></i>
            </button>
            <div class="price-tag">Štartovné: 20 €</div>
        `;

    } else {
        textPanel.innerHTML = "<h2>Pripravujeme...</h2><p>Obsah pre tento kurz momentálne finalizujeme.</p>";
        infoPanel.innerHTML = '<button onclick="zatvoritDetail()" class="btn-main-modern">ZAVRIEŤ</button>';
    }

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// --- 3. POMOCNÉ FUNKCIE PRE KURZY ---
function vybratTermin(element, datum) {
    document.querySelectorAll('.termin-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');
    document.getElementById('termin-select').value = datum;
}

function potvrditRezervaciu(povodniTyp) {
    const termin = document.getElementById('termin-select').value;
    const textPanel = document.querySelector('.modal-text');
    const infoPanel = document.querySelector('.modal-info-panel');

    textPanel.innerHTML = `
        <h3><i class="fas fa-shield-halved"></i> Podmienky rezervácie</h3>
        <p>Pre záväznú rezerváciu miesta na kure je potrebné <strong>uhradiť poplatok</strong>. Vaše miesto bude garantované okamžite po úspešnej realizácii platby.</p>
        
        <div style="background: rgba(138, 154, 91, 0.1); border-left: 4px solid var(--army-olive); padding: 15px; border-radius: 4px; margin: 20px 0;">
            <h4 style="margin-top:0; color:var(--army-olive);"><i class="fas fa-user-clock"></i> Čo v prípade neúčasti?</h4>
            <p style="margin-bottom:0;">Ak sa na kurz nebudete môcť dostaviť, poplatok sa nevracia, ale <strong>v plnej výške sa prenáša ako kredit</strong> na váš ďalší termín alebo iný kurz z našej ponuky.</p>
        </div>

        <p style="font-size: 0.9em; color: var(--text-secondary); margin-top: 20px;">
            Po dokončení platby vám systém automaticky zašle potvrdenie o rezervácii a podrobné organizačné pokyny ku kurzu na váš e-mail.
        </p>
    `;

    infoPanel.innerHTML = `
        <h4 style="margin-bottom:20px;">Registračné údaje</h4>
        
        <div style="display: flex; gap: 10px; margin-bottom: 15px;">
            <div style="flex: 1;">
                <label style="display:block; margin-bottom:5px;">Meno *</label>
                <input type="text" id="reg-meno" placeholder="Jozef" style="width:100%;">
            </div>
            <div style="flex: 1;">
                <label style="display:block; margin-bottom:5px;">Priezvisko *</label>
                <input type="text" id="reg-priezvisko" placeholder="Mrkva" style="width:100%;">
            </div>
        </div>

        <label style="display:block; margin-bottom:5px;">E-mail *</label>
        <input type="email" id="reg-email" placeholder="vas@email.com" style="margin-bottom:15px; width:100%;">
        
        <label style="display:block; margin-bottom:5px;">Telefónne číslo *</label>
        <input type="tel" id="reg-tel" placeholder="+421 900 000 000" style="margin-bottom:15px; width:100%;">
        
        <div style="font-size: 0.8rem; color: #bbb; margin-bottom: 20px; display:flex; gap:10px; align-items:flex-start;">
            <input type="checkbox" id="souhlas" style="width:auto; margin:0; cursor:pointer;"> 
            <span>Súhlasím s podmienkami a beriem na vedomie prenos poplatku na kredit. *</span>
        </div>
        
        <button class="btn-main-modern" onclick="odoslatFinalnuRezervaciu('${termin}')" style="width:100%; margin-bottom: 10px;">
            <span>PREJSŤ K PLATBE</span>
            <i class="fas fa-credit-card"></i>
        </button>
        
        <button onclick="otvoritDetail('${povodniTyp}')" style="background: transparent; color: #ffffff !important; border: 1px solid #ffffff; width: 100%; cursor: pointer; padding: 12px; border-radius: 6px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 10px;">
            <i class="fas fa-arrow-left"></i> <span>Späť</span>
        </button>
    `;
}

function odoslatFinalnuRezervaciu(termin) {
    const meno = document.getElementById('reg-meno').value;
    const priezvisko = document.getElementById('reg-priezvisko').value;
    const email = document.getElementById('reg-email').value;
    const suhlas = document.getElementById('souhlas').checked;

    if (!meno || !priezvisko || !email || !suhlas) {
        alert("Prosím vyplňte všetky povinné údaje a potvrďte súhlas.");
        return;
    }
    
    if(kapacity[termin]) kapacity[termin] -= 1;
    alert(`Ďakujeme, ${meno} ${priezvisko}! Budete presmerovaný k platbe.`);
    zatvoritDetail();
}

function zatvoritDetail() {
    document.getElementById('courseModal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById('courseModal');
    if (event.target == modal) zatvoritDetail();
}

function potvrditRezervaciuSutaz(nazov) {
    alert(`Registrácia na súťaž ${nazov} bola spustená. Sledujte váš e-mail.`);
    zatvoritDetail();
}