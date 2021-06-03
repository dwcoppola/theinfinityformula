function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function renderNews() {
    const main = document.getElementById('main-content');
    
    removeChildren(main);
    
    main.innerHTML += 
    `
    <p>Welcome to our band page. There's no news at the moment...</p>
    <p>... but here at The Infinity Formula, we believe no news is good news.</p>
    `
}

function renderShows() {
    const main = document.getElementById('main-content');
    
    removeChildren(main);
    
    main.innerHTML += 
    `
    <p>No shows on the books yet, but we intend to get back to it soon.</p>
    <p>If you would like to book us at your show, let us know <a onclick="renderContact()">here</a>.<p>
    `    
}

function renderContact() {
    const main = document.getElementById('main-content');
    
    removeChildren(main);
    
    main.innerHTML += 
    `
    <p>For press or booking requests:</p>
    <p><a href="mailto:theinfinityformulaband@gmail.com">theinfinityformulaband@gmail.com</a><p>
    <p><a href="mailto:dwcoppola@gmail.com">dwcoppola@gmail.com</a></p>
    <p>For fun or booking requests:</p>
    <p><a href="https://www.facebook.com/theinfinityformula" target="_blank">Facebook<a><p>
    `        
}

function renderBio() {
    const main = document.getElementById('main-content');
    
    removeChildren(main);
    
    main.innerHTML += 
    `
    <p>The Infinity Formula (formerly The IF) formed in 2011 in the wake of two other local acts disbanding.</p>
    <br>
    <p>Brian and Todd from Tonic Thief, frequently misspelled by venues as 'Tonic Theif' (hence The IF),</p>
    <p>got together with David from Infinite Children and recorded an album called <i>Underground Music</i>.</p>
    <br>
    <p>Later, they would play shows all over the tri-state area as well as a fastival in New York</p>
    <br>
    <p>Their 2016 sophmore album is called <i>Alienation</i></p>
    <br>
    <p>Both albums were recorded in Cumberland, RI by our friend Eric DiRosario.</p>
    <br>
    <p>They intend to record their third album <i>Domain</i> at David's domain, this year.</p>
    `   
}

function renderMerch() {
    const main = document.getElementById('main-content');
    
    removeChildren(main);
    
    main.innerHTML += "Coming Soon!"
}

renderNews();
