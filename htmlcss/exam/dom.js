const subList=document.querySelectorAll('.subList li');
const selectedDiv = document.querySelector('.selected');


const setSelectedSubjects = () => {
    const selectedSubject = [...subList]
      .filter(li => li.classList.contains('active'))
      .map(li => li.textContent);
    console.log('🚀  selectedSubject:', selectedSubject);
    if (selectedSubject?.length) {
      selectedDiv.innerHTML = selectedSubject.join('<br>');
      selectedDiv.classList.remove('hide');
      selectedDiv.classList.add('show');
    }
  };

  const selectSubject = evt => {
    const li = evt.currentTarget;
    console.log('🚀  li:', li);
    li.classList.toggle('active');
  
    setSelectedSubjects();
  };
  subList.forEach(li => li.addEventListener('click', selectSubject));