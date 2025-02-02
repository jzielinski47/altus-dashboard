const PrivacyPolicy = () => {
  return (
    <div className="relative flex flex-grow h-full w-full justify-center items-center flex-col max-w-7xl text-left">
      <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-white/[87%] md:text-2xl">
        Privacy Policy
      </h2>

      <p>Effective Date: January 5, 2025</p>

      <p className="text-justify text-white/60">
        At Altus Dashboard, we are committed to protecting your privacy. This Privacy Policy outlines how we collect,
        use, and safeguard the information you provide while using our application. By accessing or using the Altus
        Dashboard, you agree to the practices described in this policy.
      </p>

      <h2 className="text-white/60">Information We Collect</h2>
      <p className="text-justify text-white/60">We collect and store the following information about users:</p>
      <ul className="list-disc pl-5 text-white/60">
        <li>
          <strong>id:</strong> A unique identifier assigned to each user.
        </li>
        <li>
          <strong>username:</strong> The username you provide during registration.
        </li>
        <li>
          <strong>email:</strong> Your email address for account creation and communication.
        </li>
        <li>
          <strong>password:</strong> Your account password (stored securely and never shared).
        </li>
        <li>
          <strong>role:</strong> Your role within the application (e.g., user, admin).
        </li>
        <li>
          <strong>avatarUrl:</strong> The URL of your profile avatar.
        </li>
        <li>
          <strong>creationDate:</strong> The timestamp indicating when your account was created.
        </li>
        <li>
          <strong>lastLogin:</strong> The timestamp of your most recent login to the application.
        </li>
        <li>
          <strong>gender:</strong> Your gender, if provided.
        </li>
        <li>
          <strong>disabled:</strong> A flag indicating if your account has been disabled.
        </li>
        <li>
          <strong>location:</strong> Your location is necessary to point your location on the map, however you can also
          navigate the map yourself.
        </li>
      </ul>

      <h2 className="text-white/60">Cookies</h2>
      <p className="text-justify text-white/60">
        We use session cookies to maintain user sessions during your use of the application. These cookies are essential
        for the functionality of the dashboard and do not track your activity outside of the application.
      </p>

      <h2 className="text-white/60">How We Use Your Information</h2>
      <p className="text-justify text-white/60">
        Your information is used solely to provide and improve the Altus Dashboard application. Specifically, we use it
        to:
      </p>
      <ul className="list-disc pl-5 text-white/60">
        <li>Authenticate and manage user accounts.</li>
        <li>Provide personalized experiences within the application.</li>
        <li>Communicate important updates or information related to your account.</li>
        <li>Track account creation and login activity to improve security and user experience.</li>
      </ul>

      <h2 className="text-white/60">Data Security</h2>
      <p className="text-justify text-white/60">
        We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or
        alteration. However, please note that no system is completely secure, and we cannot guarantee absolute security
        of your data.
      </p>

      <h2 className="text-white/60">Your Rights</h2>
      <p className="text-justify text-white/60">You have the right to:</p>
      <ul className="list-disc pl-5 text-white/60">
        <li>Access the personal information we hold about you.</li>
        <li>Request corrections to your personal information.</li>
        <li>Request the deletion of your account and associated data.</li>
      </ul>
      <p className="text-justify text-white/60">
        To exercise these rights, please contact us at{" "}
        <a href="mailto:jzielinski47dev@gmail.com" className="text-blue-500 underline">
          jzielinski47dev@gmail.com
        </a>
        .
      </p>

      <h2 className="text-white/60">Contact Us</h2>
      <p className="text-justify text-white/60">
        If you have any questions or concerns about this Privacy Policy or our practices, please contact:
      </p>
      <p className="text-justify text-white/60">
        <strong>Jakub Zieliński</strong>
      </p>
      <p className="text-justify text-white/60">
        Email:{" "}
        <a href="mailto:jzielinski47dev@gmail.com" className="text-blue-500 underline">
          jzielinski47dev@gmail.com
        </a>
      </p>

      <h2 className="text-white/60">Changes to This Privacy Policy</h2>
      <p className="text-justify text-white/60">
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
        We encourage you to review this policy periodically. Continued use of the Altus Dashboard after changes are made
        constitutes your acceptance of the updated policy.
      </p>

      <p className="text-justify text-white/60">Thank you for trusting Altus Dashboard!</p>
    </div>
  );
};

export default PrivacyPolicy;
