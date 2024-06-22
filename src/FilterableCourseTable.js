import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CourseTable from './CourseTable';

function FilterableCourseTable({ courses }) {
  const [filterText, setFilterText] = useState('');

  return (
    <div>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <CourseTable courses={courses} filterText={filterText} />
    </div>
  );
}

export default FilterableCourseTable;
