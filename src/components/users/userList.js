import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import { UserRow } from './userRow';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  useEffect(() => {
    axios
      .get(`/user/get`)
      .then((res) => {
        setUsers(res.data.userList);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [text]);

  const onSubmit = (e) => {
    e.preventDefault();
    setText(query);
  };

  return (
    <div className='container'>
      <h1>users list</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Search By Anything'
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
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
          {users.map((user) => (
            <UserRow user={user} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
