const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференціальне рівняння', 'Теорія автоматів', 'Алгоритми і структура даних'];
const marks = [4, 5, 5, 3, 4, 5];

// 1
const studentGroups = function(students) {
const group = [[students.slice(4)], 
               [students.slice(1, 3)], 
               [students[0], students[3]]
              ];
return group;
}
console.log(studentGroups(students));
const groups = studentGroups(students);
  // 2
const groupsWithThemes = function(groups, themes){
	const projects = [];
	for (let i = 0; i < groups.length && i < themes.length; i++){
		projects.push([groups[i].join(' і '),themes[i]]);
	}
	return projects;
}
console.log(groupsWithThemes(groups, themes));
const groupsWork = groupsWithThemes(groups, themes)
// 3
const studentsWithMarks = function(students, marks){
  const studentsPerformance = [];
  for (let i = 0; i < students.length && i < marks.length; i++){
    studentsPerformance.push([students[i], marks[i]]);
  }
  return studentsPerformance;
}
console.log(studentsWithMarks(students, marks));
// 4
const groupsWithMarks = function(groupsWork, marks){
  const groupsPerformance = [];
  for (let i = 0; i < groupsWork.length; i++){
    groupsPerformance.push([groupsWork[i].join(' і '), marks[Math.floor(Math.random() * marks.length)]]);
  }
  return groupsPerformance
}
console.log(groupsWithMarks(groupsWork, marks));