document.addEventListener('DOMContentLoaded', () => {
    // Search Functionality
    const searchInput = document.querySelector('.search_bar input[type="search"]');
    const categorySelect = document.querySelector('.search_bar select:nth-of-type(1)');
    const filterSelect = document.querySelector('.search_bar select.filter');
    const jobCards = document.querySelectorAll('.job_card');
  
    const filterJobs = () => {
      const searchTerm = searchInput.value.toLowerCase();
      const selectedCategory = categorySelect.value.toLowerCase();
      const filterOption = filterSelect.value.toLowerCase();
  
      jobCards.forEach(card => {
        const jobTitle = card.querySelector('.text h2').textContent.toLowerCase();
        const jobCategory = card.querySelector('.text span').textContent.toLowerCase();
        const postedDateText = card.querySelector('.job_salary span').textContent.toLowerCase();
        const daysAgo = parseInt(postedDateText.split(' ')[0]);
  
        let displayCard = true;
  
        // Check search term
        if (searchTerm && !jobTitle.includes(searchTerm)) {
          displayCard = false;
        }
  
        // Check category
        if (selectedCategory !== 'category' && !jobCategory.includes(selectedCategory)) {
          displayCard = false;
        }
  
        // Check filter option
        if (filterOption !== 'filter') {
          if (filterOption === '1 day' && daysAgo !== 1) {
            displayCard = false;
          } else if (filterOption === '3 days' && daysAgo > 3) {
            displayCard = false;
          } else if (filterOption === '1 week' && daysAgo > 7) {
            displayCard = false;
          }
        }
  
        if (displayCard) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    };
  
    searchInput.addEventListener('input', filterJobs);
    categorySelect.addEventListener('change', filterJobs);
    filterSelect.addEventListener('change', filterJobs);
  
    // Remove Tags Functionality
    const tags = document.querySelectorAll('.tag');
  
    tags.forEach(tag => {
      const closeIcon = tag.querySelector('i');
      closeIcon.addEventListener('click', () => {
        tag.remove();
      });
    });
  });
  