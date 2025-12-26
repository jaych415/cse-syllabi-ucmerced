// UC Merced CSE 100-188 Courses Data
const courses = [
  {
      code: "CSE 100",
      title: "Algorithm Design and Analysis",
      units: 4,
      prerequisites: "CSE 040, CSE 060",
      isCore: true,
      syllabi: [
          { semester: "Spring 2017", instructor: "Sungjim Im", url: "files/CSE100_SP17.pdf" },
      ]
  },
  {
      code: "CSE 106",
      title: "Exploratory Computing",
      units: 4,
      prerequisites: "CSE 030, CSE 100, Math 024",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 107",
      title: "Introduction to Digital Image Processing",
      units: 4,
      prerequisites: "CSE 030",
      isCore: false,
      syllabi: [{ semester: "Fall 2025", instructor: "Shawn Newsome", url: "files/CSE107_FA25.pdf" }
      ]
  },
  {
      code: "CSE 108",
      title: "Full Stack Web Development",
      units: 4,
      prerequisites: "CSE 030",
      isCore: true,
      syllabi: [
          { semester: "Fall 2025", instructor: "Ammon Hepworth", url: "file/CSE107_FA25.pdf" },
      ]
  },
  {
      code: "CSE 111",
      title: "Database Systems",
      units: 4,
      prerequisites: "CSE 040",
      isCore: true,
      syllabi: [
          { semester: "Fall 2023", instructor: "Dr. Brown", url: "https://example.com/cse111-fall2023.pdf" }
      ]
  },
  {
      code: "CSE 120",
      title: "Software Engineering",
      units: 4,
      prerequisites: "CSE 040",
      isCore: true,
      syllabi: []
  },
  {
      code: "CSE 126",
      title: "Information Systems and Service Design",
      units: 4,
      prerequisites: "CSE 108",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 130",
      title: "Introduction to Cryptography",
      units: 4,
      prerequisites: "CSE 040, MATH 021",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 135",
      title: "Introduction to Theory of Computation",
      units: 4,
      prerequisites: "CSE 100",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 140",
      title: "Computer Architecture",
      units: 4,
      prerequisites: "CSE 040",
      isCore: true,
      syllabi: []
  },
  {
      code: "CSE 141",
      title: "Introduction to Compiler Construction",
      units: 4,
      prerequisites: "CSE 031/EE 060, CSE 100, Math 024",   
      isCore: false,
      syllabi: [
        { semester: "Spring 2026", instructor: "Pengfei Su", url: "files/CSE141_FA25.pdf" }
      ]
  },
  {
      code: "CSE 150",
      title: "Operating Systems",
      units: 4,
      prerequisites: "CSE 040, CSE 140",
      isCore: true,
      syllabi: [
          { semester: "Spring 2025", instructor: "Wan Du", url: "files/CSE150_SP25.pdf" }
      ]
  },
  {
      code: "CSE 151",
      title: "Advanced Operating Systems",
      units: 4,
      prerequisites: "CSE 150",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 155",
      title: "Introduction to Human-Computer Interaction",
      units: 4,
      prerequisites: "CSE 040",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 157",
      title: "Signal Processing for Internet of Things",
      units: 4,
      prerequisites: "CSE 040, MATH 021",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 160",
      title: "Computer Networks",
      units: 4,
      prerequisites: "CSE 040",
      isCore: true,
      syllabi: []
  },
  {
      code: "CSE 162",
      title: "Mobile Computing",
      units: 4,
      prerequisites: "CSE 040, CSE 108",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 165",
      title: "Introduction to Object Oriented Programming",
      units: 4,
      prerequisites: "CSE 040",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 168",
      title: "Distributed Software Systems",
      units: 4,
      prerequisites: "CSE 150",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 170",
      title: "Computer Graphics",
      units: 4,
      prerequisites: "CSE 040, MATH 021",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 171",
      title: "Game Programming",
      units: 4,
      prerequisites: "CSE 040, CSE 170",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 173",
      title: "Computational Cognitive Neuroscience",
      units: 4,
      prerequisites: "CSE 040, PSY 010",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 175",
      title: "Introduction to Artificial Intelligence",
      units: 4,
      prerequisites: "CSE 100",
      isCore: true,
      syllabi: []
  },
  {
      code: "CSE 176",
      title: "Introduction to Machine Learning",
      units: 4,
      prerequisites: "CSE 100, MATH 032",
      isCore: true,
      syllabi: []
  },
  {
      code: "CSE 177",
      title: "Database Systems Implementation",
      units: 4,
      prerequisites: "CSE 111",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 178",
      title: "Computers and Networks Security",
      units: 4,
      prerequisites: "CSE 130, CSE 160",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 179",
      title: "Introduction to Parallel Computing",
      units: 4,
      prerequisites: "CSE 040, CSE 140",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 180",
      title: "Introduction to Robotics",
      units: 4,
      prerequisites: "CSE 040, MATH 021",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 185",
      title: "Introduction to Computer Vision",
      units: 4,
      prerequisites: "CSE 100, MATH 032",
      isCore: false,
      syllabi: []
  },
  {
      code: "CSE 188",
      title: "Natural Language Processing",
      units: 4,
      prerequisites: "CSE 100, CSE 175",
      isCore: false,
      syllabi: []
  }
];

