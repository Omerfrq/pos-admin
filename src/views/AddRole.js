import React, { useState, useEffect } from 'react';
import { Container, Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import { AddUserPageHeading } from '../components/utils/heading';
import { CreatePermission } from '../components/users/createPermission';
import { LOGO } from '../components/utils/logo';
import axios from 'axios';

export const AddRole = () => {
  const [modal, setModal] = useState(false);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios
      .get('/role/get')
      .then((res) => {
        console.log(res.data.roleList);
        setRoles(res.data.roleList);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <nav className='navbar navbar-light  navbar-dm'>
        <div className='container font-weight-bold'>
          <LOGO />
        </div>
      </nav>
      <Container className='mt-3 '>
        <div className='d-flex justify-content-between align-items-center'>
          <AddUserPageHeading text='Roles' />
          <button onClick={toggle} className='badge badge-light'>
            Add Roles
          </button>
        </div>
        <hr className='mt-1' />
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add Roles</ModalHeader>
          <ModalBody>
            <CreatePermission />
          </ModalBody>
        </Modal>
        <div className='mt-3 small letter-spacing-table'>
          <Table borderless>
            <thead>
              <tr className=' border-bottom text-dm'>
                <th>Role Name</th>
                <th>Permissions</th>
                <th>Created At</th>
                <th className='text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr className='user b-2px '>
                  <td className='text-uppercase text-dm'>{role.roleName}</td>
                  <td className='tags-input'>
                    {role.permission.length > 3 ? (
                      <>
                        {role.permission.slice(0, 3).map((permission) => (
                          <span className='tag'>{permission.label}</span>
                        ))}
                        <span className='tag'>
                          + {role.permission.length - 3} More
                        </span>
                      </>
                    ) : (
                      <>
                        {role.permission.map((permission) => (
                          <span className='tag'>{permission.label}</span>
                        ))}
                      </>
                    )}
                  </td>
                  <td className='text-dm'>{role.createdAt}</td>
                  <td>
                    <div className='ml-5 d-flex opacity  justify-content-center align-items-center mt-1'>
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
                        title='View'
                        className='far cursor-pointer  fa-eye ml-4 '
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};
