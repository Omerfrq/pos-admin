import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Register } from '../views/Register';
import { AddRole } from '../views/AddRole';
import { AddUserForm } from '../components/users/addUserForm';
import { UserList } from '../components/users/userList';
import { Shop } from '../views/Shop';

export const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Register} />
      <Route exact path='/add-role' component={AddRole} />
      <Route exact path='/add-user' component={AddUserForm} />
      <Route exact path='/users' component={UserList} />
      <Route exact path='/create-shop/:userId' component={Shop} />
    </Switch>
  );
};
