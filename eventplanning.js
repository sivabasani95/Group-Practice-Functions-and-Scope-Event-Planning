// Task 1: Attendee Badge Generator
// Purpose:
// Generate a formatted badge string showing the attendee’s name and role.

// Parameters:

// name (string): the attendee’s name
// role (string): the attendee’s role (e.g., "Speaker", "Attendee")

// Return Value:
// Returns a string: "Name: Alice, Role: Speaker"

FUNCTION generateBadge(name, role) 
    RETURN "Name: " + name + ", Role: " + capitalize(role)
END FUNCTION

// Task 2: Calculate Event Cost

// Purpose: Calculate the total cost for an event. If attendees > 100, apply a 10% discount.

// Parameters:

// attendees (number)
// costPerAttendee (number)

// Return Value: Returns a number representing the total cost.

FUNCTION calculateCost(attendees, costPerAttendee)
    total = attendees * costPerAttendee
    IF attendees > 100 THEN
        total = total * 0.9  // apply 10% discount
    END IF
    RETURN total
END FUNCTION

// Task 3: Validate Email

// Purpose:Check if an email is valid (contains "@" and ".").
// Parameters:
// email (string)
// Return Value: Returns true if valid, false otherwise.

FUNCTION validateEmail(email)
    IF email CONTAINS "@" AND email CONTAINS "."
        RETURN true
    ELSE
        RETURN false
END FUNCTION

// Implementation Phase
// Task 1: Generate attendee badge
function generateBadge(name, role) {
  // Capitalize the first letter of the role for better presentation
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

// Testing Phase
// --- Task 1 Tests ---
console.log(generateBadge("Alice", "speaker")); 
// Expected: "Name: Alice, Role: Speaker"

console.log(generateBadge("Bob", "attendee")); 
// Expected: "Name: Bob, Role: Attendee"

// --- Task 2 Tests ---
console.log(calculateCost(120, 25)); 
// Expected: 2700  (120 * 25 = 3000, minus 10% discount = 2700)

console.log(calculateCost(80, 25)); 
// Expected: 2000 (no discount)

// --- Task 3 Tests ---
console.log(validateEmail("test@example.com")); 
// Expected: true

console.log(validateEmail("invalidemail.com")); 
// Expected: false

