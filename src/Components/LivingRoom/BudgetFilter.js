import React, { useState } from "react";

const BudgetFilter = ({ data, onFilter }) => {
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleBudgetChange = (event) => {
    const value = event.target.value;
    setSelectedBudget(value);

    // Filter the data based on the selected budget
    if (onFilter) {
      const filteredData = data.filter((item) => {
        if (value === "low") return item.budget <= 5000;
        if (value === "medium") return item.budget > 5000 && item.budget <= 10000;
        if (value === "high") return item.budget > 10000;
        return true; // Show all items if "all" is selected
      });

      onFilter(filteredData);
    }
  };

  return (
    <div >
      {/* <label htmlFor="budget">Filter by Budget: </label> */}
      <select
        id="budget"
        value={selectedBudget}
        onChange={handleBudgetChange}
      style={{width:200}}>
        <option value="">All</option>
        <option value="low">Below ₹5000</option>
        <option value="medium">₹5000 - ₹10,000</option>
        <option value="high">Above ₹10,000</option>
      </select>
    </div>
  );
};

export default BudgetFilter;
