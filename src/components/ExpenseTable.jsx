import React from "react";

const ExpenseTable = ({ expenses, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          {[
            "Expense",
            "Description",
            "Category",
            "Amount",
            "Date",
            "Actions",
          ].map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, name, description, category, amount, date }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td>
              <button
                onClick={() => onDelete(id)}
                aria-label={`Delete expense ${name}`}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
