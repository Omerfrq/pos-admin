import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Select from 'react-select';

export const ShopForm = () => {
  const { register, handleSubmit } = useForm();
  const [type, setType] = useState();

  const params = useParams();

  const shopType = [
    {
      label: 'Medical',
      value: 'medical',
    },
    {
      label: 'General',
      value: 'general',
    },
    {
      label: 'Stationary',
      value: 'stationary',
    },
    {
      label: 'Bakers',
      value: 'bakers',
    },
    {
      label: 'Cosmetics',
      value: 'cosmetics',
    },
    {
      label: 'Electronic',
      value: 'electronic',
    },
    {
      label: 'Hardware',
      value: 'hardware',
    },
  ];

  const onSubmit = (data) => {
    const body = {
      ...data,
      userId: params.userId,
      type,
    };
    console.log(body);
    axios
      .post(`/shop/add`, body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div className='container'>
      <h1>form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <input
            type='text'
            name='title'
            placeholder='Name'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='phone'
            placeholder='Contact No.'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='address'
            placeholder='address'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='city'
            placeholder='city'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='country'
            placeholder='country'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='state'
            placeholder='state'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='region'
            placeholder='region'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <Select options={shopType} onChange={(shop) => setType(shop.value)} />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='description'
            placeholder='description'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='ShopCurrencyAbbreviation'
            placeholder='ShopCurrencyAbbreviation (PKR)'
            className='form-control'
            ref={register}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='ShopCurrency'
            placeholder='currency (Pakistani Rupee)'
            className='form-control'
            ref={register}
          />
        </div>
        <input type='submit' value='Create Shop' />
      </form>
    </div>
  );
};
