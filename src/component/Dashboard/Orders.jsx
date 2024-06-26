import React, { useState } from 'react';
import { Table, InputGroup, FormControl } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const orders = [
    // Dummy data, replace with actual data
    { oredrId: 'O_1', userId: 'U_1', productId: 'P_1', orderDate: '2023-01-01' },
    { oredrId: 'O_2', userId: 'U_2', productId: 'P_2', orderDate: '2023-01-01' },
    { oredrId: 'O_3', userId: 'U_3', productId: 'P_3', orderDate: '2023-01-02' },
    // Add more orders as needed
  ];

  const filteredOrders = orders.filter(order =>
    order.userId.toString().includes(searchTerm) ||
    order.productId.toString().includes(searchTerm) ||
    order.orderDate.includes(searchTerm)
  );
console.log(filteredOrders);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
console.log(currentOrders)
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div className="container mt-3">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by user ID, product ID or order date"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Product ID</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map(order => (
            <tr key={order.oredrId}>
              <td>{order.oredrId}</td>
              <td>{order.userId}</td>
              <td>{order.productId}</td>
              <td>{order.orderDate}</td>
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

export default Orders;
