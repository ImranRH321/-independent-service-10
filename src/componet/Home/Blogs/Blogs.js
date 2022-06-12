import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center text-muted my-4">Blogs page </h2>
      <div className="container">
        <h5>1 Difference between authorization and authentication ?</h5>
        <p>
          So, what is the difference between authentication and authorization?
          Simply put, authentication is the process of verifying who someone is,
          whereas authorization is the process of verifying what specific
          applications, files, and data a user has access to
        </p>
        <h5>
          .2 Why are you using firebase? What other options do you have to
          implement authentication ?
        </h5>
        <p>
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience. Firebase Authentication provides backend services,
          easy-to-use SDKs, and ready-made UI libraries to authenticate users to
          your app. It supports authentication using passwords, phone numbers,
          popular federated identity providers like Google, Facebook and
          Twitter, and more.
        </p>
        <h5>
          3 What other services does firebase provide other than authentication
          ?
        </h5>
        <p>
          There are many services which Firebase provides, Most useful of them
          are: Cloud Firestore. Cloud Functions. Authentication. Hosting. Cloud
          Storage. Google Analytics. Predictions. Cloud Messaging.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

// user jodi na take taile akta popop dey send hoice
// kinto validtion kote ci input flied email jodi take taile popop deyar jonno
