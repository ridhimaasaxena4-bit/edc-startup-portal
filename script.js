// ================================
// STARTUPOS MAIN SCRIPT
// ================================

// SEARCH FUNCTIONALITY

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

function handleSearch() {

    if (!searchInput) return;

    const query = searchInput.value
        .toLowerCase()
        .trim();
    console.log("Search query:", query);

    // FUNDING

    if (
        query.includes("fund") ||
        query.includes("grant") ||
        query.includes("investor") ||
        query.includes("vc")
    ) {
        window.location.href = "funding.html";
    }

    // MENTORS

    else if (
        query.includes("mentor") ||
        query.includes("advisor") ||
        query.includes("guidance")
    ) {
        window.location.href = "mentors.html";
    }

    // IDEA

    else if (
        query.includes("idea") ||
        query.includes("startup idea")
    ) {
        window.location.href = "idea.html";
    }

    // VALIDATION

    else if (
        query.includes("validation") ||
        query.includes("customer") ||
        query.includes("customer interview")
    ) {
        window.location.href = "validation.html";
    }

    // MVP

    else if (
        query.includes("mvp") ||
        query.includes("prototype") ||
        query.includes("build")
    ) {
        window.location.href = "mvp.html";
    }

    // TEAM

    else if (
        query.includes("team") ||
        query.includes("cofounder") ||
        query.includes("founding team")
    ) {
        window.location.href = "team.html";
    }

    // SCALE

    else if (
        query.includes("scale") ||
        query.includes("growth") ||
        query.includes("marketing")
    ) {
        window.location.href = "scale.html";
    }

    // AI

    else if (
        query.includes("ai") ||
        query.includes("artificial intelligence")
    ) {
        window.location.href = "copilot.html";
    }
    else if(

    query.includes("journey") ||
    query.includes("startup journey")

){
    window.location.href="journey.html";
}

    else if(

    query.includes("ecosystem") ||
    query.includes("iitd") ||
    query.includes("fitt") ||
    query.includes("ihfc") ||
    query.includes("makerspace")

){
    window.location.href="ecosystem.html";
}

    else if(
        query.includes("copilot")
    ){
        window.location.href="copilot.html";
    }
    else if (

    query.includes("resource") ||
    query.includes("resources") ||
    query.includes("book") ||
    query.includes("books") ||
    query.includes("learn")

){
    window.location.href="resources.html";
}
    // DEFAULT

    else {

        alert(
        "No exact match found.\n\nTry:\n• Funding\n• Mentors\n• Journey\n• Resources\n• Ecosystem\n• Copilot"
        );

    }
}

if (searchBtn) {
    searchBtn.addEventListener("click", handleSearch);
}

if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            handleSearch();
        }
    });
}

// =================================
// CARD ANIMATION
// =================================

const cards = document.querySelectorAll(
    ".card, .opportunity-card, .ecosystem-card, .persona-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";

    });

});

// =================================
// COPILOT PAGE
// =================================

const generateBtn =
    document.getElementById("generateBtn");

if (generateBtn) {

    generateBtn.addEventListener("click", () => {

        const idea =
            document.getElementById("startupIdea")
            ?.value
            .toLowerCase();

        const output =
            document.getElementById("copilotOutput");

        if (!output) return;

        if (!idea) {

            output.innerHTML = `
            <h3>Please enter a startup idea.</h3>
            `;

            return;
        }

        if (idea.includes("ai")) {

            output.innerHTML = `
            <h3>AI Startup Track</h3>

            <ul>
            <li>Study YC AI startups</li>
            <li>Build MVP</li>
            <li>Apply to Antler</li>
            <li>Prepare funding strategy</li>
            </ul>
            `;
        }

        else if (idea.includes("health")) {

            output.innerHTML = `
            <h3>Healthcare Startup Track</h3>

            <ul>
            <li>Explore BIRAC grants</li>
            <li>Validate with doctors</li>
            <li>Build pilot program</li>
            <li>Apply for incubation</li>
            </ul>
            `;
        }

        else {

            output.innerHTML = `
            <h3>General Startup Roadmap</h3>

            <ul>
            <li>Validate problem</li>
            <li>Build MVP</li>
            <li>Acquire first users</li>
            <li>Seek funding</li>
            </ul>
            `;
        }

    });

}

