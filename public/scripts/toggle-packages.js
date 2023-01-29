const toggleBtnDesign = document.getElementById('toggle-package-design');
const toggleBtnHosting = document.getElementById('toggle-package-hosting');
const design_El = document.getElementById('package-design');
const hosting_El = document.getElementById('package-hosting');

toggleBtnDesign.addEventListener('click', () => {
  design_El.classList.toggle('hide');
  toggleBtnDesign.classList.toggle('filled');
});

toggleBtnHosting.addEventListener('click', () => {
  hosting_El.classList.toggle('hide');
  toggleBtnHosting.classList.toggle('filled');
});
