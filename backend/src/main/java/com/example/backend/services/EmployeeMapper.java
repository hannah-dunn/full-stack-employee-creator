package com.example.backend.services;

import com.example.backend.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        EmployeeDto employeeDto = new EmployeeDto();
        employeeDto.setId(employee.getId());
        employeeDto.setFirstName(employee.getFirstname());
        employeeDto.setLastName(employee.getLastname());
        employeeDto.setEmail(employee.getEmail());
        // Map other properties as needed
        return employeeDto;
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        Employee employee = new Employee();
        employee.setId(employeeDto.getId());
        employee.setFirstname(employeeDto.getFirstName());
        employee.setLastname(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        // Map other properties as needed
        return employee;
    }
}
