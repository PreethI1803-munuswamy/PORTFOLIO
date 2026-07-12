// Smooth scroll to projects
document.getElementById("scrollProjects").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// Contact form simulation
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formResponse").textContent = "✅ Thanks! Your message has been sent.";
  document.getElementById("formResponse").style.color = "green";
});
