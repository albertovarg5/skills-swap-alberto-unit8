
function filterSkillsByCategory(skills, category) {
  if (category === 'All') {
    return skills;
  }

  return skills.filter(skill => skill.category === category);
}

// Export for Jest testing in Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    filterSkillsByCategory
  };
}

