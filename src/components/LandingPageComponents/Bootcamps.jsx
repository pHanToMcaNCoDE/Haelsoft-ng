import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Bootcamps = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      title: "What Are Coding Bootcamps?",
      content: {
        heading: "What Are Coding Bootcamps?",
        paragraphs: [
          "Coding bootcamps are short, intensive training coding programs and tech courses that give students the skills they need for new careers in technology. Programming bootcamps and code schools like Haelsoft have become an increasingly popular alternative to a four-year computer science degree, allowing students to gain real-world experience under the instruction of top industry professionals.",
          'While "coding bootcamps" as a term has come to be used for digital skills training across disciplines, including courses and programs relating to web development, software development, data science, UX design, and digital marketing, the term originally was meant to describe short-term, intensive training programs in full-stack web development, software development, or software engineering.',
          "As one of the best coding bootcamps, Haelsoft provides hands-on, project-based learning, allowing students with no prior experience to learn how to use programming languages like HTML, CSS, JavaScript, Python, SQL, and more.",
          "The goal of our coding bootcamps is to prepare you for a new career in web development, software development and engineering, data science, design, security, digital marketing, or related tech fields. To that end, bootcamp graduates also benefit from ongoing, personalized career services meant to provide guidance and support during the job search."
        ]
      }
    },
    {
      title: "How Do Coding Bootcamps Work?",
      content: {
        heading: "How Do Coding Bootcamps Work?",
        paragraphs: [
          "Coding bootcamps work by giving students hands-on experience with the key programming languages, knowledge areas, and technical skills needed for a career in technology.",
          "The best coding bootcamps are taught by experienced professionals who know what employers are looking for. Many bootcamp students are looking to change careers, so the best bootcamps help with the job search, including career services, a network of hiring partners, and opportunities to build professional networks through events and guest lectures.",
          "Ultimately, coding bootcamp students learn the skills and develop the project portfolio necessary to land a job in web and software development, software engineering, data science, UX design, digital marketing, or other tech fields."
        ]
      }
    },
    {
      title: "How Do I Choose my Tech Career Path?",
      content: {
        heading: "How Do I Choose my Tech Career Path?",
        paragraphs: [
          "When trying to determine your tech career path, the first step is to understand where your interests and passions truly lie. Do you have a good sense of computer science fundamentals? Are you excited about the idea of building a website? Take a look at full-stack web development and the kinds of careers you can have after taking a web development bootcamp. Are you good with numbers and like identifying trends (that would have remained hidden)? A career in data science might be for you. Asking yourself questions like these will help guide your job search and the kind of training you need.",
          "From there, take stock of the skills and experience you currently have – whether or not they are in computer science. Is there any overlap with skills that are most in demand? Does your education and professional experience lend itself to an emerging field like data science, software, development, or digital marketing?",
        ]
      }
    },
    {
      title: "How Long Are Our Coding Bootcamps?",
      content: {
        heading: "How Long Are Our Coding Bootcamps?",
        paragraphs: [
          "Haelsoft's coding bootcamps generally take three months to complete on a full-time basis — 12 weeks.",
          "In that time, you will develop a comprehensive understanding of web development, data science, user experience design, or digital marketing fundamentals, and learn how to apply these new skills and knowledge. Haelsoft bootcamps are immersive and project-based, allowing you to build a portfolio of completed projects by the end of the bootcamp..",
          "For students seeking more flexibility, Haelsoft also offers part-time bootcamps, which are completed over eight months.",
        ]
      }
    }
  ];

  return (
    <section className="min-h-screen w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-20 py-24 px-6">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl font-semibold">Tech & Coding Bootcamps 101</h1>
        <div className="w-12 h-1 rounded bg-yellow-400"></div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center items-start">
        {/* Tab Navigation */}
        <div className="w-full lg:w-64 flex flex-col">
          {tabContent.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 text-left border flex justify-between items-center gap-4 hover:bg-blue-50 transition-colors ${
                activeTab === index ? 'text-blue-600 bg-blue-50 border-blue-500' : 'text-gray-700'
              }`}
            >
              <span className="text-base">{tab.title}</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          ))}
          <div className="flex border-b border-l border-r">
            <button className="w-1/2 p-4 border-r hover:bg-blue-50 transition-colors">
              <ChevronLeft className="w-6 h-6 mx-auto" />
            </button>
            <button className="w-1/2 p-4 hover:bg-blue-50 transition-colors">
              <ChevronRight className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-[780px] min-h-[456px] border-t-0 border lg:border-l lg:border border-gray-200 p-12">
          <div className="flex flex-col gap-4 mb-9">
            <h2 className="text-2xl font-semibold">
              {tabContent[activeTab].content.heading}
            </h2>
            <div className="w-12 h-1 rounded bg-yellow-400"></div>
          </div>
          <div className="flex flex-col gap-4">
            {tabContent[activeTab].content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-sm text-gray-800">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bootcamps;