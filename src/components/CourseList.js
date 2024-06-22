import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <ul>
      {courses.map((course, index) => (
        <li key={index}>
          <h3>{course['Course Section']}</h3>
          <p>{course['Course Subject']} - {course['All Instructors']}</p>
          <p>Meeting Patterns: {course['Meeting Patterns']}</p>
          <p>Location: {course['Locations']}</p>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
