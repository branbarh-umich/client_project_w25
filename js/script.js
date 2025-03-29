window.addEventListener("load", function () {
  // Get the year span in the footer and the current year:
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();

  // Update the copyright year in the footer:
  yearSpan.innerHTML = currentYear;
});
