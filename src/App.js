
import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addOrUpdate = (emp) => {
    setEmployees(prev =>
      prev.some(e => e.id === emp.id)
        ? prev.map(e => (e.id === emp.id ? emp : e))
        : [...prev, emp]
    );
    setSelectedEmployee(null);
  };

  const handleEdit = (emp) => {
    setSelectedEmployee(emp);
  };

  const handleDelete = (id) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Job Application Management</h1>
      <Form addOrUpdate={addOrUpdate} selectedEmployee={selectedEmployee} />
      <List employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
