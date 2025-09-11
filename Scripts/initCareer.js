// Initialize career section to show the default entry (PFE internship)
document.addEventListener('DOMContentLoaded', function() {
    // Make sure career section is shown by default
    const eduSection = document.querySelector('.edu-list');
    const careerSection = document.querySelector('.career-list');
    eduSection.classList.remove('active');
    careerSection.classList.add('active');

    // Ensure career-entry-2 (PFE) is selected by default
    const careerEntry = document.querySelector('[data-id="career-entry-2"]');
    if (careerEntry) {
        careerEntry.classList.add('active');
    }

    // Show the career-entry-2 content
    const careerInfoSections = document.querySelectorAll('.career-info');
    careerInfoSections.forEach(section => section.classList.remove('active'));
    const defaultCareerInfo = document.getElementById('career-entry-2');
    if (defaultCareerInfo) {
        defaultCareerInfo.classList.add('active');
    }
});
