import React from 'react';
import FilterableCourseTable from '../components/FilterableCourseTable';
import Navigation from '../components/Navigation'
import courseData from '../course-list/Fall_2024.json';
import '../components/styles/base.css'

function Page() {
  return (
    <div className="App">
      <Navigation />
      <FilterableCourseTable courses={courseData} />
    </div>
  );
}

export default App;
