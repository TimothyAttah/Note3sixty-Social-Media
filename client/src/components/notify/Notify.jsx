import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from './Loading';
import { Toast } from './Toast';
import { TYPES } from '../../redux/types';

export const Notify = () => {
  const { notify } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={{ title: 'Error', body: notify.error }}
          handleShow={() => dispatch({ type: TYPES.NOTIFY, payload: {} })}
          bgColor='bg-danger'
        />
      )}
      {notify.success && (
        <Toast
          msg={{ title: 'Success', body: notify.success }}
          handleShow={() => dispatch({ type: TYPES.NOTIFY, payload: {} })}
          bgColor='bg-success'
        />
      )}
    </div>
  );
};
