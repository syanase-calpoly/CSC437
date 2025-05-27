// // Dark Mode Toggle Implementation

// // Function to create and dispatch a custom event
// function relayEvent(originalEvent, newEventType, detail) {
//     // Create a new custom event
//     const customEvent = new CustomEvent(newEventType, {
//       bubbles: true,
//       cancelable: true,
//       detail: detail,
//     })
  
//     // Stop the original event from propagating
//     originalEvent.stopPropagation()
  
//     // Dispatch the new custom event from the original target
//     originalEvent.currentTarget.dispatchEvent(customEvent)
//   }
  
//   // Wait for the DOM to be fully loaded
//   document.addEventListener("DOMContentLoaded", () => {
//     // Find the header element to add our dark mode toggle
//     const header = document.querySelector("header .container")
  
//     // Create a label element to wrap the checkbox
//     const darkModeLabel = document.createElement("label")
//     darkModeLabel.className = "dark-mode-toggle"
//     darkModeLabel.innerHTML = `
//       <input type="checkbox" autocomplete="off" />
//       <span>Dark mode</span>
//     `
  
//     // Add the label to the header
//     header.appendChild(darkModeLabel)
  
//     // Add change event listener to the label
//     darkModeLabel.addEventListener("change", (event) => {
//       // Relay the event as a custom event with the checkbox state in the detail
//       relayEvent(event, "darkmode:toggle", {
//         isDarkMode: event.target.checked,
//       })
//     })
  
//     // Add event listener to the body for our custom event
//     document.body.addEventListener("darkmode:toggle", (event) => {
//       // Toggle the dark-mode class on the body based on the checkbox state
//       if (event.detail.isDarkMode) {
//         document.body.classList.add("dark-mode")
//         // Optionally save preference to localStorage
//         localStorage.setItem("darkMode", "enabled")
//       } else {
//         document.body.classList.remove("dark-mode")
//         // Optionally save preference to localStorage
//         localStorage.setItem("darkMode", "disabled")
//       }
//     })
  
//     // Check for saved preference or apply default (light mode - no dark mode class)
//     const savedDarkMode = localStorage.getItem("darkMode")
//     if (savedDarkMode === "enabled") {
//       // If explicitly enabled before, respect that choice
//       document.body.classList.add("dark-mode")
//       darkModeLabel.querySelector('input[type="checkbox"]').checked = true
//     } else {
//       // Default to light mode (no dark mode class)
//       document.body.classList.remove("dark-mode")
//       darkModeLabel.querySelector('input[type="checkbox"]').checked = false
//     }
//   })
  