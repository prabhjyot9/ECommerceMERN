import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>By using our Services you agree to our use of your personal information in accordance with this Privacy Notice, as may be amended from time to time by us at our discretion.</p>
          <p>You also agree and consent to us collecting, storing, processing, transferring, and sharing your personal information with third parties or service providers for the purposes set out in this Privacy Notice.</p>
          <p>Personal information subject to this Privacy Notice will be collected and retained by us.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;