import React from 'react';
import FilterableCourseTable from './FilterableCourseTable';
import Navigation from './components/Navigation'
import courseData from './course-list/Spring_2024_sorted.json';

function App() {
  return (
    <div className="App">
      <Navigation />
      <FilterableCourseTable courses={courseData} />
      
    </div>
  );
}

export default App;
