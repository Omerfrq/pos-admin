import React from 'react';
import { Table } from 'reactstrap';
import { UserRow } from './userRow';
export const UserTable = ({ table }) => {
  return (
    <div className='mt-3 small letter-spacing-table'>
      <Table borderless>
        <thead>
          <tr className=' border-bottom text-dm'>
            <th>Username</th>
            <th>Email</th>
            <th>Contact</th>
            <th>CNIC</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created On</th>
            <th className='text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {table.map((user) => (
            <UserRow user={user} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
