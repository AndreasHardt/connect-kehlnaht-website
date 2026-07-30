const jointType = "fillet";
const label = "Kehlnaht";
document.documentElement.dataset.appTarget = "kehlnaht";
const choices = [...document.querySelectorAll('input[name="joint_type"]')];
for (const input of choices) {
  const selected = input.value === jointType;
  input.checked = selected;
  input.disabled = true;
  input.closest('label')?.classList.toggle('hidden', !selected);
}
const fieldset = choices[0]?.closest('fieldset');
if (fieldset && !fieldset.querySelector('[data-target-lock-note]')) {
  const note = document.createElement('p');
  note.className = 'field-help';
  note.dataset.targetLockNote = 'true';
  note.textContent = label + ' ist für diese Fachanwendung fest eingestellt.';
  fieldset.append(note);
}
