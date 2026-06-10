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
        query.includes("journey")
    ){
        window.location.href="journey.html";
    }

    else if(
        query.includes("ecosystem")
    ){
        window.location.href="ecosystem.html";
    }

    else if(
        query.includes("copilot")
    ){
        window.location.href="copilot.html";
    }
    // DEFAULT

    else {
        window.location.href = "resources.html";
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
// COPILOT

const askBtn = document.getElementById("askBtn");

if (askBtn) {

    askBtn.addEventListener("click", () => {

        const input =
            document.getElementById("userInput").value.toLowerCase();

        const response =
            document.getElementById("response");

        response.style.display = "block";

        if(input.includes("ai")){

            response.innerHTML = `
            <h3>🤖 AI Startup Roadmap</h3>

            <ul>
            <li>Validate with 20 users</li>
            <li>Build MVP using OpenAI APIs</li>
            <li>Apply to YC Startup School</li>
            <li>Target first 100 users</li>
            <li>Explore Antler / Peak XV funding</li>
            </ul>
            `;
        }

        else if(input.includes("health")){

            response.innerHTML = `
            <h3>🏥 Health Startup Roadmap</h3>

            <ul>
            <li>Interview doctors</li>
            <li>Validate clinical need</li>
            <li>Build pilot</li>
            <li>Apply for BIRAC grants</li>
            </ul>
            `;
        }

        else{

            response.innerHTML = `
            <h3>🚀 General Startup Roadmap</h3>

            <ul>
            <li>Identify customer problem</li>
            <li>Conduct interviews</li>
            <li>Build MVP</li>
            <li>Acquire first users</li>
            <li>Raise funding</li>
            </ul>
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
