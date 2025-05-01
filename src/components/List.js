import React from 'react';
import Card from './Card';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
    return (
        <div>
            {employees.map(emp => (
                <Card key={emp.id} employee={emp} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default EmployeeList;
