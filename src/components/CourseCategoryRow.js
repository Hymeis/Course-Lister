import React from 'react';

function CourseCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="3">
        {category}
      </th>
    </tr>
  );
}

export default CourseCategoryRow;
