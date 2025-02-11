import React, { useState } from "react";
import BudgetFilter from "./BudgetFilter";

const Budget = () => {
  const [filteredData, setFilteredData] = useState([]);
  
  // Example data with budgets
  const data = [
    { id: 1, name: "Item 1", budget: 3000 },
    { id: 2, name: "Item 2", budget: 7000 },
    { id: 3, name: "Item 3", budget: 12000 },
  ];

  return (
    <div>
      <h1>Budget Filter Example</h1>
      <BudgetFilter data={data} onFilter={setFilteredData} />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.budget}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Budget;
