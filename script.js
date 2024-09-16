document.addEventListener('DOMContentLoaded', function() {
    const projectTitles = document.querySelectorAll('.project-title');
    const projectDescriptions = document.querySelectorAll('.project-description');
  
    projectTitles.forEach(title => {
      title.addEventListener('click', function() {
        const description = document.getElementById(this.getAttribute('data-id'));
  
        projectDescriptions.forEach(desc => {
          if (desc !== description) {
            desc.style.display = 'none'; // Hide other descriptions
          }
        });
  
        // Toggle current description
        description.style.display = description.style.display === 'block' ? 'none' : 'block';
      });
    });
  });