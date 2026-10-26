
const skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];

const skillsContainer = document.getElementById('skills-container');
const filterButtons = document.querySelectorAll('.filter-btn');

function displaySkills(skillsToDisplay) {
  skillsContainer.innerHTML = '';

  if (skillsToDisplay.length === 0) {
    skillsContainer.textContent = 'No skills found in this category.';
    return;
  }

  skillsToDisplay.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';

    const title = document.createElement('h3');
    title.textContent = skill.title;

    const category = document.createElement('p');
    category.textContent = `Category: ${skill.category}`;

    const price = document.createElement('p');
    price.textContent = skill.price === 0
      ? 'Free'
      : `$${skill.price} per hour`;

    card.append(title, category, price);
    skillsContainer.appendChild(card);
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    const filteredSkills = filterSkillsByCategory(skills, category);

    displaySkills(filteredSkills);

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

displaySkills(skills);

