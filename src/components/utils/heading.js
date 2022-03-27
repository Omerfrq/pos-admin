import React from 'react';
import { Link } from 'react-router-dom';

export const Heading = ({ heading }) => {
  return (
    <h4 className='border-left p-2 border-custom p-1 border-primary'>
      {heading}
    </h4>
  );
};

export const CopyRight = () => {
  return (
    <div>
      Copyright © 2020 <span className='text-primary ml-1'>POS</span>. All
      Rights Reserved.
    </div>
  );
};

export const HaveAnAccount = ({ heading, link, btnText }) => {
  return (
    <div className='text-center border-bottom pb-1 mt-4'>
      <span className='text-muted text-capitalize'>{heading}</span>
      <span>
        <Link className='font-weight-bold ml-2 text-primary' to={link}>
          {btnText}
        </Link>
      </span>
    </div>
  );
};

export const Muted = ({ text, className }) => {
  return <small className={className}>{text}</small>;
};

export const AddUserPageHeading = ({ text }) => {
  return <span className='text-uppercase font-weight-bold'>{text}</span>;
};
