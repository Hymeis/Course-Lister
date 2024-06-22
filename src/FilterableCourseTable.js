import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CourseTable from './CourseTable';

function FilterableCourseTable({ courses }) {
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 50;

  const filteredCourses = courses.filter(course => 
    course["Course Section"].toLowerCase().includes(filterText.toLowerCase()) || 
    (course["All Instructors"] && course["All Instructors"].toLowerCase().includes(filterText.toLowerCase()))
  );

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = (searchText) => {
    setFilterText(searchText);
    setCurrentPage(1); // Reset to the first page on new search
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CourseTable courses={currentCourses} />
      <div className="page-navigation">
        <button onClick={handlePreviousClick} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextClick} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default FilterableCourseTable;
