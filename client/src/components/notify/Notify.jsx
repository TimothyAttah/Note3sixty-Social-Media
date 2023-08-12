import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from './Loading';

export const Notify = () => {
  const { notify } = useSelector((state) => state);

  return <div>{notify.loading && <Loading />}</div>;
};