// =================================
// SMOOTH SCROLL
// =================================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// =================================
// PAGE LOADED
// =================================

console.log("StartupOS Loaded Successfully");
// =================================
// SMART STARTUP COPILOT
// =================================

const askBtn = document.getElementById("askBtn");

if (askBtn) {

    askBtn.addEventListener("click", () => {

        const input =
            document.getElementById("userInput")
            .value
            .toLowerCase();

        const response =
            document.getElementById("response");

        response.style.display = "block";

        // AI

        if (
            input.includes("ai") ||
            input.includes("machine learning") ||
            input.includes("llm") ||
            input.includes("agent")
        ) {

            response.innerHTML = `

            <h3>🤖 AI Startup Roadmap</h3>

            <p><b>Target Users:</b> Students, professionals, businesses</p>

            <p><b>MVP:</b> Build one powerful AI feature first.</p>

            <p><b>Validation:</b> Interview 20+ potential users.</p>

            <p><b>Funding:</b> Antler, Peak XV, IHFC Innovation Programs.</p>

            <p><b>Resources:</b> YC Startup School, Lean Startup.</p>

            <p><b>Next Goal:</b> Reach first 100 active users.</p>

            `;
        }

        // EDTECH

        else if (
            input.includes("education") ||
            input.includes("student") ||
            input.includes("learning") ||
            input.includes("edtech")
        ) {

            response.innerHTML = `

            <h3>📚 EdTech Startup Roadmap</h3>

            <p><b>Target Users:</b> Students and educators.</p>

            <p><b>MVP:</b> Simple web platform solving one learning problem.</p>

            <p><b>Validation:</b> Interview students and teachers.</p>

            <p><b>Funding:</b> Startup India, Education Grants.</p>

            <p><b>Resources:</b> YC Library, Product-Market Fit Guide.</p>

            <p><b>Next Goal:</b> Get first 50 engaged students.</p>

            `;
        }

        // HEALTHCARE

        else if (
            input.includes("health") ||
            input.includes("medical") ||
            input.includes("doctor") ||
            input.includes("hospital")
        ) {

            response.innerHTML = `

            <h3>🏥 Healthcare Startup Roadmap</h3>

            <p><b>Target Users:</b> Patients, clinics and hospitals.</p>

            <p><b>MVP:</b> Appointment, tracking or diagnostic solution.</p>

            <p><b>Validation:</b> Talk to doctors before building.</p>

            <p><b>Funding:</b> BIRAC Grants and HealthTech accelerators.</p>

            <p><b>Resources:</b> Startup India Learning Hub.</p>

            <p><b>Next Goal:</b> Pilot with one clinic.</p>

            `;
        }

        // FINTECH

        else if (
            input.includes("finance") ||
            input.includes("fintech") ||
            input.includes("payment") ||
            input.includes("bank")
        ) {

            response.innerHTML = `

            <h3>💰 FinTech Startup Roadmap</h3>

            <p><b>Target Users:</b> Consumers and businesses.</p>

            <p><b>MVP:</b> One focused financial workflow.</p>

            <p><b>Validation:</b> Interview users about money habits.</p>

            <p><b>Funding:</b> Venture Catalysts, Angel Networks.</p>

            <p><b>Resources:</b> YC Library and FinTech founder case studies.</p>

            <p><b>Next Goal:</b> Reach first 100 transactions.</p>

            `;
        }

        // CLIMATE

        else if (
            input.includes("climate") ||
            input.includes("energy") ||
            input.includes("sustainability") ||
            input.includes("green")
        ) {

            response.innerHTML = `

            <h3>🌱 ClimateTech Startup Roadmap</h3>

            <p><b>Target Users:</b> Industries and sustainability-focused consumers.</p>

            <p><b>MVP:</b> Prototype showing measurable impact.</p>

            <p><b>Validation:</b> Talk to potential adopters.</p>

            <p><b>Funding:</b> Government innovation grants and impact funds.</p>

            <p><b>Resources:</b> Climate founder communities.</p>

            <p><b>Next Goal:</b> Secure pilot deployment.</p>

            `;
        }

        // GENERAL

        else {

            response.innerHTML = `

            <h3>🚀 Founder Roadmap</h3>

            <p><b>Step 1:</b> Identify a painful problem.</p>

            <p><b>Step 2:</b> Interview 15–20 users.</p>

            <p><b>Step 3:</b> Build a simple MVP.</p>

            <p><b>Step 4:</b> Get first users.</p>

            <p><b>Step 5:</b> Improve using feedback.</p>

            <p><b>Step 6:</b> Explore grants and investors.</p>

            `;
        }

    });

}
const founderFacts = [

"🚀 Airbnb founders sold cereal boxes to keep the company alive before raising funding.",

"💡 Steve Jobs and Steve Wozniak built the first Apple computer in a garage.",

"📦 Amazon started as an online bookstore before becoming an everything store.",

"🎓 Mark Zuckerberg launched Facebook from a college dorm room.",

"💰 Sara Blakely started Spanx with $5,000 in savings and no business background.",

"🤖 OpenAI began as a research organization before creating ChatGPT.",

"🚗 Elon Musk slept in Tesla's factory during difficult production periods.",

"📱 Instagram originally started as a location-sharing app called Burbn.",

"🛒 Flipkart's founders delivered books themselves in the early days.",

"🏏 Zerodha became India's largest broker without spending heavily on advertising."

];

