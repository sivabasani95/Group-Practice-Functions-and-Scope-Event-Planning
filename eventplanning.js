// Task 1: Generate attendee badge
function generateBadge(name, role) {
  const formattedRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
  return `Name: ${name}, Role: ${formattedRole}`;
}

// Task 2: Calculate total event cost
function calculateCost(attendees, costPerAttendee) {
  let total = attendees * costPerAttendee;
  if (attendees > 100) {
    total *= 0.9; // Apply 10% discount
  }
  return total;
}

// Task 3: Validate email address
function validateEmail(email) {
  return email.includes('@') && email.includes('.');
}

// Test cases
console.log(generateBadge("Alice", "speaker"));
console.log(calculateCost(120, 25));
console.log(validateEmail("test@example.com"));
