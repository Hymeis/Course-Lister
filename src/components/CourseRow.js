import React from 'react';

function CourseRow({ course }) {
  const name = course["Course Section"];
  const instructor = course["All Instructors"];
  const time = course["Meeting Patterns"];

  return (
    <tr>
      <td>{name}</td>
      <td>{instructor}</td>
      <td>{time}</td>
    </tr>
  );
}

export default CourseRow;
