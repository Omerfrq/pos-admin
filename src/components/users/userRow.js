import React from 'react';
import { useHistory } from 'react-router-dom';

export const UserRow = ({ user }) => {
  const {
    userName,
    email,
    phone,
    cnic,
    _id,
    roleId: { roleName },
    accessStatus,
    shopId,
    isOwner,
  } = user;
  const history = useHistory();
  return (
    <tr className='user b-2px '>
      <td className='text-uppercase text-dm'>{userName}</td>
      <td className='text-dm'>{email}</td>
      <td className='text-dm'>{phone}</td>
      <td className='text-dm'>{cnic}</td>
      <td className='text-uppercase text-dm'>{roleName}</td>
      <td>
        {accessStatus === 'Active' ? (
          <i className='far fa-circle text-success ml-3'></i>
        ) : (
          <i className='far fa-circle text-danger ml-3'></i>
        )}
      </td>
      <td className='text-dm'>2-Feb-2019</td>
      <td>
        <div className='ml-5 d-flex opacity  justify-content-center align-items-center mt-1'>
          {shopId && isOwner ? (
            ''
          ) : (
            <i
              data-toggle='tooltip'
              data-placement='top'
              title='Delete'
              className=' cursor-pointer text-dm fas mr-4 fa-shopping-cart'
              onClick={() => history.push(`/create-shop/${_id}`)}
            ></i>
          )}

          <i
            data-toggle='tooltip'
            data-placement='top'
            title='Delete'
            className='far cursor-pointer text-dm  fa-trash-alt '
          ></i>
          <i
            data-toggle='tooltip'
            data-placement='top'
            title='Edit'
            className='far cursor-pointer text-dm  fa-edit ml-4'
          ></i>
          <i
            data-toggle='tooltip'
            data-placement='top'
            title='Change Status'
            className='far cursor-pointer  fa-circle ml-4 text-success'
          ></i>
        </div>
      </td>
    </tr>
  );
};
