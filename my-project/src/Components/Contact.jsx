import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#34495E] w-full h-full flex flex-col justify-center items-center pt-12 md:pt-5"
    >
      <form
        action="https://getform.io/f/d89b86e7-1698-4468-a122-c274b7d6ed2f"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            //Submit the form or shoot me a email - bhishajkrsharma99@gmail.com
          </p>
        </div>
        <input
          className="rounded p-2 bg-[#ccd6f6] px-3 mx-3"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className=" rounded my-4 p-2 bg-[#ccd6f6] px-3 mx-3"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="rounded bg-[#ccd6f6] p-2 px-3 mx-3"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white rounded border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
      <div className="md:hidden">
        <p className="text-gray-300">
          {" "}
          You can follow me on below social platforms.
        </p>
        <div className=" mt-3 mb-2 pb-3">
          <ul className="flex items-center justify-center">
            <li>
              <a
                href="https://www.linkedin.com/in/bhishaj-kumar-sharma-598437237/"
                className="flex justify-between items-center w-full text-gray-300"
              >
                {" "}
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/bhishaj.krsharma"
                className="flex justify-between items-center w-full text-gray-300"
              >
                {" "}
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Bhishaj"
                className="flex justify-between items-center w-full text-gray-300"
              >
                {" "}
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/iambhishaj/"
                className="flex justify-between items-center w-full text-gray-300"
              >
                {" "}
                <FaInstagram size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
