import React from 'react';
import FilterableCourseTable from '../app/FilterableCourseTable';
import Navigation from '../components/Navigation'
import courseData from '../course-list/Fall_2024.json';
import '../components/styles/base.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <FilterableCourseTable courses={courseData} />
    </div>
  );
}

export default App;
