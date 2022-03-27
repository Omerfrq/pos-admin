import React from 'react';
import { CopyRight, HaveAnAccount, Heading } from '../components/utils/heading';
import { LOGO } from '../components/utils/logo';
import { SigninForm } from '../components/signin/signinForm';

export const Register = () => {
  return (
    <div className='h-100vh'>
      <div className='col-md-12 p-0'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='container ml-5 mt-4 d-flex'>
              <LOGO />
            </div>
            <div className='h-100 d-flex justify-content-center align-items-center'>
              <div>
                <Heading heading='Signin to your account.' />
                <SigninForm />
                <HaveAnAccount
                  heading=" Don't have an account ?"
                  link='/'
                  btnText='Signup'
                />
              </div>
            </div>
          </div>
          <div className='col-md-6 signin-bg'>
            <div className='d-flex justify-content-end align-items-end p-5 h-100 text-muted'>
              <CopyRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
