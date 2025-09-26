document.addEventListener("DOMContentLoaded", function () {
  // Get all needed DOM elements
  const form = document.getElementById("checkInForm");
  const nameInput = document.getElementById("attendeeName");
  const teamSelect = document.getElementById("teamSelect");

  // Track attendece
  let count = 0;
  const maxCount = 50;

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = nameInput.value;
    const team = teamSelect.value;
    const teamName = teamSelect.selectedOptions[0].text;

    console.log(name, teamName);

    // Increment count
    count++;
    console.log("Total check-ins:", count);
    const attendeeCount = document.getElementById("attendeeCount");
    attendeeCount.textContent = `${count}`;

    // Update progress bar
    const percentage = Math.round((count / maxCount) * 100) + "%";
    console.log(`Progress: ${percentage}`);

    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = percentage;

    // Update team counter
    const teamCounter = document.getElementById(team + "Count");
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

    // Show welcome message
    const message = `🎉 Welcome, ${name} from ${teamName}!`;
    console.log(message);

    // Add attendee to the attendee list with team emoji
    const attendeeList = document.getElementById("attendeeList");
    if (attendeeList) {
      let teamEmoji = "";
      if (team === "water") {
        teamEmoji = "🌊";
      } else if (team === "zero") {
        teamEmoji = "🌿";
      } else if (team === "power") {
        teamEmoji = "⚡";
      }
      const listItem = document.createElement("li");
      listItem.textContent = `${teamEmoji} ${name} (${teamName})`;
      attendeeList.appendChild(listItem);
    }

    // Show celebration message if goal is reached
    if (count === maxCount) {
      const celebrationMessage = document.getElementById("celebrationMessage");
      celebrationMessage.textContent = `🏆 Attendance goal reached! Congratulations to the winning team: ${teamName}! 🎉`;
      celebrationMessage.style.display = "block";
    }

    form.reset();
  });
});