const factElement = document.getElementById("founderFact");

if(factElement){

const randomFact =
founderFacts[
Math.floor(Math.random() * founderFacts.length)
];

factElement.innerText = randomFact;

}
const quotes = [

"Make something people want. – Paul Graham",

"Fall in love with the problem, not the solution.",

"The best way to predict the future is to build it.",

"If you're not embarrassed by version one, you launched too late.",

"Talk to users more than investors.",

"Growth solves most startup problems.",

"Build fast. Learn faster.",

"Great startups start with small markets."

];


const quoteBox =
document.getElementById("quoteBox");

if(quoteBox){

quoteBox.innerText =
quotes[
Math.floor(
Math.random()*quotes.length
)
];

}


const streakElement =
document.getElementById("streak");

const streakBtn =
document.getElementById("streakBtn");

if(streakElement && streakBtn){

let streak =
localStorage.getItem("founderStreak") || 1;

streakElement.innerText =
streak + " Days";

streakBtn.addEventListener("click",()=>{

streak++;

localStorage.setItem(
"founderStreak",
streak
);

streakElement.innerText =
streak + " Days";

});

}
const mentorBtn =
document.getElementById("findMentorBtn");

if(mentorBtn){

mentorBtn.addEventListener("click",()=>{

const stage =
document.getElementById("mentorStage").value;

const need =
document.getElementById("mentorNeed").value;

const result =
document.getElementById("mentorResult");

if(stage==="funding"){

result.innerHTML=`

<div class="card">

<h3>💰 Funding Mentors</h3>

<p>
Recommended:
Startup India Advisors,
FITT Experts,
Angel Investors
</p>

<a href="funding.html">

<button>

Explore Funding

</button>

</a>

</div>

`;

}

else if(need==="product"){

result.innerHTML=`

<div class="card">

<h3>🛠 Product Mentors</h3>

<p>
Recommended:
Product Managers,
Startup Founders,
YC Resources
</p>

<a href="resources.html">

<button>

View Resources

</button>

</a>

</div>

`;

}

else{

result.innerHTML=`

<div class="card">

<h3>🚀 General Mentor Match</h3>

<p>
Book a discovery session with eDC mentors.
</p>

<button
onclick="window.open('https://www.edciitd.com','_blank')">

Book Session

</button>

</div>

`;

}

});

}
