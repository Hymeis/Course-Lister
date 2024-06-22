import React from 'react';
import CourseCategoryRow from './CourseCategoryRow';
import CourseRow from './CourseRow';

function CourseTable({ courses, filterText }) {
  const rows = [];

  courses.forEach(course => {
    if (course["Course Section"].indexOf(filterText) === -1) {
      return;
    }
    rows.push(<CourseRow course={course} key={course["Course Section"]} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Instructor</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default CourseTable;
