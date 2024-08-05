import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Sign up on Jobzee to start your job search journey or to find the best candidates for your job openings. 
  Creating an account is quick and easy, giving you access to a wide range of features tailored to your needs.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Jobzee offers a comprehensive platform for both job seekers and employers. 
    Job seekers can easily find relevant job listings based on their skills, experience, and preferences, 
    while employers can post job openings and manage applications efficiently.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Job seekers can apply for jobs with just a few clicks, using customizable resumes and cover letters. 
    Employers can review applications, shortlist candidates, and communicate directly with potential hires to streamline the recruitment process. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
