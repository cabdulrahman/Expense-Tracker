import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ ...form, id: Date.now() });
    setForm({ name: "", description: "", category: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      {["name", "description", "category", "amount", "date"].map((field) => (
        <input
          key={field}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          type={
            field === "amount" ? "number" : field === "date" ? "date" : "text"
          }
          required
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
