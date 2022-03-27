import React from 'react';
import { Form, Label, FormGroup, Input, Button } from 'reactstrap';

export const SigninForm = () => {
  // email
  // password
  return (
    <Form>
      <Label>Email</Label>
      <FormGroup>
        <Input
          type='email'
          className='bg-input border-0 custom-shadow'
          placeholder='Enter Email...'
          name='email'
        />
      </FormGroup>
      <Label>Password</Label>
      <FormGroup>
        <Input
          type='password'
          placeholder='Enter Password...'
          name='password'
          className='bg-input border-0 custom-shadow'
        />
      </FormGroup>
      <Input
        type='submit'
        className='btn btn-outline-primary btn-block '
        value='Submit'
      />

      <Button className='btn btn-block btn-light mt-3 '>
        <img
          alt=''
          className='google-img mr-2'
          src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
        />
        Login With Google
      </Button>
    </Form>
  );
};
