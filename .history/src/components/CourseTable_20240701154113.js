import React from 'react';
import CourseRow from './CourseRow';

function CourseTable({ courses }) {
  const rows = [];

  courses.forEach(course => {
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
