import React from 'react';

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
    return (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h3>{employee.name}</h3>
            <p><strong>Company Name :</strong> {employee.companyName}</p>
            <p><strong>Job Title :</strong> {employee.jobTitle}</p>
            <p><strong>Application Date :</strong> {employee.applicationDate}</p>
            <p><strong>Status :</strong> {employee.status}</p>
            <p><strong>Job Link :</strong> {employee.jobLink}</p>
            <p><strong>Notes :</strong> {employee.notes}</p>

            <button onClick={() => onEdit(employee)} style={{ marginRight: "10px" }}>Edit</button>
            <button onClick={() => onDelete(employee.id)}>Delete</button>
        </div>
    );
};

export default EmployeeCard;
