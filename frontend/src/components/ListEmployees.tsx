import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listEmployees, deleteEmployee } from "../services/EmployeeService";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  departmentDto: DepartmentDto;
}

interface DepartmentDto {
  departmentName: string;
}

const ListEmployees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeEmployees = (employeeId: number) => {
    deleteEmployee(employeeId)
      .then(() => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addNewEmployee = () => {
    navigate("/add-employee");
  };

  const updateEmployee = (id: number) => {
    navigate(`/edit-employee/${id}`);
  };

  return (
    <div className="container">
      <br />
      <br />
      <h2>List Employees</h2>
      <button onClick={addNewEmployee}>Add Employee</button>
      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Department Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.departmentDto?.departmentName || "Unknown"}</td>
              <td>
                <button onClick={() => updateEmployee(employee.id)}>
                  Update
                </button>
                <button
                  onClick={() => removeEmployees(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployees;