// DOM Elements
const coursesTableBody = document.getElementById('coursesTableBody');
const searchInput = document.getElementById('searchInput');
const availabilityFilter = document.getElementById('availabilityFilter');
const showAllBtn = document.getElementById('showAllBtn');
const exportBtn = document.getElementById('exportBtn');
const noResults = document.getElementById('noResults');
const totalCoursesElement = document.getElementById('totalCourses');
const totalSyllabiElement = document.getElementById('totalSyllabi');
const availablePercentageElement = document.getElementById('availablePercentage');
const currentYearElement = document.getElementById('currentYear');
const lastUpdatedElement = document.getElementById('lastUpdated');

// Modal elements
const syllabusModal = document.getElementById('syllabusModal');
const closeModalBtn = document.querySelector('.close-modal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalDownloadBtn = document.getElementById('modalDownloadBtn');
const modalCourseCode = document.getElementById('modalCourseCode');
const modalCourseTitle = document.getElementById('modalCourseTitle');
const modalSemester = document.getElementById('modalSemester');
const modalInstructor = document.getElementById('modalInstructor');
const modalFileSize = document.getElementById('modalFileSize');

// State
let filteredCourses = [...courses];
let sortConfig = { key: 'code', direction: 'asc' };

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateStats();
  displayCourses();
  setupEventListeners();
  
  // Set current year and last updated date
  currentYearElement.textContent = new Date().getFullYear();
  lastUpdatedElement.textContent = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });
});

// Update statistics
function updateStats() {
  const totalCourses = courses.length;
  const totalSyllabi = courses.reduce((sum, course) => sum + course.syllabi.length, 0);
  const availablePercentage = Math.round((totalSyllabi / (totalCourses * 2)) * 100); // Assuming 2 per course max
  
  totalCoursesElement.textContent = totalCourses;
  totalSyllabiElement.textContent = totalSyllabi;
  availablePercentageElement.textContent = `${availablePercentage}%`;
}

// Display courses in table
function displayCourses() {
  coursesTableBody.innerHTML = '';
  
  if (filteredCourses.length === 0) {
      noResults.style.display = 'block';
      return;
  }
  
  noResults.style.display = 'none';
  
  filteredCourses.forEach(course => {
      const row = document.createElement('tr');
      
      // Add class based on syllabus availability and core status
      if (course.syllabi.length === 0) {
          row.classList.add('no-syllabi');
      }
      if (course.isCore) {
          row.classList.add('core-course');
      }
      
      // Create syllabus buttons
      let syllabusButtonsHTML = '';
      if (course.syllabi.length > 0) {
          course.syllabi.forEach((syllabus, index) => {
              syllabusButtonsHTML += `
                  <button class="download-btn" 
                          data-course="${course.code}"
                          data-semester="${syllabus.semester}"
                          data-instructor="${syllabus.instructor}"
                          data-url="${syllabus.url}"
                          onclick="openSyllabusModal(this)">
                      <i class="fas fa-file-pdf"></i> ${syllabus.semester}
                  </button>
              `;
          });
      } else {
          syllabusButtonsHTML = '<span class="no-syllabi-btn">No syllabi yet</span>';
      }
      
      row.innerHTML = `
          <td>${course.code}</td>
          <td>${course.title}</td>
          <td>${course.units}</td>
          <td>${course.prerequisites}</td>
          <td>
              <div class="syllabus-buttons">
                  ${syllabusButtonsHTML}
              </div>
          </td>
          <td class="actions-cell">
              <button class="info-btn" onclick="showCourseInfo('${course.code}')">
                  <i class="fas fa-info-circle"></i>
              </button>
          </td>
      `;
      
      coursesTableBody.appendChild(row);
  });
}

