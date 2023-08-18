/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { useNavigate } from 'react-router-dom'
import awsExports from '../../aws-exports';

Amplify.configure({
  ...awsExports,
})

const Auth = ({ user }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/loged')
    }
  })
  return (
    <div />
  );
}

export default withAuthenticator(Auth);
export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}
