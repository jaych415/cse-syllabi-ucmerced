fetch('data/courses.json')
  .then(res => res.json())
  .then(courses => {
    const list = document.getElementById('courseList');
    courses.forEach(course => {
      const div = document.createElement('div');
      div.className = 'course-card';
      div.innerHTML = `<h3>${course.code}: ${course.title}</h3><p>${course.description}</p>`;
      list.appendChild(div);
    });
  });
