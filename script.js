window.addEventListener("load", function () {
    alert("Welcome to The Elvonis Gala VIP Invitation Portal!");
});

function respondToInvitation() {
    const response = confirm(
        "You are invited to The Elvonis Gala!\n\n" +
        "Date: December 25, 2026\n" +
        "Time: 7:00 PM\n\n" +
        "Click OK to accept the invitation.\n" +
        "Click Cancel to decline."
    );

    if (response) {
        showAcceptedPage();
    } else {
        alert("You have declined the Elvonis Gala invitation.");
        showDeclinedPage();
    }
}

function showAcceptedPage() {
    document.body.innerHTML = `
        <main class="response-card accepted">

            <p class="brand">✦ ELVONIS EVENTS ✦</p>

            <h1>INVITATION ACCEPTED</h1>

            <h2>YOU ARE ON THE VIP GUEST LIST!</h2>

            <hr>

            <div class="event-info">
                <p>Event: The Elvonis Gala</p>
                <p>Date: December 25, 2026</p>
                <p>Time: 7:00 PM Onwards</p>
                <p>Venue: The Grand Palace</p>
            </div>

            <p class="message">
                Thank you for accepting our invitation.
                We look forward to welcoming you.
            </p>

            <button onclick="backToInvitation()">
                BACK TO INVITATION
            </button>

        </main>
    `;

    document.body.className = "response-page";
}

function showDeclinedPage() {
    document.body.innerHTML = `
        <main class="response-card declined">

            <p class="brand">ELVONIS EVENTS</p>

            <h1>INVITATION RESPONSE</h1>

            <h2>INVITATION DECLINED</h2>

            <p class="message">
                You have declined the invitation to The Elvonis Gala.
            </p>

            <p class="message">
                Thank you for responding.
                We hope to welcome you at another event.
            </p>

            <button onclick="backToInvitation()">
                BACK TO INVITATION
            </button>

        </main>
    `;

    document.body.className = "response-page";
}

function backToInvitation() {
    window.location.reload();
}