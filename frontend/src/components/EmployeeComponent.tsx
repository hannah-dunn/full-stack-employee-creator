import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  updateEmployee,
  createEmployee,
  getEmployeeById,
} from "../services/EmployeeService";

interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  departmentId?: number;
}

const EmployeeComponent: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const employee: Employee = { firstName, lastName, email };

    if (id) {
      updateEmployee(parseInt(id), employee)
        .then(() => {
          navigate("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      createEmployee(employee)
        .then(() => {
          navigate("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      getEmployeeById(parseInt(id))
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const pageTitle = () => {
    return <h2>{id ? "Update Employee" : "Add Employee"}</h2>;
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div>
          <div>
            {pageTitle()}
            <div>
              <form onSubmit={saveOrUpdateEmployee}>
                <div>
                  <label> First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div>
                  <label> Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div>
                  <label> Email :</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button type="submit">Submit</button>
                <Link to="/employees">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
