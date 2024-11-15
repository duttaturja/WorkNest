import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion
        title="How do I create an account on WorkNest?"
        answer="To create an account on WorkNest, follow these simple steps:
                1. Visit the WorkNest homepage.
                2. Click on the Sign Up button located at the top right corner of the page.
                3. Choose whether you are a job seeker or a recruiter.
                4. Fill out the registration form with your personal details or company information.
                5. Log in to your new WorkNest account and complete your profile."
      />
      <Accordion
        title="How do I apply for jobs on WorkNest?"
        answer="Applying for jobs on WorkNest is easy:
                1. Log in to your WorkNest account.
                2. Use the search bar to find jobs that match your skills and interests.
                3. Click on a job listing to view the details.
                4. If you wish to apply, click the Apply Now button.
                5. Upload your resume and any other required documents.
                6. Fill out any additional application questions, if prompted.
7. Submit your application and wait for the employer to contact you."
      />
      <Accordion
        title="How can I optimize my profile to attract recruiters on WorkNest?"
        answer="To optimize your profile and attract recruiters, follow these tips:
                1. Complete all sections of your profile with accurate and up-to-date information.
                2. Use a professional photo.
                3. Write a compelling headline and summary that highlight your skills and career goals.
                4. List your work experience in detail, focusing on achievements and responsibilities.
                5. Add relevant skills, certifications, and education.
                6. Request recommendations or endorsements from previous employers or colleagues.
7. Regularly update your profile with new experiences and skills."
      />
      <Accordion
        title="How can recruiters post job listings on WorkNest?"
        answer="Recruiters can post job listings on WorkNest by following these steps:
                1. Log in to your recruiter account.
                2. Click on the Post a Job button on the dashboard.
                3. Fill out the job posting form with details such as job title, description, requirements, and location.
                4. Choose the application method (e.g., via email, through WorkNest, or an external link).
                5. Review the job posting for accuracy.
                6. Click the Submit button to make the job listing live.
7. Monitor applications and manage candidates through your WorkNest dashboard."
      />
      <Accordion
        title="How does WorkNest protect my personal information?"
        answer="WorkNest is committed to protecting your personal information. Here's how we do it:
                1. We use industry-standard encryption protocols to secure data transmission.
                2. Personal data is stored on secure servers with restricted access.
                3. We implement robust security measures to prevent unauthorized access, disclosure, alteration, or destruction of data.
                4. Regular security audits and updates ensure our systems are protected against vulnerabilities.
                5. We adhere to strict privacy policies and comply with relevant data protection regulations.
                6. Users have control over their privacy settings and can choose what information to share publicly."
      />
   </div>
  );
};

export default FAQ;