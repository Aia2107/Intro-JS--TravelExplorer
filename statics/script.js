// travel-functions.js

// This script handles the date range validation for the form
function validateForm() {
  const fromDate = document.getElementById("from").value;
  const toDate = document.getElementById("to").value;

  if (!fromDate || !toDate) {
    alert("Please select both from and to dates.");
    return false;
  }

  if (new Date(fromDate) > new Date(toDate)) {
    alert("To date must be after from date.");
    return false;
  }

  return true;
}

// Array of top destinations
const destinations = [
  "Almaty",
  "Astana",
  "Atyrau",
  "Shymkent",
  "Karaganda",
];

function getDestinations() {
  return destinations;
}

// Function to display welcome message
function displayWelcomeMessage(userName) {
  const message = `Welcome to Travel Explorer, ${userName}! Ready for your next adventure?`;
  console.log(message);
  return message;
}

// Function to list all destinations
function listDestinations() {
  console.log("Top Destinations:");
  destinations.forEach((destination, index) => {
    console.log(`${index + 1}. ${destination}`);
  });
}

// Function to add a new destination
function addDestination(newDestination) {
  if (newDestination && typeof newDestination === "string") {
    destinations.push(newDestination);
    console.log(`${newDestination} added to destinations.`);
  } else {
    console.log("Invalid destination.");
  }
}

// Example usage
const userName = "John Doe";
displayWelcomeMessage(userName);
listDestinations();
addDestination("Central Asia");
listDestinations();
