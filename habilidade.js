document.addEventListener("DOMContentLoaded", function() {
  const skillsForm = document.querySelector(".skills-form");
  const selectedSkills = document.querySelector(".selected-skills");
  const addSkillField = document.querySelector(".add-skill-field");
  const customSkillInput = document.querySelector(".custom-skill-input");
  const addSkillButton = document.querySelector(".add-skill-button");
  const skillContainer = document.querySelector(".custom-skills");

  skillsForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const checkboxes = skillsForm.querySelectorAll("input[type='checkbox']:checked");
    const selected = Array.from(checkboxes).map(function(checkbox) {
      return checkbox.value;
    });

    selectedSkills.textContent = "Habilidades selecionadas: " + selected.join(", ");
  });

  customSkillInput.addEventListener("input", function(event) {
    const customSkill = event.target.value.trim();
    addSkillButton.disabled = customSkill === "";
  });

  addSkillButton.addEventListener("click", function(event) {
    event.preventDefault();

    const customSkill = customSkillInput.value.trim();

    if (customSkill !== "") {
      const skillCategory = skillsForm.querySelector('input[type="checkbox"]:checked');
      if (skillCategory) {
        const skillLabel = document.createElement("label");
        skillLabel.classList.add("custom-skill");
        skillLabel.innerHTML = `
          <span>${customSkill}</span>
          <span class="remove-skill" title="Remover Habilidade">&times;</span>
          <input type="hidden" name="${skillCategory.name}" value="${customSkill}">
        `;

        skillContainer.appendChild(skillLabel);
      }

      customSkillInput.value = "";
      addSkillButton.disabled = true;
    }
  });

  skillContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-skill")) {
      const skillLabel = event.target.parentNode;
      const skillValue = skillLabel.querySelector("input").value;
      const skillCategory = skillLabel.querySelector("input").name;

      const checkboxes = skillsForm.querySelectorAll(`input[type='checkbox'][value='${skillValue}'][name='${skillCategory}']`);
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
      });

      skillLabel.remove();
    }
  });
});