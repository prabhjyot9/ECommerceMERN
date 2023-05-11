import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
<<<<<<< HEAD
    <Layout title={"Go back- page not found"}>
=======
    <Layout title={"go back- page not found"}>
>>>>>>> a4793c23298a417d0d1f2aaf0a0245a2347ab8c7
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
