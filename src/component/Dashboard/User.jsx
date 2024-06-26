import React, { useState } from 'react';
import { Table, InputGroup, FormControl } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const users = [
    // Dummy data, replace with actual data
    { id: 1, fullName: 'Ritesh Roy', email: 'ritesh@roy.com' },
    { id: 2, fullName: 'Avinash Kumar', email: 'avinash@kumar.com' },
    { id: 3, fullName: 'Shivam Singh', email: 'shivam@singh.com' },

    // Add more users as needed
  ];

  const filteredUsers = users.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="container mt-3">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Full Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default Users;
