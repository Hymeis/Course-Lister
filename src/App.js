import React from 'react';
import FilterableCourseTable from './FilterableCourseTable';
import courseData from './course-list/Spring_2024_sorted.json';

function App() {
  return (
    <div className="App">
      <FilterableCourseTable courses={courseData} />
    </div>
  );
}

export default App;
