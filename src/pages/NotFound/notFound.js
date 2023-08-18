import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';

const PageNotFound = () => {
  return (
    <div className="pageContainer">
      <div className="title">
        <span className="status">404</span>
        <h2>Oops!! Page Not Found.</h2>
        <span className="status end">404</span>
      </div>
      <div className="content">This Page Doesn&apos;t exists</div>
      <Link to="/" className="back">
        Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
