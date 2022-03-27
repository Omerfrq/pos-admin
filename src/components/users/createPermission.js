import React, { useState } from 'react';

import Select from 'react-select';
import axios from 'axios';
import { Permissions } from '../../config/permissions';

const customStyles = {
  control: (base) => ({
    ...base,
    background: 'var(--bgInput)',
    focus: 0,
  }),

  input: (base) => ({
    ...base,
    color: 'var(--text)',
  }),
};

export const CreatePermission = () => {
  const [rolename, setRolename] = useState('');
  const [permissions, setPermissions] = useState([]);

  const handleChange = (selectedOption) => {
    setPermissions(selectedOption);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(rolename);
    console.log(permissions);
    const body = {
      roleName: rolename,
      permission: permissions,
    };
    axios
      .post('/role/add', body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={onSubmit}
      className='d-flex flex-column b-2px mt-2 small font-weight-bold'
    >
      <div className='form-group '>
        <label>Role Name</label>
        <input
          type='text'
          className='form-control bg-input  custom-shadow border-0'
          placeholder='Enter Role Name'
          name='roleName'
          onChange={(e) => setRolename(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor=''>Permissions</label>
        <Select
          isMulti
          name='colors'
          onChange={handleChange}
          options={Permissions}
          styles={customStyles}
        />
      </div>

      <div className='form-group'>
        <input
          type='submit'
          className='form-control bg-input mt-1  custom-shadow border-0'
          value='Submit'
        />
      </div>
    </form>
  );
};
