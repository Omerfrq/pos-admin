import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useForm } from 'react-hook-form';

const generateSelectData = (roles) => {
  const roleList = [];
  roles.map((role) =>
    roleList.push({
      label: role.roleName,
      value: role._id,
    })
  );
  return roleList;
};

export const AddUserForm = () => {
  const [roleList, setRoleList] = useState([]);

  const [loading, setLoading] = useState(false);

  const [role, setRole] = useState('');

  const { handleSubmit, register } = useForm();

  useEffect(() => {
    axios
      .get('/role/get')
      .then((res) => {
        setRoleList(generateSelectData(res.data.roleList));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const handleChange = (role) => {
    setRole(role.value);
  };

  const onSubmit = (data) => {
    setLoading(true);
    const payload = {
      ...data,
      roleId: role,
    };
    axios
      .post('/user/add', payload)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='d-flex b-2px small mt-4 font-weight-bold flex-column w-100 justify-content-center align-items-center'
    >
      <h1>{loading && 'loading'}</h1>
      <div className='form-group col-sm-6'>
        <label>Username</label>
        <input
          type='text'
          className='form-control bg-input  custom-shadow border-0 w-100'
          placeholder='Enter Username'
          name='userName'
          ref={register}
        />
      </div>
      <div className='form-group col-sm-6'>
        <label>First Name</label>
        <input
          type='text'
          className='form-control bg-input  custom-shadow border-0 w-100'
          placeholder='Enter Username'
          name='firstName'
          ref={register}
        />
      </div>
      <div className='form-group col-sm-6'>
        <label>Last Name</label>
        <input
          type='text'
          className='form-control bg-input  custom-shadow border-0 w-100'
          placeholder='Enter Username'
          name='lastName'
          ref={register}
        />
      </div>
      <div className='form-group col-sm-6'>
        <label>Email Address</label>
        <input
          type='email'
          className='form-control bg-input  custom-shadow border-0'
          name='email'
          placeholder='Enter Email ID'
          ref={register}
        />
      </div>
      <div className='form-group col-sm-6'>
        <label>Password</label>
        <input
          type='password'
          className='form-control bg-input  custom-shadow border-0'
          name='password'
          placeholder='Enter Password'
          ref={register}
        />
      </div>
      <div className='form-group col-sm-6'>
        <label>Contact</label>
        <input
          type='text'
          className='form-control bg-input  custom-shadow border-0'
          name='phone'
          placeholder='Enter Contact'
          ref={register}
        />
      </div>
      <div className='form-group col-sm-6'>
        <label>CNIC</label>
        <input
          type='text'
          className='form-control bg-input  custom-shadow border-0'
          name='cnic'
          placeholder='Enter CNIC'
          ref={register}
        />
      </div>
      <div className='form-group col-sm-6'>
        <label>Role</label>
        <Select options={roleList} onChange={handleChange} />
      </div>
      <div className='form-group col-sm-6'>
        <label>Add User</label>
        <input
          disabled={loading}
          className='form-control'
          type='submit'
          value='Add'
        />
      </div>
    </form>
  );
};
