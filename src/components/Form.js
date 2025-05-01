import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const schema = {
    id: '',
    companyName: '',
    jobTitle: '',
    applicationDate: '',
    status: '',
    jobLink: '',
    notes: '',
};

const EmployeeForm = ({ addOrUpdate, selectedEmployee }) => {
    const [employee, setEmployee] = useState(schema);

    useEffect(() => {
        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        } else {
            setEmployee(schema);
        }
    }, [selectedEmployee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!employee.id) {
            employee.id = uuidv4();
        }
        addOrUpdate(employee);
        setEmployee(schema);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", border: "2px solid black", width: "30vw", padding: "15px", margin: "0 auto" }}>
            <form onSubmit={handleSubmit} style={{ margin: "0 auto" }}>
                <label htmlFor="companyName">Company Name : </label>
                <input name="companyName" value={employee.companyName} onChange={handleChange} placeholder="companyName" required />
                <br />
                <label htmlFor="jobTitle">Job Title : </label>

                <input name="jobTitle" value={employee.jobTitle} onChange={handleChange} placeholder="Job Title" required />
                <br />
                <label htmlFor="status">Status : </label>

                <input name="status" value={employee.status} onChange={handleChange} placeholder="Status" required />
                <br />
                <label htmlFor="date">Date : </label>

                <input type="date" name="applicationDate" value={employee.applicationDate} onChange={handleChange} required />
                <br />
                <label htmlFor="jobLink">Job Link : </label>

                <input name="jobLink" value={employee.jobLink} onChange={handleChange} placeholder="Job Link" required />
                <br />
                <label htmlFor="notes">Note : </label>

                <input name="notes" value={employee.notes} onChange={handleChange} placeholder="Notes" required />
                <br />
                <br />

                <button type="submit">{employee.id ? 'Update' : 'Add'} Job Application</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