// Filter courses based on search and filter
function filterCourses() {
  const searchTerm = searchInput.value.toLowerCase();
  const availability = availabilityFilter.value;
  
  filteredCourses = courses.filter(course => {
      // Search filter
      const matchesSearch = searchTerm === '' ||
          course.code.toLowerCase().includes(searchTerm) ||
          course.title.toLowerCase().includes(searchTerm) ||
          course.prerequisites.toLowerCase().includes(searchTerm);
      
      // Availability filter
      let matchesAvailability = true;
      if (availability === 'has-syllabi') {
          matchesAvailability = course.syllabi.length > 0;
      } else if (availability === 'no-syllabi') {
          matchesAvailability = course.syllabi.length === 0;
      }
      
      return matchesSearch && matchesAvailability;
  });
  
  // Apply sorting
  sortCourses();
  displayCourses();
}

// Sort courses
function sortCourses() {
  filteredCourses.sort((a, b) => {
      let aValue, bValue;
      
      switch(sortConfig.key) {
          case 'code':
              aValue = a.code;
              bValue = b.code;
              break;
          case 'title':
              aValue = a.title;
              bValue = b.title;
              break;
          case 'level':
              aValue = parseInt(a.code.split(' ')[1]);
              bValue = parseInt(b.code.split(' ')[1]);
              break;
          case 'syllabi':
              aValue = a.syllabi.length;
              bValue = b.syllabi.length;
              break;
          default:
              return 0;
      }
      
      if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
  });
}

// Sort event handler
document.querySelectorAll('.sortable').forEach(header => {
  header.addEventListener('click', () => {
      const key = header.dataset.sort;
      
      if (sortConfig.key === key) {
          sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
      } else {
          sortConfig.key = key;
          sortConfig.direction = 'asc';
      }
      
      // Update sort indicators
      document.querySelectorAll('.sortable i').forEach(icon => {
          icon.className = 'fas fa-sort';
      });
      
      const icon = header.querySelector('i');
      icon.className = `fas fa-sort-${sortConfig.direction === 'asc' ? 'up' : 'down'}`;
      
      sortCourses();
      displayCourses();
  });
});

// Open syllabus modal
function openSyllabusModal(button) {
  const courseCode = button.dataset.course;
  const semester = button.dataset.semester;
  const instructor = button.dataset.instructor;
  const url = button.dataset.url;
  
  // Find the course
  const course = courses.find(c => c.code === courseCode);
  
  // Set modal content
  modalCourseCode.textContent = courseCode;
  modalCourseTitle.textContent = course.title;
  modalSemester.textContent = semester;
  modalInstructor.textContent = instructor;
  modalFileSize.textContent = "~2-3 MB (PDF)";
  
  // Set download link
  modalDownloadBtn.href = url;
  modalDownloadBtn.download = `${courseCode}-${semester.replace(' ', '-')}.pdf`;
  
  // Show modal
  syllabusModal.style.display = 'flex';
}

// Show course info
function showCourseInfo(courseCode) {
  const course = courses.find(c => c.code === courseCode);
  if (!course) return;
  
  const infoText = `
      Course: ${course.code} - ${course.title}
      Units: ${course.units}
      Prerequisites: ${course.prerequisites}
      Syllabi Available: ${course.syllabi.length}
      Core Course: ${course.isCore ? 'Yes' : 'No'}
  `;
  
  alert(infoText);
}

// Export course list
function exportCourseList() {
  const exportData = courses.map(course => ({
      Code: course.code,
      Title: course.title,
      Units: course.units,
      Prerequisites: course.prerequisites,
      'Syllabi Count': course.syllabi.length,
      'Is Core': course.isCore ? 'Yes' : 'No',
      'Syllabi': course.syllabi.map(s => `${s.semester} (${s.instructor})`).join('; ')
  }));
  
  const csvContent = [
      Object.keys(exportData[0]).join(','),
      ...exportData.map(row => Object.values(row).map(v => `"${v}"`).join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ucmerced-cse-courses-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// Setup event listeners
function setupEventListeners() {
  // Search and filter
  searchInput.addEventListener('input', filterCourses);
  availabilityFilter.addEventListener('change', filterCourses);
  
  // Show all button
  showAllBtn.addEventListener('click', () => {
      searchInput.value = '';
      availabilityFilter.value = '';
      filterCourses();
  });
  
  // Export button
  exportBtn.addEventListener('click', exportCourseList);
  
  // Modal close buttons
  closeModalBtn.addEventListener('click', () => {
      syllabusModal.style.display = 'none';
  });
  
  modalCloseBtn.addEventListener('click', () => {
      syllabusModal.style.display = 'none';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
      if (e.target === syllabusModal) {
          syllabusModal.style.display = 'none';
      }
  });
}

// Make functions available globally for onclick handlers
window.openSyllabusModal = openSyllabusModal;
window.showCourseInfo = showCourseInfo;