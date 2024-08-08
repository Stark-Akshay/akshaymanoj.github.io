import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
const ContactMe = () => {
  return (
    <section>
      <div className="p-10">
        <p className="text-text min-[320px]:text-3xl md:text-[2.5rem] sm:text-[2rem] lg:text-[3rem]">
          CONTACT ME
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-start w-full items-center">
            <a
              aria-label="Contact me by mail"
              href="mailto:akshaymanoj.dms@gmail.com?subject=Would%20Love%20to%20hire%20you"
            >
              <MdEmail className="text-text text-4xl"></MdEmail>{" "}
            </a>
            <a
              aria-label="Contact me by mail"
              href="mailto:akshaymanoj.dms@gmail.com?subject=Would%20Love%20to%20hire%20you"
            >
              {" "}
              <p className="px-4">akshaymanoj.dms@gmail.com</p>
            </a>
          </div>

          <div className="flex flex-row justify-start w-full items-center">
            <a
              aria-label="Contact me on instagram"
              href="https://www.instagram.com/oneshortfocus"
              target="_blank"
            >
              <AiFillInstagram className="text-text text-4xl"></AiFillInstagram>{" "}
            </a>
            <a
              aria-label="Contact me on instagram"
              href="https://www.instagram.com/oneshortfocus"
              target="_blank"
            >
              {" "}
              <p className="px-4">@oneshortfocus</p>
            </a>
          </div>

          <div className="flex flex-row justify-start w-full items-center">
            <a
              aria-label="Contact me on LinkedIn"
              href="https://www.linkedin.com/in/akshay-manoj-b97144179/"
              target="_blank"
            >
              <AiFillLinkedin className="text-text text-4xl"></AiFillLinkedin>{" "}
            </a>
            <a
              aria-label="Contact me on LinkedIn"
              href="https://www.linkedin.com/in/akshay-manoj-b97144179/"
              target="_blank"
            >
              {" "}
              <p className="px-4">Akshay Manoj</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
