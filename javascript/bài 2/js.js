var students = [
    {name: 'An', age: 18},
    {name: 'Hieu', age: 19},
    {name: 'Hai', age: 18},
    {name: 'Hung', age: 19},
    {name: 'Nam', age: 20}
];


var studentsvalue = document.getElementById('students-value');
studentsvalue.addEventListener('change', filter);

function filter (){
    var selectAge = parseInt(studentsvalue.value);
    var filterStudents = students.filter(function(item){
        return item.age === selectAge; 
    });
    render(filterStudents);
}

function render(students){
    var studentTable = document.getElementById('table-students')
    var content = students.map(function(item){
        return '<tr><td>' + item.name + '</td><td>' + item.age + '</td></tr>'; 
    });
    studentTable.innerHTML = content.join('');
}
render(students)



