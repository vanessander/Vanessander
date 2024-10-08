import React from 'react';

// React Icons
import { SiHey } from "react-icons/si";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="py-12 px-2 max-w-4xl m-auto sm:pt-24">
        <h2 className="flex justify-start items-center gap-2 text-xl font-bold text-teal-500 mb-4 sm:text-2xl">
          <span>Hello there</span><SiHey /><span>I am</span>
        </h2>
        <h1 className="text-6xl font-bold text-white sm:text-7xl">
          Vanessander
        </h1>
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4">
          <img src='https://alcatraz-bucket-demo.s3.eu-north-1.amazonaws.com/profile.jpg'>

          </img>
        </div>
        <p className="text-md text-gray-400 leading-7 my-4 sm:text-lg sm:leading-8">
          Driven by an unwavering commitment to excellence, I am
          a problem solver, leader, and innovator with a passion for
          transformation. With a solid foundation in technology, business, and
          leadership, I've built ventures and spearheaded initiatives that drive
          meaningful change. My ambition extends beyond personal success—I aspire
          to leave a lasting impact on the world, one that reflects resilience, 
          intellect, and a relentless pursuit of growth. As I navigate life's 
          challenges, I embrace the power of discipline and vision, striving to become 
          a force for progress and a source of inspiration for those around me.
        </p>
        <div className="my-7 flex justify-start items-center gap-4 flex-wrap">
          <button className="bg-teal-500 py-2 px-4 font-bold text-white border-2 border-teal-500 rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="View Resume">
            <a href="https://alcatraz-bucket-demo.s3.eu-north-1.amazonaws.com/Resume_vanessander.pdf" target='_blank' className="flex justify-start items-center gap-1">
              <span>View Resume</span>
              <RiProfileLine />
              </a>
          </button>
          <button className="bg-white py-2 px-4 font-bold text-teal-500 border-2 border-white rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="Get in touch">
            <a href="#contact" className="flex justify-start items-center gap-1">
              <span>Get in touch</span>
              <RiContactsBookLine />
            </a>
          </button>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h4 className="text-xl text-white font-bold">Find me on :</h4>
          <ul className="flex justify-start items-center flex-wrap gap-4">
            <li title="Twitter">
              <a href="" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiTwitter />
              </a>
            </li>
            <li title="GitHub">
              <a href="https://github.com/vanessander" target='_blank' className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiGithub />
              </a>
            </li>
            <li title="LinkedIn">
              <a href="https://www.linkedin.com/in/vanessander-de-matos-147870225/" target='_blank' className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiLinkedin />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Hero;