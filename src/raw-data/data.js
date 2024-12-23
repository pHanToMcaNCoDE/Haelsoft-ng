
import laptop from '../asset/course-details/EdTechPlatformnotebook.svg';
import people from '../../public/assets/courseicons/building.svg';
import run from '../../public/assets/courseicons/EdTechPlatformtrack1.svg';
import cer from '../../public/assets/courseicons/certificate.svg';
// import play from "../assets/courseicons/play.svg";
// import playicon from "../assets/courseicons/playicon.svg";
import desktop from "../../public/assets/courseicons/Desktop.svg";
import watch from "../../public/assets/courseicons/watch.svg";
import note from "../../public/assets/courseicons/note.svg";
import phone from "../../public/assets/courseicons/Mobile_Button.svg";
import code from '../../public/assets/courseicons/Code.svg';


import can from '../../public/assets/bootcamp/candidate.svg';
import flex from '../../public/assets/bootcamp/flexibility.svg';
import sol from '../../public/assets/bootcamp/solution.svg';


// Icons

import { RiHtml5Line, RiJavascriptLine, RiReactjsFill, RiLightbulbFlashLine, RiDatabase2Fill } from 'react-icons/ri';
// import { IoLogoAngular, IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io5';
import { BsBootstrapFill } from 'react-icons/bs';
import { PiAngularLogo, PiFileSqlDuotone } from "react-icons/pi";
import { SiAngular, SiBootstrap, SiMongodb, SiReact } from "react-icons/si";
import { AiOutlineBarChart, AiOutlineGithub, AiOutlineStock } from "react-icons/ai";
import { LiaAws, LiaCss3 } from "react-icons/lia";
import { BiLogoNetlify } from "react-icons/bi";
import { FaBookOpen, FaLaptopCode, FaChalkboardTeacher, FaCalendarCheck, FaCertificate, FaTools, FaChartLine, FaCogs, FaPython, FaDrawPolygon, FaSearch, FaShareAlt, FaFileAlt, FaDollarSign, FaEnvelope, FaClipboardList, FaChartBar, FaCode,FaCalculator, FaMicrochip, FaLock, FaBriefcase, FaDatabase, FaGlobe, FaLayerGroup, FaServer, FaRegClock, FaMailBulk } from 'react-icons/fa';
import { TbBrandBootstrap } from 'react-icons/tb';
import { FaAws, FaBullseye, FaChartPie, FaFacebook, FaGoogle, FaPenFancy } from 'react-icons/fa6';
import { SiFigma, SiSqlite, SiR } from 'react-icons/si';
import { FiUserCheck, FiLayout, FiPenTool, FiMap, FiCheckSquare, FiSmile, FiUsers } from 'react-icons/fi';
import { GiNetworkBars } from 'react-icons/gi';

export const courseDetails = {
    dataScience: {
            "course_title": "Data Science",
            "level": "Beginner",
            "price": "Free",
            "duration": "Short",
            "popularity": "Most Popular",
            "rating": "Highest Rated",
            "course_description": "Haelsoft's Data Science course was designed to groom for market-demanded data skills. Earn a Data Science certificate after learning the fundamentals of data science, data modeling, machine learning techniques, Python for data analysis, how to build dynamic data visualization, and more relevant courses in the discipline.",
            "online": 'Learn Data Science Online',
            "intro": "Data scientists attempt to make sense of the vast amounts of data that surround us. The course includes machine learning, big data analytics, data visualization, and data management, preparing students for data science careers. As a result, attending a data science course can help you make better decisions, produce stunning visualizations, and even attempt to forecast future occurrences using Machine Learning. So, if you're intrigued about what you can learn about the world by analyzing the data produced every day, data science could be for you!",
            "course_overview": "Recent developments in data science, such as big data, predictive analytics, and AI technologies like ChatGPT and Bard AI, are transforming the way businesses automate operations, forecast future trends, and interact with customers. Making sense of data, and more crucially, using it to inform business choices, is the main problem facing businesses today as the volume, diversity, and complexity of data being gathered continue to rise. Businesses require data scientists to address this issue because they possess not just extensive expertise in a variety of statistical and data analysis software but also the ability to see beyond statistics to truly understand data.",
            "benefits": [
                {
                    title: 'Learn Data Science Online Course',
                    desc: 'Online classroom with professionals',
                    img: laptop
                },
                {
                    title: 'Build Data Science Skills',
                    desc: 'Suitable for learners to get and grow more skills',
                    img: people
                },
                {
                    title: 'Prepare For A Data Science Job',
                    desc: 'Build a portfolio of Data Science that would help to ace interviews',
                    img: run
                },
                {
                    title: 'Professional Certificate',
                    desc: 'Earn a certificate after your Data Science online course',
                    img: cer,
                },
            ],
            "courseReviews": [
                {
                  name: "Alice Johnson",
                  review: "The course was very comprehensive and the instructors were very knowledgeable. I learned a lot!"
                },
                {
                  name: "Bob Smith",
                  review: "Great course! The content was up-to-date and the examples were very practical. Highly recommend!"
                },
                {
                  name: "Catherine Lee",
                  review: "I enjoyed the hands-on approach of this course. The projects helped me understand the concepts better."
                },
                {
                  name: "David Brown",
                  review: "Well-structured and easy to follow. The support from the instructors was excellent."
                },
            ],
            "units": [
              {
                "title": "Unit One",
                "sub": "Introduction To Data Science",
                "description": "This introductory unit provides practical experience using the programming language Python, for solving real-world data science problems, from acquiring data from public sources to understanding the data through analysis and modeling to visualizing and presenting the results. You will learn how to implement the stages in the data science lifecycle, from data acquisition and cleaning to analysis, modeling, and visualization. The unit also utilizes appropriate encoding and visualization methods for data types, including categorical, numerical, and time-series data.",
                "skills": ["Python Coding", "Data Organization", "Data Manipulation"],
                "details": [
                    {
                        "title": "Python For Data Science",
                        "description": "Python is a programming language widely used by Data Scientists. Learn Python for data science and gain the career-building skills you need to succeed as a data scientist, from data manipulation to machine learning. You will learn how this versatile language allows you to import, clean, manipulate, and visualize data – all integral skills for any aspiring data professional or researcher."
                    },
                    {
                      "title": "Python Libraries For Data Science",
                      "description": "Python has libraries with large collections of mathematical functions and analytical tools, making it easier to calculate mathematical problems and analyze data. You will learn libraries like Pandas and Numpy to perform real-world analysis to achieve business intelligence."
                    },
                    {
                      "title": "Data Analysis Techniques",
                      "description": "Master how to use techniques in analyzing numerical data with the understanding and practical capabilities needed to convert data into information via appropriate analysis, how to represent these results in ways that can be readily communicated to others in the organization, and how to use the information to make evidence-based business decisions."
                    },
                ]
              },
              {
                "title": "Unit Two",
                "sub": "Data Wrangling And Data Cleaning",
                "title": "Unit 2: ",
                "description": "Real-world data are commonly messy, distributed, and heterogeneous. This course introduces core concepts of data cleaning, standardization, and data integration, which are aimed at using Python to convert and map raw data into other formats that allow more efficient and convenient use and analysis of data. The courses also discuss data quality, management, and storage issues relevant to data analytics.",
                "skills": ["Data Wrangling", "Data Analysis", "Data Visualization"],
                "details": [
                    {
                        "title": "Prepare Data",
                        "description": "Understand the fundamentals of data wrangling and cleaning to prepare your data sets for statistical analysis, modeling, and essential insights."
                    },
                    {
                        "title": "Beautiful Data Visualization",
                        "description": "Learn to use Python packages to create different types of data visualization. You can also master using other data visualizations for various use cases in the real world."
                    },
                ]
              },
              {
                "title": "Unit Three",
                "sub": "Data Modeling",
                // "title": "Unit 3: ",
                "description": "Learn to create models that allow complex data to be analyzed, manipulated, extracted, and reported upon accurately as a Data Scientist. You will get details on Unified Modeling Language (UML), normalization, incorporating business rules, handling temporal data, and analytical database design. Learn to build linear and categorical models, understanding how to use them to make predictive analysis.",
                "skills": ["Statistics", "Data Modeling", "Hypothesis Testing", "Predictive Analysis & Extrapolation", "Python Data Visualization"],
                "details": [
                    {
                        "title": "Statistics For Data Science",
                        "description": "Learn the fundamentals of statistics, including probability, distribution, hypotheses, and CLT (Central Limit Theorem), and how to use them in your data analysis."
                    },
                    {
                      "title": "Hypothesis Testing",
                      "description": "Explore how Data Scientists use hypotheses to support or refute the statements for distribution. Learn about the Sampling Distribution concept to statistical importance to your data."
                    },
                    {
                      "title": "Data Modeling",
                      "description": "Learn various modeling techniques for quantity and quality data. Master how to use data models on real datasets to understand trends and make predictions."
                    },
                ]
            },
            {
              "title": "Unit Four",
              "sub": "Introduction To Machine Learning",
            //   "title": "Unit 4: Introduction To Machine Learning",
              "description": "Machine learning is the core technology under the recent developments of artificial intelligence (AI), and it is applied widely in several domains. This course unit will provide you with the necessary theoretical background to understand the fundamental machine learning concepts and to use the basic methods of supervised and unsupervised learning in a proper manner to solve real-life problems. The course will prepare you for further studies in machine learning and introduce you to the methods and tools used to solve the problems in practice.",
              "skills": ["Fundamental of Machine Learning", "Model Evaluation", "Data Classification Models", "Decision Trees", "Categorical Predictions"],
                "details": [
                    {
                        "title": "Machine Learning Basics",
                        "description": "Learn the introduction to the fundamentals of machine learning, as well as the applications and challenges of machine learning."
                    },
                    {
                        "title": "Machine Learning Models",
                        "description": "Explore how to apply machine learning and artificial intelligence techniques to fundamental scientific problems. This will help you build vital skills, enhancing your employability in a rapidly expanding field. Learn models such as Naive Bayes classification, decision trees, cross-validation, regression models, etc."
                    }
                ]
            },
            ],
            "includes" : [
                {
                    "text": "17 hours on-demand video",
                    "img": desktop,
                },
                {
                    "text": '1 article',
                    "img": note, 
                },{
                    "text": 'Access on mobile and TV',
                    "img": phone,
                },
                // {
                //     "text": "Full lifetime access",
                //     "img": ,
                // },
                {
                    "text": "Certificate of completion",
                    "img": cer,
                }
            ],
            "instructors": {
              "description": "Haelsoft Data Science course instructors are professionals whose experience spans many reputable companies. You will be learning from experts who are highly skilled, with an updated knowledge of practical data skills and how to apply them."
            },
            "portfolio": {
              "description": "Build and showcase your Data Science portfolio through many projects you will undertake while learning at Haelsoft. You will be closely guided with steps to develop your final data analysis project. At the end of this course, you will be ingrained in the data skills using Python, data wrangling & data cleaning, data modeling, and machine learning that position you well for hiring by companies in need of a Data Scientist."
            },
            "certificate": {
              "description": "You will be eligible for a Haelsoft Data Science Certificate upon the completion of your course. This is a shareable certificate that you can add to your resume to attract potential employees and add to your page on LinkedIn."
            }
    },


    artificialIntelligence: {
        "course_title": "Artificial Intelligence",
        "level": "Beginner",
        "price": "Free",
        "duration": "Long",
        "popularity": "Least Popular",
        "rating": "Lowest Rated",
        "online": 'Learn Artificial Intelligence Online',
        "intro": "Explore the possibilities of AI and how this emerging technology can drive business value and shape the future of work. Prepare for the future of AI with curated, hands-on learning from AI experts. Get on-demand access to courses on ChatGPT, prompt engineering, and more.",
        "course_overview": "Artificial intelligence (AI) is now deeply embedded in our culture, frequently in subtle and ubiquitous ways that go unnoticed by us daily. Machines' capacity to see, process, decide, and learn from mistakes is a game-changer for all organizations, including large corporations and governments. These technologies do, however, provide difficulties, such as moral and social problems. The fundamental concepts of artificial intelligence (AI), such as its theoretical underpinnings, basic architecture, historical evolution, contemporary applications, and ethical implications, are introduced in this course. The course also explores the possible benefits and drawbacks of artificial intelligence while also examining the field's future direction. It is intended for professionals, including those with little prior knowledge of AI and experts whose employment requires them to interact with it. The course intends to provide us with a greater understanding of how AI will shape our society, as well as how AI has already impacted our environment. It also explains the underlying concepts and workings of AI.",
        "benefits": [
            {
                title: 'Learn Artificial Intelligence Online Course',
                desc: 'Online classroom with professionals',
                img: laptop
            },
            {
                title: 'Skill Level',
                desc: 'Suitable for professionals of all skill levels seeking to gain essential AI skills',
                img: people
            },
            {
                title: 'Professional Certificate',
                desc: 'Earn a Haelsoft Artificial Intelligence Certificate',
                img: cer,
            },
        ],
        "courseReviews": [
            {
              name: "Alice Johnson",
              review: "The course was very comprehensive and the instructors were very knowledgeable. I learned a lot!"
            },
            {
              name: "Bob Smith",
              review: "Great course! The content was up-to-date and the examples were very practical. Highly recommend!"
            },
            {
              name: "Catherine Lee",
              review: "I enjoyed the hands-on approach of this course. The projects helped me understand the concepts better."
            },
            {
              name: "David Brown",
              review: "Well-structured and easy to follow. The support from the instructors was excellent."
            },
        ],
        "units": [
            {
                "title": "Unit One",
                "sub": "Artificial Intelligence Foundations",
                "description": "Learn introduction to sensors and perception, computational thinking and algorithms, learning and data, models of representation, and natural language processing in AI. The course unit also emphasizes the importance of learning the impact Artificial Intelligence has on society in both negative and positive ways.",
                "skills": ["AI Foundation", "AI Models", "Ethics for AI"],
                "details": [
                    {
                        "title": "Essential AI Concepts",
                        "description": "Learn an introduction to sensors and perception, computational thinking and algorithms, deep learning and data, models of representation, and natural language processing in AI."
                    },
                    {
                        "title": "AI Foundations & Ethics",
                        "description": "Learn the concept of Ethical AI to reflect on the influence of the deployment of AI on society. This is to understand its applications and risks in all use cases."
                    },
                    {
                        "title": "AI Models",
                        "description": "Explore various AI models and their applications to use cases. Learn AI models to acquire the capacity to make predictions, recognize patterns, and comprehend complex information – skills once reserved solely for human intelligence."
                    },
                ]
            },
            {
                "title": "Unit Two",
                "sub": "Generative AI & Prompt Engineering",
                "description": "Learn to demystify the intricacies of generative AI using tools like ChatGPT and the art and science of prompt engineering. The unit provides a foundational understanding of generative AI concepts and equips you with the skills to wield the creative power of AI through effective, prompt design. Discover how the words you choose can shape the output of generative models. Mastering prompt engineering is the key to unlocking the full potential of generative AI.",
                "skills": ["Prompt Engineering", "Deploying AI Models", "Tuning Language Models", "AI Model Performance Improvement"],
                "details": [
                    {
                        "title": "Generative AI",
                        "description": "Master Large Language Models (LLMs) while using ChatGPT, which is one of the popular generative AI tools. Learn how these models work and their application to different use cases. Understand how these models can help your work effectively."
                    },
                    {
                        "title": "Prompt Engineering",
                        "description": "Learn to use a large language model (LLM) to build robust applications quickly. Discover how to quickly build capabilities that learn to innovate and create value in ways that were cost-prohibitive, highly technical, or simply impossible before being able to write an effective prompt at the end of this course unit."
                    },
                    {
                        "title": "Evaluate, Improve Performance & Deploy",
                        "description": "Discover how to evaluate and improve the performance of the types of models, hands-on practice of improving a pre-trained language model. Learn to deploy generative AI models in this course."
                    },
                ]
            },
            {
                "title": "Unit Three",
                "sub": "Business Application & Problem Solving With AI",
                "description": "This will be more of a practical unit where you will be applying all you've learned about AI to solve problems. Explore the power of generative AI in business and earn more knowledge as it relates to the insight you have got in the course.",
                "skills": ["Business Applications of AI", "AI Problem Solving", "Troubleshooting"],
                "details": [
                    {
                        "title": "Create Solutions With AI",
                        "description": "Learn to master AI algorithms and programming to unlock the potential of AI and revolutionize decision-making, drive innovation, and enhance efficiency in organizations. You will explore prompt engineering to train tools like ChatGPT in solving problems and troubleshooting common issues while working to create solutions."
                    },
                    {
                        "title": "Master Generative AI In Business",
                        "description": "Generative AI provides professionals with many new options and solutions for their personal workflows and business needs. Explore new AI tools and processes that empower business pros to work faster and more creatively using the strengths and benefits of generative AI."
                    }
                ]
            },
        ],
        "includes" : [
            {
                "text": "17 hours on-demand video",
                "img": desktop,
            },
            {
                "text": '1 article',
                "img": note, 
            },{
                "text": 'Access on mobile and TV',
                "img": phone,
            },
            // {
            //     "text": "Full lifetime access",
            //     "img": ,
            // },
            {
                "text": "Certificate of completion",
                "img": cer,
            }
        ],
        "instructors": {
          "description": "Haelsoft Artificial Intelligence course instructors are professionals whose experience spans many reputable companies. You will be learning from experts who are highly skilled, with an updated knowledge of practical data skills and how to apply them."
        },
        "portfolio": {
          "description": "Build and showcase your Artificial Intelligence portfolio through many projects you will undertake while learning at Haelsoft. You will be closely guided with steps to develop your final AI project. At the end of this course, you will be ingrained in the AI skills using Python, data wrangling & data cleaning, data modeling, and machine learning that position you well for hiring by companies in need of an AI Specialist."
        },
        "certificate": {
          "description": "You will be eligible for a Haelsoft Artificial Intelligence Certificate upon the completion of your course. This is a shareable certificate that you can add to your resume to attract potential employees and add to your page on LinkedIn."
        }
    },
    pythonCourse:
        {
            "course_title": "Python",
            "online": 'Learn Python Online',
            "intro": "Learn, develop, and advance your programming skills with the best Python online course. Master Python applications for web development, data analysis, artificial intelligence, and scientific computing.",
            "description": "Python is one of the most popular high-level, general-purpose programming languages. Named after the comedy troupe Monty Python, the language has a user-friendly syntax that makes it appealing to beginners. It is also very flexible and scalable and has a very vibrant, global community of users. Python is currently the most popular programming language in the world. Python is used in some form or another in virtually all major tech companies worldwide, making it one of the top-most demanded skills. Learn the core concepts of Python, including variables, data types, libraries, operators, and strings. Explore essential data structures like lists, dictionaries, and tuples to organize and manipulate information effectively.",
            "benefits": {
                "classroom": "Learn Python Online Course: Online classroom with professionals",
                "skills": "Build Python Skills: Suitable for learners to get and grow more skills",
                "job_preparation": "Prepare For A Python Job: Complete a team project on Python",
                "certificate": "Professional Certificate: Earn a Haelsoft Certificate after your Python online course"
            },
            "benefits": [
                {
                    title: 'Learn Python Online Course',
                    desc: 'Online classroom with professionals',
                    img: laptop
                },
                {
                    title: 'Build Python Skills',
                    desc: 'Suitable for learners to get and grow more skills',
                    img: people
                },
                {
                    title: 'Prepare For A Python Job',
                    desc: 'Complete a team project on Python',
                    img: run,
                },
                {
                    title: 'Professional Certificate',
                    desc: 'Earn a Haelsoft Certificate after your Python online course',
                    img: cer,
                },
            ],
            "courseReviews": [
                {
                  name: "Alice Johnson",
                  review: "The course was very comprehensive and the instructors were very knowledgeable. I learned a lot!"
                },
                {
                  name: "Bob Smith",
                  review: "Great course! The content was up-to-date and the examples were very practical. Highly recommend!"
                },
                {
                  name: "Catherine Lee",
                  review: "I enjoyed the hands-on approach of this course. The projects helped me understand the concepts better."
                },
                {
                  name: "David Brown",
                  review: "Well-structured and easy to follow. The support from the instructors was excellent."
                },
            ],
            "units": [
                {
                    "title": "Unit One",
                    "sub": "Python Programming",
                    "description": "This unit introduces students to text-based programming with Python. It forms a journey that starts with simple programs involving input and output and gradually moves on through arithmetic operations, randomness, selection, and iteration. Emphasis is placed on tackling common misconceptions and explaining the mechanics of program execution. A range of pedagogical tools is employed throughout the unit, the most prominent being pair programming, live coding, and worked examples. Develop fluency in writing Python code and working with different data using Jupyter Notebooks.",
                    "skills": ["Basic Data Types", "Python Syntax"],
                    "details": [
                        {
                            "title": "Jupyter Notebooks",
                            "description": "Jupyter Notebook is an incredibly powerful Python tool for interactively developing and presenting data science projects. It combines code, visualizations, narrative text, and other rich media into a single document, creating a cohesive and expressive workflow. Learning to use Jupyter Notebooks will streamline your workflow and make it easier to communicate and share your results."
                        },
                        {
                            "title": "Learn Programming Skills",
                            "description": "Master different types of data and variables to build strong Python coding skills as you become a professional. A full grasp of programming concepts will guide your coding journey in the future."
                        },
                    ]
                },
                
                {
                    "title": "Unit Two",
                    "sub": "Data Structure And Algorithms In Python",
                    "description": "Our Data Structure and Algorithm course will teach you how to write code that scales with large data sets and identify hidden performance problems. While the concepts will be explored in Python, they can be applied to all programming languages and software development domains. By the end of this course, you’ll have a strong understanding of fundamental algorithms and data structures and be equipped to answer commonly asked interview questions.",
                    "skills": ["Data Organization", "Conditional Programming"],
                    "details": [
                        {
                            "title": "Data Management",
                            "description": "Learn how to use Python to read from and save to files. Being able to read data files with Python allows you to restore an application to a useful state when you rerun it at a later time. Being able to save data in a file enables you to share information from the program between users and sites where the application runs."
                        },
                        {
                            "title": "Advanced Python",
                            "description": "Grow your foundational Python programming skills to build reliable and stable applications. Learn to employ design patterns and best practices in Python applications, exploit the object-oriented programming features in Python, and create and manage concurrent threads of control."
                        },
                    ]
                },
                {
                    "title": "Unit Three",
                    "sub": "Data Structure And Algorithms In Python",
                    "description": "Our Data Structure and Algorithm course will teach you how to write code that scales with large data sets and identify hidden performance problems. While the concepts will be explored in Python, they can be applied to all programming languages and software development domains. By the end of this course, you’ll have a strong understanding of fundamental algorithms and data structures and be equipped to answer commonly asked interview questions.",
                    "skills": ["Data Organization", "Conditional Programming"],
                    "details": [
                        {
                            "title": "Python For Data Analysis",
                            "description": "Learn how to analyze data using Python. This course will take you from the basics of Python to exploring many different types of data. You will learn how to prepare data for analysis, perform simple statistical analyses, create meaningful data visualizations, predict future trends from data, and more.",
                            "skills": ["Python Libraries", "Basic Data Cleaning", "Data Selection & Filtering", "Data File Management"]
                        },
                        {
                            "title": "Python Packages For Data Science",
                            "description": "Explore Python packages for data science, such as Pandas DataFrames, Numpy multidimensional arrays, and SciPy, to work with various datasets."
                        },
                        {
                            "title": "Data Operations",
                            "description": "Python handles data in various formats mainly through the two libraries, Pandas and Numpy. So, learn data operations in Numpy and data operations in Pandas. Master how to import, read, and manipulate data, as well as creating data visualizations."
                        }
                    ]
                }
            ],
            "includes" : [
                {
                    "text": "17 hours on-demand video",
                    "img": desktop,
                },
                {
                    "text": '1 article',
                    "img": note, 
                },{
                    "text": 'Access on mobile and TV',
                    "img": phone,
                },
                // {
                //     "text": "Full lifetime access",
                //     "img": ,
                // },
                {
                    "text": "Certificate of completion",
                    "img": cer,
                }
            ],
            "instructors": {
                "description": "Haelsoft Python course instructors are professionals whose experience spans many reputable companies. You will be learning from experts who are highly skilled, with an updated knowledge of practical Python skills and how to apply them."
            },
            "portfolio": {
                "description": "Build and showcase your Python portfolio through many team projects you will undertake while learning at Haelsoft. You will be closely guided with steps to develop your final Python project. At the end of this course, you will be ingrained in the knowledge of Python programming, data structure & algorithm in Python, and data analysis using Python. You will broadly learn to import and clean data while exploring data visualization techniques."
            },
            "certificate": {
                "description": "You will be eligible for a Haelsoft Python Certificate upon the completion of your course. This is a shareable certificate that you can add to your resume to attract potential employees and add to your page on LinkedIn."
            }
        },
    digitalMarketingCourse: 
        {
            "course_title": "Digital Marketing Online Course",
            "online": 'Learn Digital Marketing Online',
            "intro": "Start a digital marketing career by learning marketing demand skills and grasping digital marketing strategies such as Search Engine Optimization (SEO), Search Engine Marketing (SEM), content marketing, and email marketing.",
            "description": "This Digital Marketing online course has been designed to take you through the online marketing assets, tools, and methods. This is to help individuals and businesses improve their value proposition. It is also to help them achieve their marketing and business goals. The course is convenient, as real-life case studies are always used to explain concepts in class. As the future gets nearer, everything and everyone is going digital. As a result of this, it becomes crucial for everyone who will be in any business to learn Digital Marketing. It is also one of the most valuable skills in the market today. Explore skills like SEO, SEM, social media marketing, content marketing, email marketing, and Google Data Analytics.",
            "benefits": [
                {
                    title: 'Learn Digital Marketing Online Course',
                    desc: 'Online classroom with professionals',
                    img: laptop
                },
                {
                    title: 'Build Digital Marketing Skills',
                    desc: 'Suitable for learners to get and grow more skills',
                    img: people
                },
                {
                    title: 'Prepare For A Digital Marketing Job',
                    desc: 'Build a portfolio of Digital Marketing that would help to ace interviews',
                    img: run,
                },
                {
                    title: 'Professional Certificate',
                    desc: 'Earn a certificate after your Digital Marketing online course',
                    img: cer,
                },
            ],
            "courseReviews": [
                {
                  name: "Alice Johnson",
                  review: "The course was very comprehensive and the instructors were very knowledgeable. I learned a lot!"
                },
                {
                  name: "Bob Smith",
                  review: "Great course! The content was up-to-date and the examples were very practical. Highly recommend!"
                },
                {
                  name: "Catherine Lee",
                  review: "I enjoyed the hands-on approach of this course. The projects helped me understand the concepts better."
                },
                {
                  name: "David Brown",
                  review: "Well-structured and easy to follow. The support from the instructors was excellent."
                },
            ],
            "units": [
                {
                    "title": "Unit One",
                    "sub": "Digital Marketing Strategy",
                    "description": "This course unit will help you develop the skills to create an actionable digital marketing strategy incorporating social media, SEO, digital paid advertising, and measurement to align with your business goals. Learn to examine how businesses use data, analytics, and activation tactics to acquire and retain customers while learning how to incorporate those tactics creatively in your organization. Learn to develop your digital marketing strategy, create innovative and impactful content, create and use consumer personas, and conduct a competitor audit and analysis.",
                    "skills": ["Content & Copywriting", "Digital Strategy", "Personas", "Customer Journey"],
                    "details": [
                        {
                            "title": "Content Marketing Strategy",
                            "description": "Learn how to develop, organize, and implement a content marketing strategy, and analyze and measure the effectiveness of content marketing in your business objective."
                        },
                        {
                            "title": "Learn Copywriting",
                            "description": "Explore the insights into developing persuasive copies, including hands-on practice to advance a career in copywriting or digital marketing."
                        },
                        {
                            "title": "Customer Journey",
                            "description": "Understand customer personas and their journey as the bedrock of your digital marketing strategy to improve business growth."
                        },
                        {
                            "title": "Market Research",
                            "description": "Master the applications of qualitative and quantitative marketing research to analyze trends that would help your digital marketing strategy."
                        },
                    ]
                },
                
                {
                    "title": "Unit Two",
                    "sub": "Search Engine Marketing",
                    "description": "Search engine marketing (SEM) is one of the most effective ways to grow your business in an increasingly competitive marketplace. This course unit covers campaign management, budget optimization, and performance analysis, providing practical insights into the day-to-day management of Google Ads accounts. Learn the difference between SEM and SEO and how to use organic and paid searches as part of an SEM campaign. You will take hands-on exercises and real-world case studies, allowing you to apply your knowledge in a live Google ads environment.",
                    "skills": ["SEM", "SEO", "Structured Data"],
                    "details": [
                        {
                            "title": "Paid Search",
                            "description": "Develop a Google Ads strategy such as pay-per-click (PPC), retargeting ads, and display ads tailored towards digital marketing campaign goals."
                        },
                        {
                            "title": "SEO Strategy",
                            "description": "Explore SEO applications to boost ranking on search engines like Google while having hands-on practice with Google's keyword tools to complete keyword research and map an SEO strategy."
                        },
                    ]
                },
                {
                    "title": "Unit Three",
                    "sub": "Marketing Analytics",
                    "description": "The hallmark of digital marketing is the generation of data to have insight for business promotion and improvement. Master how to analyze digital marketing data, using analytics to make informed decisions.",
                    "skills": ["Optimization", "Reporting"],
                    "details": [
                        {
                            "title": "Data Analytics In Marketing",
                            "description": "Learn how it is imperative to use data analytics to create actionable business insights during marketing. Understand ways to import and visualize data for presentation."
                        },
                        {
                            "title": "Digital Marketing Reporting",
                            "description": "Learn the process of measuring progress, showing value, and identifying actionable steps to improve digital marketing performance. This is to crunch the available numbers and analytics to help meet future marketing goals."
                        },
                    ]
                },
                {
                    "title": "Unit Four",
                    "sub": "Social Media Marketing",
                    "description": "Social media marketing is a powerful way for businesses of all sizes to reach prospects and customers. People discover, learn about, follow, and shop from brands on social media, and these are Facebook, Instagram, X (formerly Twitter), TikTok, and LinkedIn. Learn how great marketing on social media can bring remarkable success to your business, creating devoted brand advocates and even driving leads and sales.",
                    "skills": ["Social Media Advertising", "Influencer Marketing", "Pixel Marketing"],
                    "details": [
                        {
                            "title": "Social Media Marketing Strategy",
                            "description": "Master the fundamentals of social media marketing and how you can run successful campaigns on each platform. Learn how to attract and grow a target audience through organic and paid content, as well as replicating the marketing ideas of bigger brands on social media."
                        },
                        {
                            "title": "Social Media Marketing Platforms",
                            "description": "Understand the uniqueness of social media platforms such as Facebook, Instagram, X (formerly Twitter), TikTok, and LinkedIn and their respective users. This also includes the metrics to consider in each of the platforms to create engaging content that would result in a generation."
                        },
                        {
                            "title": "Unit Five: Email Marketing",
                            "description": "Learn how to build excellent email marketing strategies, write clear and concise emails, and test, deliver, and report emails. Learn how to create a communication plan that resonates. This course unit talks about the user journey and why it is essential to understand your audience to use email marketing better. You will be taught which words to avoid using in your subject lines to improve your email open rates and provide tips and tricks. Gain hands-on learning experience using Mailchimp services.",
                            "skills": ["Email Strategy"]
                        },
                        {
                            "title": "Email Marketing Strategy",
                            "description": "Learn how to apply email marketing to digital marketing while understanding various campaign strategies to increase lead generation and retention funnels."
                        }
                    ]
                },
            ],
            "includes" : [
                {
                    "text": "17 hours on-demand video",
                    "img": desktop,
                },
                {
                    "text": '1 article',
                    "img": note, 
                },{
                    "text": 'Access on mobile and TV',
                    "img": phone,
                },
                // {
                //     "text": "Full lifetime access",
                //     "img": ,
                // },
                {
                    "text": "Certificate of completion",
                    "img": cer,
                }
            ],
            "instructors": {
                "description": "Haelsoft Digital Marketing course instructors are professionals whose experience spans many reputable companies. You will be learning from experts who are highly skilled, with an updated knowledge of practical digital marketing skills and how to apply them."
            },
            "portfolio": {
                "description": "Build and showcase your Digital Marketing portfolio through many projects you will undertake while learning at Haelsoft. You will be closely guided with steps to develop your final digital marketing project. At the end of this course, you will be ingrained in skills such as content marketing, email marketing, analytics, social media marketing, SEO, and SEM that position you well for hiring by companies in need of a Digital Marketer."
            },
            "certificate": {
                "description": "You will be eligible for a Haelsoft Digital Marketing Certificate upon the completion of your course. This is a shareable certificate that you can add to your resume to attract potential employees and add to your page on LinkedIn."
            }
        },
    socialMediaMarketingCourse: 
        {
            "course_title": "Social Media Marketing Online Course",
            "online": 'Learn Social Media Marketing Online',
            "intro": "Gain the skills to create stand-out social media campaigns with Haelsoft and industry experts. Whether you are new to social media marketing or want to build on existing experience, you will be equipped with the critical skills you need to use social media in a way that engages and resonates with your audience.",
            "description": "Are you looking to level up your game in social media marketing? A social media marketing course will sharpen your digital marketing skills, boost your content creation and social media advertising finesse, and set you on the path to becoming a social media marketing guru. Whether you are a business owner looking to enhance your marketing campaigns, have a personal brand you want to drive forward with social media content, or are a marketing professional looking to upskill in marketing communications, our in-depth social media courses will give you the fundamentals to thrive in this dynamic and ever-changing industry.",
            "benefits": [
                {
                    title: 'Learn Social Media Marketing Online Course',
                    desc: 'Online classroom with professionals',
                    img: laptop
                },
                {
                    title: 'Build Social Media Management Skills',
                    desc: 'Suitable for learners to get and grow more skills',
                    img: people
                },
                {
                    title: 'Prepare For A Social Media Management Job',
                    desc: 'Build a portfolio of social media marketing projects that would help to ace interviews',
                    img: run,
                },
                {
                    title: 'Professional Certificate',
                    desc: 'Earn a certificate after your Social Media Marketing online course',
                    img: cer,
                },
            ],
            "courseReviews": [
                {
                  name: "Alice Johnson",
                  review: "The course was very comprehensive and the instructors were very knowledgeable. I learned a lot!"
                },
                {
                  name: "Bob Smith",
                  review: "Great course! The content was up-to-date and the examples were very practical. Highly recommend!"
                },
                {
                  name: "Catherine Lee",
                  review: "I enjoyed the hands-on approach of this course. The projects helped me understand the concepts better."
                },
                {
                  name: "David Brown",
                  review: "Well-structured and easy to follow. The support from the instructors was excellent."
                },
            ],
            "units": [
                {
                    "title": "Unit One",
                    "sub": "Social Media Strategy",
                    "description": "Create a highly effective social media marketing strategy, taking a ‘social first’ approach, aligned with organizational objectives and the wider brand strategy, ensuring that your social media activity is joined with broader marketing channel activity. Learn to optimize social media performance by taking a more focused and strategic approach on relevant platforms such as Facebook, Instagram, X (formerly Twitter), LinkedIn, and YouTube.",
                    "skills": ["Social Content Strategy", "Customer Segmentation", "Customer Journey Mapping", "Social Media Listening", "User Personas"],
                    "details": [
                        {
                            "title": "Social Media Content Strategy",
                            "description": "A social media content strategy influences everything your business does on social media, from what it posts to whether it runs social media ads. When you take the time to create a content strategy for social media, you provide yourself with a North Star for everything you do and give yourself a goal to achieve. Learn to create and promote great content across your social networks."
                        },
                        {
                            "title": "Social Listening",
                            "description": "Successful marketing is a function of understanding the interests of customers. Social listening means taking all these conversations and getting meaningful insights. The number of social media conversations happening at any given time is massive. They ebb and flow with the news and cover every conceivable topic. Learn to generate data from social listening to help your social media campaign."
                        },
                    ]
                },
                {
                    "title": "Unit Two",
                    "sub": "Social Media Platforms",
                    "description": "The world of social media can be deep and confusing, and by the time you feel like you have a grasp of the latest trends and platforms, it evolves and changes once again, making you start from the beginning. If you are new to using social media for businesses or need a refresh and want to understand how to use it to increase new business and produce real ROI, this course is for you. Learn the key features and benefits of the various social media platforms and what content works best for each platform.",
                    "skills": ["Social Media Content Development", "Social Media Advertising", "Social Media Metrics", "Custom Audiences"],
                    "details": [
                        {
                            "title": "Learn Social Media Advertising",
                            "description": "Learn to use paid ads to attract a target audience via social media. These ads allow marketers to reach desired consumers, promote their brand, and drive sales on popular media channels that house billions of active users. Explore how to create ads and analyze advertisements across all platforms."
                        },
                        {
                            "title": "Social Media Marketing Platforms",
                            "description": "Master the best practices for social media marketing and different key metrics to measure performance. Learn to interact with social media communities and the hacks for a unique marketing strategy."
                        },
                    ]
                },
                {
                    "title": "Unit Three",
                    "sub": "Social Media Engagement",
                    "description": "Building a social media community requires consistency between businesses and customers. Learn to develop an online community and ways to measure the effectiveness of your activity across every social media platform. These conversations can take place on individual social media platforms such as Twitter, Facebook, and LinkedIn or in blogs, forums, and third-party review sites.",
                    "skills": ["Community Management", "Social Media Planning & Strategy"],
                    "details": [
                        {
                            "title": "Community Management On Social Media",
                            "description": "Use community management and social media customer service to build your following on social platforms. Explore groups and forums to enhance online visibility and grow your target audience."
                        },
                        {
                            "title": "Social Media Trends",
                            "description": "Social media landscape is constantly changing with time. Leverage the latest innovations like artificial intelligence (AI) and chatbots to stay ahead of market competitors. Learn how to apply ephemeral content types that capture the attention of a wide audience and can quickly spread across all major social media platforms."
                        }
                    ]
                },
            ],
            "includes" : [
                {
                    "text": "17 hours on-demand video",
                    "img": desktop,
                },
                {
                    "text": '1 article',
                    "img": note, 
                },{
                    "text": 'Access on mobile and TV',
                    "img": phone,
                },
                // {
                //     "text": "Full lifetime access",
                //     "img": ,
                // },
                {
                    "text": "Certificate of completion",
                    "img": cer,
                }
            ],
            "instructors": {
                "description": "Haelsoft Social Media Marketing course instructors are professionals whose experience spans many reputable companies. You will be learning from experts who are highly skilled, with an updated knowledge of practical social media marketing skills and how to apply them."
            },
            "portfolio": {
                "description": "Build and showcase your Social Media Marketing portfolio through many projects you will undertake while learning at Haelsoft. You will be closely guided with steps to develop your final social media marketing project. At the end of this course, you will be ingrained in skills such as social media strategy, social listening, content development, community management, etc., that position you well for hiring by companies needing a Social Media Manager."
            },
            "certificate": {
                "description": "You will be eligible for a Haelsoft Social Media Marketing Certificate upon the completion of your course. This is a shareable certificate that you can add to your resume to attract potential employees and add to your page on LinkedIn."
            }
        },
    searchEngineMarketingCourse:
        {
            "course_title": "Search Engine Marketing Online",
            "online": 'Learn Search Engine Marketing Online',
            "intro": "Explore SEM and SEO strategies using paid and organic search methods to yield the desired results of increasing business online presence, attracting the target audience, and improving business growth.",
            "description": "The scope of search engine marketing (SEM) is ever-expanding as almost every business nowadays wants its products and services to be advertised on digital platforms. This is mainly because digital platforms have access to millions of people throughout the world. To improve a website's ranking on search engine results pages, search engine optimization (SEO) and organic search strategies are essential. While it may take some time to see the results of an organic SEO strategy, improving your website's SEO will continue to pay off by bringing you reliable and beneficial online traffic. Learn the SEO strategies required to create an organic presence, boost your search engine rating, and dig deep into organic search in Haelsoft's Search Engine Marketing course.",
            "benefits": [
                {
                    title: 'Learn SEM and SEO Course',
                    desc: 'Online classroom with professionals',
                    img: laptop
                },
                {
                    title: 'Build SEM and SEO Skills',
                    desc: 'Suitable for learners to get and grow more skills',
                    img: people
                },
                {
                    title: 'Prepare For SEM and SEO Jobs',
                    desc: 'Build a portfolio of SEO projects that would help to ace interviews',
                    img: run,
                },
                {
                    title: 'Professional Certificate',
                    desc: 'Earn a certificate after your Search Engine Marketing online course',
                    img: cer,
                },
            ],
            "courseReviews": [
                {
                  name: "Alice Johnson",
                  review: "The course was very comprehensive and the instructors were very knowledgeable. I learned a lot!"
                },
                {
                  name: "Bob Smith",
                  review: "Great course! The content was up-to-date and the examples were very practical. Highly recommend!"
                },
                {
                  name: "Catherine Lee",
                  review: "I enjoyed the hands-on approach of this course. The projects helped me understand the concepts better."
                },
                {
                  name: "David Brown",
                  review: "Well-structured and easy to follow. The support from the instructors was excellent."
                },
            ],
            "units": [
                {
                    "title": "Unit One",
                    "sub": "Introduction To SEO",
                    "description": "Explore SEO the process of optimizing a web page and its content to increase its visibility amongst users searching for keywords relevant to your site. Learn about powerful strategies and web-based tools that can be leveraged to gain valuable insights into your web traffic and how to improve your site’s user experience.",
                    "skills": ["Keyword Research", "Content Optimization", "Basic SEO Audits"],
                    "details": [
                        {
                            "title": "Learn SEO Tools",
                            "description": "Understanding the intricacies of SEO with the knowledge of tools can serve many different functions, including search query analytics, reporting automation, AI-driven content optimization recommendations, and website performance analysis."
                        },
                        {
                            "title": "Perform An SEO Audit",
                            "description": "Master the art of analyzing websites for common technical SEO issues and optimization best practices. Get actionable insights that will help you rank better in search engines."
                        },
                    ]
                },
                {
                    "title": "Unit Two",
                    "sub": "Organic Search",
                    "description": "Organic search increases brand awareness, as it drives targeted traffic to a website using relevant keywords and SEO strategies. This wider audience visibility on search engines like Google is crucial for businesses. Learn how to use organic search to outrank competitors by understanding ranking factors such as search intent, content relevancy, web page usability, content quality, and more.",
                    "skills": ["SEO Content Strategy", "Backlink Strategy", "Local SEO", "Backlink Audits"],
                    "details": [
                        {
                            "title": "SEO Content Strategy",
                            "description": "The bedrock of the website is content because that is what directs the audience to your web page and it is what retains them. Learn the best practices for SEO content writing that the web ranks in search engines like Google. We will teach you how to write blog posts, landing pages, etc."
                        },
                        {
                            "title": "Backlinks",
                            "description": "SEO backlinks are essential to increase online visibility for the target audience and originality with search engines. Explore the hacks to getting backlinks and relevant backlink tools to aid your projects."
                        },
                        {
                            "title": "Learn Local SEO",
                            "description": "Local SEO optimizes your website to rank better in search results and reach your local audience. You can optimize your city and address for people to find your business online and visit offline. Learn the best Local SEO strategy to analyze your site and draw insights for improvements."
                        },
                    ]
                },
                {
                    "title": "Unit Three",
                    "sub": "Paid Search",
                    "description": "Paid search is a powerful tool that allows businesses to target specific keywords and reach potential customers who are actively searching for information related to their products or services. With paid search, businesses can bid on relevant keywords and display ads in the paid search results sections of search engines like Google and Bing. Learn to use paid search marketing (PPC) to improve paid search traffic and drive business objectives.",
                    "skills": ["Search Advertising", "Ad Copywriting", "Remarketing Fundamentals"],
                    "details": [
                        {
                            "title": "Keyword Research",
                            "description": "Keyword research lays the foundation for effective SEO. High ranking keywords will drive more traffic to your website from search engines. Learn how to do keyword research that drives more organic traffic to help businesses maximize online performance."
                        },
                        {
                            "title": "Marketing Campaign Planning",
                            "description": "Master the best practices for developing search campaigns, writing ad copy, creating ads, and deploying a paid search strategy that works to achieve your business goals."
                        }
                    ]
                },
            ],
            "includes" : [
                {
                    "text": "17 hours on-demand video",
                    "img": desktop,
                },
                {
                    "text": '1 article',
                    "img": note, 
                },{
                    "text": 'Access on mobile and TV',
                    "img": phone,
                },
                // {
                //     "text": "Full lifetime access",
                //     "img": ,
                // },
                {
                    "text": "Certificate of completion",
                    "img": cer,
                }
            ],
            "instructors": {
                "description": "Haelsoft Search Engine Marketing course instructors are professionals whose experience spans many reputable companies. You will be learning from experts who are highly skilled, with an updated knowledge of practical SEO and SEM skills and how to apply them."
            },
            "portfolio": {
                "description": "Build and showcase your SEM and SEO Marketing portfolio through many projects you will undertake while learning at Haelsoft. You will be closely guided with steps to develop your final social media marketing project. At the end of this course, you will be ingrained in skills such as content optimization, SEO audit, local SEO, keyword research, marketing campaign planning, etc., that position you well for hiring by companies needing an SEO Specialist."
            },
            "certificate": {
                "description": "You will be eligible for a Haelsoft Search Engine Marketing Certificate upon the completion of your course. This is a shareable certificate that you can add to your resume to attract potential employees and add to your page on LinkedIn."
            }
        },
    uxDesignCourse: 
        {
            "course_title": "UX Design",
            "online": 'Learn UX Design Online',
            "intro": "This Haelsoft UX Design course provides a comprehensive understanding of UX design principles. Learn about human behavior's impact on digital design, inclusive design methods, user analysis, persona creation, navigation, visual design, interaction, and usability testing. Through practical exercises, students will gain skills to create user-friendly digital experiences.",
            "description": "Be the voice of users by developing the confidence to apply the full range of UX Design skills needed to be successful in this profession. We’ll start with the fundamentals and extend your skills into advanced UX research and high-fidelity prototyping. Learn to analyze and experiment with theory, techniques, and industry-standard tools to understand user experience for a variety of interactive media, such mobile apps, and websites.",
            "benefits": [
                {
                    title: 'Learn UX Design Course',
                    desc: 'Online classroom with professionals',
                    img: laptop
                },
                {
                    title: 'Build UX Design Skills',
                    desc: 'Suitable for learners to get and grow more skills',
                    img: people
                },
                {
                    title: 'Prepare For UX Design Jobs',
                    desc: 'Build a portfolio of UX design projects that would help to ace interviews',
                    img: run,
                },
                {
                    title: 'Professional Certificate',
                    desc: 'Earn a certificate after your UX Design online course',
                    img: cer,
                },
            ],
            "courseReviews": [
                {
                  name: "Alice Johnson",
                  review: "The course was very comprehensive and the instructors were very knowledgeable. I learned a lot!"
                },
                {
                  name: "Bob Smith",
                  review: "Great course! The content was up-to-date and the examples were very practical. Highly recommend!"
                },
                {
                  name: "Catherine Lee",
                  review: "I enjoyed the hands-on approach of this course. The projects helped me understand the concepts better."
                },
                {
                  name: "David Brown",
                  review: "Well-structured and easy to follow. The support from the instructors was excellent."
                },
            ],
            "units": [
                {
                    "title": "Unit One",
                    "sub": "Introduction To UX Research & Strategy",
                    "description": "Without a data-informed mindset, product (UX/UI) Designers will struggle in the industry. As the industry progresses, particularly with the advancement of AI, it is crucial for designers to expand their skills to enhance their competitiveness. With UI design nearing automation through AI technologies, acquiring strategic and research skills is becoming increasingly vital. This includes all the unspoken skill sets that the industry demands, like product prioritization, business acumen, and product strategy. Learn to choose the right research methods, understand user desires deeply, and create designs that go beyond aesthetics to meet strategic business needs.",
                    "skills": ["User Research", "UX Research & Planning", "Design Thinking", "UX Personas"],
                    "details": [
                        {
                            "title": "Apply Design Thinking",
                            "description": "Design thinking is a popular framework to generate innovative solutions, adopted by large companies such as Apple and Google. Learn about prototyping, iteration, and brainstorming from design thinking experts."
                        },
                        {
                            "title": "Conduct Effective User Research",
                            "description": "Good user research is characterized by clear goals, well-defined research protocols, appropriate sampling methods, and unbiased data collection. Learn how designers employ usability testing and other research techniques to drive business success."
                        },
                    ]
                },
                {
                    "title": "Unit Two",
                    "sub": "Structuring & Planning Design Solutions",
                    "title": "Unit Two: ",
                    "description": "A good understanding of your users is the inspiration for designs, which would guide you in developing a solution. Explore the tools to help your workflow to be effective and efficient, with hands-on projects to aid your knowledge. Learn interaction design, which would help your career journey.",
                    "skills": ["Interaction Design", "Sketching", "Information Architecture"],
                    "details": [
                        {
                            "title": "Information Architecture",
                            "description": "Information architecture (IA) is the practice of organizing content in a practical way, and it is a key aspect of your library website’s user experience. Master labeling and organizing online information for optimal usability and findability. Learn the principles and best practices for building a practical IA and explore the relationship between IA and web navigation."
                        },
                        {
                            "title": "Apply Iterative Design Process",
                            "description": "Explore best methods for user flows and wire flows, as refinement and improvement are important to the entire process of a design. Learn how to conduct iterations to take feedback and make adjustments."
                        },
                    ]
                },
                {
                    "title": "Unit Three",
                    "sub": "High-Fidelity Design",
                    "description": "Learn to create prototypes that look and function as close to the final product as possible. You will gain insight into adding interactions, transitions, and animations to create an immersive user experience.",
                    "skills": ["Wireframing", "Interactive Prototyping", "Interface Design", "Visual Design"],
                    "details": [
                        {
                            "title": "Create Wireframes",
                            "description": "Learn to build low-fidelity wireframes and iterate them to high-fidelity for the UX design to take shape."
                        },
                        {
                            "title": "Discover UI Design Fundamentals",
                            "description": "Learn the role of user interface in digital experience as UX and UI are intertwined. Understand basic UI concepts such as typography, style guides, grids, and more."
                        },
                    ]
                },
                {
                    "title": "Unit Four",
                    "sub": "Elevating & Communicating Design Solutions",
                    "title": "Unit Four: ",
                    "description": "Furnish your UX design skills by completing user testing across the UX design process. Master how to create inclusive designs to make your project attractive and complete.",
                    "skills": ["User Testing", "Usability", "Usability Design", "Accessibility", "Heuristics"],
                    "details": [
                        {
                            "title": "Usability Design",
                            "description": "Learn about some essential usability design tools and techniques for beginners, such as user personas, journey maps, wireframes, etc. Understand Heuristic evaluation to check the consistency and quality of your design and to find and prioritize any usability issues or improvements."
                        }
                    ]
                },
            ],
            "includes" : [
                {
                    "text": "17 hours on-demand video",
                    "img": desktop,
                },
                {
                    "text": '1 article',
                    "img": note, 
                },{
                    "text": 'Access on mobile and TV',
                    "img": phone,
                },
                // {
                //     "text": "Full lifetime access",
                //     "img": ,
                // },
                {
                    "text": "Certificate of completion",
                    "img": cer,
                }
            ],
            "instructors": {
                "description": "Haelsoft UX Design course instructors are professionals whose experience spans many reputable companies. You will be learning from experts who are highly skilled, with an updated knowledge of practical UX design skills and how to apply them."
            },
            "portfolio": {
                "description": "Build and showcase your UX design portfolio through many projects you will undertake while learning at Haelsoft. You will be closely guided with steps to develop your final UX design project. At the end of this course, you will be ingrained in skills such as design thinking, usability design, high-fidelity design, wireframing, interface design, etc., that position you well for hiring by companies needing a UX Designer."
            },
            "certificate": {
                "description": "You will be eligible for a Haelsoft UX Design Certificate upon the completion of your course. This is a shareable certificate that you can add to your resume to attract potential employees and add to your page on LinkedIn."
            }
        }
}


export const faqs = [
    {
        id: 1,
        title: 'What is Haelsoft Elearning Platform',
        ans: 'Haelsoft Elearning Platform is an online learning portal designed to help individuals gain essential digital skills. We offer a variety of courses aimed at enhancing your proficiency in areas such as digital marketing, web development, data analysis, and more.'
    },
    {
        id: 2,
        title: 'What types of courses are available?',
        ans: 'Anyone looking to improve their digital skills can benefit from our platform. Whether you’re a beginner wanting to learn the basics or a professional seeking to expand your expertise, our courses are designed to meet your needs.'
    },
    {
        id: 3,
        title: 'What payment methods are accepted?',
        ans: 'We accepts various payment methods including major c debit cards, and bank transfers. Payments are processed securely through our platform, ensuring convenience and safety for both tutors and students.'
    },
    {
        id: 4,
        title: 'Can I get a certificate after completing a course?',
        ans: 'Yes, upon successful completion of a course, you will receive a digital certificate that you can share on your LinkedIn profile, resume, or portfolio.'
    },
]


export const bootcampUX = [
    {
        id: 1,
        name: 'User Research & Personas',
        desc: 'Understand your audience through interviews, surveys, and data analysis.',
        img: can
    },
    {
        id: 2,
        name: 'Wireframing & Prototyping',
        desc: 'Create low- and high-fidelity designs using tools like Figma and Adobe XD.',
        img: flex
    },
    {
        id: 3,
        name: 'Design Thinking',
        desc: 'Approach problem-solving with a user-first mindset.',
        img: sol
    },
    {
        id: 4,
        name: 'Usability Testing',
        desc: 'Conduct and analyze tests to improve your designs.',
        img: can
    },
    {
        id: 5,
        name: 'Interaction  Design',
        desc: 'Learn the principles of designing intuitive interactions.',
        img: flex
    },
    {
        id: 6,
        name: 'Information Architecture',
        desc: 'Organize content to create seamless user journeys.',
        img: sol
    },
    {
        id: 7,
        name: 'Visual Design Principles',
        desc: 'Master typography, color theory, and layout for stunning designs.',
        img: can
    },
]


export const featuresUx = [
    {
        id: 1,
        name: 'Duration',
        desc: '12-16 weeks (full-time or part-time options)'
    },
    {
        id: 2,
        name: 'Certification',
        desc: 'Earn a recognized Data Science certification upon completion'
    },
    {
        id: 3,
        name: 'Mode',
        desc: 'Online'
    },
    {
        id: 4,
        name: 'Live Projects',
        desc: 'Collaborate on industry-inspired projects and build a job-ready portfolio'
    },
    {
        id: 5,
        name: 'Mentorship',
        desc: 'Access one-on-one guidance from industry professionals'
    },
]

export const whoUx = [
    {
        id: 1,
        list: 'Beginners passionate about starting a career in UX design.'
    },
    {
        id: 2,
        list: 'Graphic designers looking to transition into UX roles.'
    },
    {
        id: 3,
        list: 'Tech enthusiasts eager to design user-friendly interfaces.'
    },
    {
        id: 4,
        list: 'Entrepreneurs aiming to create user-centered digital products.'
    },
]


export const bootcampDM = [
    {
        id: 1,
        name: 'Optimize websites to rank higher on search',
        desc: 'Optimize websites to rank higher on search engines.',
        img: can
    },
    {
        id: 2,
        name: 'Pay-Per-Click (PPC) Advertising',
        desc: 'Clearn to create and manage paid ad campaigns on platforms like Google Ads.',
        img: flex
    },
    {
        id: 3,
        name: 'Social Media Marketing',
        desc: 'Master platforms like Facebook, Instagram, LinkedIn, and TikTok..',
        img: sol
    },
    {
        id: 4,
        name: 'Content Marketing',
        desc: 'Create engaging blogs, videos, and infographics that drive engagement.',
        img: can
    },
    {
        id: 5,
        name: 'Email Marketing',
        desc: 'Build effective email campaigns that nurture leads and drive conversions.',
        img: flex
    },
    {
        id: 6,
        name: 'Web Analytics',
        desc: 'Track and analyze campaign performance using tools like Google Analytics.',
        img: sol
    },
    {
        id: 7,
        name: 'Marketing Strategy',
        desc: 'Develop data-driven strategies that align with business goals.',
        img: can
    },
]


export const featuresDM = [
    {
        id: 1,
        name: 'Duration',
        desc: '12-16 weeks (full-time or part-time options)'
    },
    {
        id: 2,
        name: 'Certification',
        desc: 'Earn a recognized Data Science certification upon completion'
    },
    {
        id: 3,
        name: 'Mode',
        desc: 'Online'
    },
    {
        id: 4,
        name: 'Live Projects',
        desc: 'Work on real campaigns for businesses to gain hands-on experience'
    },
    {
        id: 5,
        name: 'Mentorship',
        desc: 'Connect with industry experts and peers'
    },
]

export const whoDM = [
    {
        id: 1,
        list: 'Beginners interested in starting a career in digital marketing.'
    },
    {
        id: 2,
        list: 'Entrepreneurs looking to grow their businesses online.'
    },
    {
        id: 3,
        list: 'Marketing professionals seeking to upgrade their digital skills.'
    },
    {
        id: 4,
        list: 'Freelancers and creative professionals aiming to diversify their expertise.'
    },
]





export const bootcampDS = [
    {
        id: 1,
        name: 'Python & R Programming',
        desc: 'Learn essential programming languages for data analysis..',
        img: can
    },
    {
        id: 2,
        name: 'Data Visualization',
        desc: 'Create compelling visuals using tools like Tableau and Power BI.',
        img: flex
    },
    {
        id: 3,
        name: 'Statistical Analysis',
        desc: 'Understand the numbers behind the data with advanced statistical techniques.',
        img: sol
    },
    {
        id: 4,
        name: 'Machine Learning',
        desc: 'Build predictive models using algorithms like regression, clustering, and neural networks.',
        img: can
    },
    {
        id: 5,
        name: 'Big Data Tools',
        desc: 'Work with Hadoop, Spark, and cloud platforms for large-scale data analysis.',
        img: flex
    },
    {
        id: 6,
        name: 'Data Wrangling',
        desc: 'Clean and prepare data for analysis.',
        img: sol
    },
    {
        id: 7,
        name: 'SQL',
        desc: 'Manage and query databases efficiently.',
        img: can
    },
]



export const featuresDS = [
    {
        id: 1,
        name: 'Duration',
        desc: '12-16 weeks (full-time or part-time options)'
    },
    {
        id: 2,
        name: 'Certification',
        desc: 'Earn a recognized Data Science certification upon completion'
    },
    {
        id: 3,
        name: 'Mode',
        desc: 'Online'
    },
    {
        id: 4,
        name: 'Live Projects',
        desc: 'Collaborate on industry-inspired projects and build a job-ready portfolio'
    },
    {
        id: 5,
        name: 'Mentorship',
        desc: 'Access one-on-one guidance from industry professionals'
    },
]


export const whoDS = [
    {
        id: 1,
        list: 'Beginners interested in breaking into data science.'
    },
    {
        id: 2,
        list: 'Professionals seeking to upskill or transition to a data-driven role.'
    },
    {
        id: 3,
        list: 'Entrepreneurs aiming to harness data for business growth.'
    },
    {
        id: 4,
        list: 'Tech enthusiasts passionate about using data to solve real-world problems.'
    },
]





export const bootcampCY = [
    {
        id: 1,
        name: 'Cybersecurity Fundamentals',
        desc: 'Understand the principles of confidentiality, integrity, and availability.',
        img: can
    },
    {
        id: 2,
        name: 'Network Security',
        desc: 'Learn how to protect data and systems in enterprise networks.',
        img: flex
    },
    {
        id: 3,
        name: 'Ethical Hacking & Penetration Testing',
        desc: 'Test systems for vulnerabilities using tools like Metasploit and Wireshark.',
        img: sol
    },
    {
        id: 4,
        name: 'Threat Detection & Response',
        desc: 'Develop strategies to detect and respond to cyberattacks in real time.',
        img: can
    },
    {
        id: 5,
        name: 'Risk Assessment & Management',
        desc: 'Learn how to identify, analyze,  and mitigate potential security risks.',
        img: flex
    },
    {
        id: 6,
        name: 'Cloud Security',
        desc: 'Secure cloud environments and data.',
        img: sol
    },
    {
        id: 7,
        name: 'Cyber Law and Compliance',
        desc: 'Understand global regulations, including GDPR, HIPAA, and ISO standards.',
        img: can
    },
]




export const featuresCY = [
    {
        id: 1,
        name: 'Duration',
        desc: '12-16 weeks (full-time or part-time options)'
    },
    {
        id: 2,
        name: 'Certification',
        desc: 'Earn an industry-recognized certificate upon completion.'
    },
    {
        id: 3,
        name: 'Mode',
        desc: 'Online'
    },
    {
        id: 4,
        name: 'Live Projects',
        desc: 'Kali Linux, Splunk, Nessus, Burp Suite, and more.'
    },
    {
        id: 5,
        name: 'Mentorship',
        desc: 'Access one-on-one guidance from industry professionals'
    },
]



export const whoCY = [
    {
        id: 1,
        list: 'Aspiring cybersecurity professionals with no prior experience.'
    },
    {
        id: 2,
        list: 'IT professionals looking to upskill and transition into cybersecurity roles.'
    },
    {
        id: 3,
        list: 'Entrepreneurs wanting to secure their businesses’ digital assets.'
    },
    {
        id: 4,
        list: 'Anyone passionate about fighting cybercrime and protecting digital systems.'
    },
]




export const bootcampSE = [
    {
        id: 1,
        name: 'Intensive, Industry-Focused Training',
        desc: 'Learn the latest tools, frameworks, and programming languages demanded by employers.',
        img: can
    },
    {
        id: 2,
        name: 'Hands-On Projects',
        desc: 'Work on real-world challenges, from coding applications to developing full-stack websites.',
        img: flex
    },
    {
        id: 3,
        name: 'Expert-Led Instruction',
        desc: 'Learn from experienced software engineers and web developers who bring industry insights to the classroom.',
        img: sol
    },
    {
        id: 4,
        name: 'Career Support',
        desc: 'Receive personalized resume reviews, interview preparation, and access to a network of hiring partners.',
        img: can
    },
    {
        id: 5,
        name: 'Flexible Learning Options',
        desc: 'Choose between in-person, online, or hybrid learning to fit your schedule.',
        img: flex
    }
]



export const featuresSE = [
    {
        id: 1,
        name: 'Duration',
        desc: '12-16 weeks (full-time or part-time options)'
    },
    {
        id: 2,
        name: 'Certification',
        desc: 'Earn an industry-recognized certificate upon completion.'
    },
    {
        id: 3,
        name: 'Mode',
        desc: 'Online'
    },
    {
        id: 4,
        name: 'Live Projects',
        desc: 'Earn an industry-recognized certificate upon completion'
    },
    {
        id: 5,
        name: 'Support',
        desc: 'Access one-on-one mentorship and career coaching'
    },
]



export const whoSE = [
    {
        id: 1,
        list: 'Beginners with no coding experience looking to break into tech.'
    },
    {
        id: 2,
        list: 'Professionals seeking to transition into software engineering or web development.'
    },
    {
        id: 3,
        list: 'Entrepreneurs aiming to build their own tech solutions.'
    },
    {
        id: 4,
        list: 'Tech enthusiasts eager to advance their coding skills.'
    },
]

// Certificate Learn

// web

export const webLearn = [
    {
        id: 1,
        list: 'Master the building blocks of the web, creating structure and styling for websites.'
    },
    {
        id: 2,
        list: 'Learn how to add interactivity and dynamic features to your web pages.'
    },
    {
        id: 3,
        list: 'Ensure your websites look great on any device with mobile-first development.'
    },
    {
        id: 4,
        list: 'Work with tools like Node.js to handle backend processes.'
    },
    {
        id: 5,
        list: 'Gain experience using databases like SQL and MongoDB.'
    },
]

// ux

export const uxLearn = [
    {
        id: 1,
        list: 'Understand user needs through interviews, surveys, and usability testing.'
    },
    {
        id: 2,
        list: ' Learn the foundations of color theory, typography, and layout for UX.'
    },
    {
        id: 3,
        list: 'Build interactive prototypes using tools like Figma, Adobe XD, or Sketch.'
    },
    {
        id: 4,
        list: 'Organize content effectively to enhance user navigation.'
    },
    {
        id: 5,
        list: 'Test and refine your designs to meet user expectations.'
    },
    {
        id: 6,
        list: 'Create solutions that prioritize user needs and preferences.'
    },
    {
        id: 7,
        list: 'Work effectively with developers, product managers, and stakeholders.'
    },
]


// ds

export const dsLearn = [
    {
        id: 1,
        list: 'Analyze datasets and create compelling visualizations using tools like Excel, Tableau, and Power BI.'
    },
    {
        id: 2,
        list: 'Learn Python, R, and SQL to clean, analyze, and manipulate data.'
    },
    {
        id: 3,
        list: 'Master statistical methods, probability, and linear algebra for data interpretation.'
    },
    {
        id: 4,
        list: 'Build predictive models and algorithms using libraries like TensorFlow and Scikit-learn.'
    },
    {
        id: 5,
        list: 'Explore tools like Hadoop and Spark for handling large-scale data.'
    },
    {
        id: 6,
        list: 'Learn to manage and analyze data responsibly.'
    },
    {
        id: 7,
        list: 'Apply data science techniques in industries like healthcare, finance, e-commerce, and more.'
    },
]




// dm

export const dmLearn = [
    {
        id: 1,
        list: 'Optimize websites to rank higher on search engines and drive organic traffic.'
    },
    {
        id: 2,
        list: 'Create and manage impactful campaigns on platforms like Instagram, Facebook, LinkedIn, and Twitter.'
    },
    {
        id: 3,
        list: 'Develop compelling content strategies to engage and retain audiences.'
    },
    {
        id: 4,
        list: 'Run effective paid campaigns on Google Ads and social platforms.'
    },
    {
        id: 5,
        list: 'Craft emails that convert and build long-term customer relationships.'
    },
    {
        id: 6,
        list: 'Use tools like Google Analytics to measure and optimize campaign performance.'
    },
    {
        id: 7,
        list: 'Build comprehensive plans to achieve marketing objectives.'
    },
]





// Certificate Skills

// web

export const webSkills = [
    {
        id: 1,
        list: 'HTML/CSS'
    },
    {
        id: 2,
        list: 'JavaScript'
    },
    {
        id: 3,
        list: 'Responsive Design'
    },
    {
        id: 4,
        list: 'SQL'
    },
    {
        id: 5,
        list: 'MongoDB'
    },
    {
        id: 6,
        list: 'React'
    },
    {
        id: 7,
        list: 'Angular'
    },
    {
        id: 8,
        list: 'Bootstrap'
    },
    {
        id: 9,
        list: 'Git/GitHub'
    },
    {
        id: 10,
        list: 'AWS'
    },
    {
        id: 11,
        list: 'Netlify'
    },
]


// ux



export const uxSkills = [
    {
        id: 1,
        list: 'User Research'
    },
    {
        id: 2,
        list: 'Design Principles'
    },
    {
        id: 3,
        list: 'Prototyping'
    },
    {
        id: 4,
        list: 'Information Architecture'
    },
    {
        id: 5,
        list: 'Usability Testing'
    },
    {
        id: 6,
        list: 'Human-Centered Design'
    },
    {
        id: 7,
        list: 'Collaboration'
    }
]




// ds



export const dsSkills = [
    {
        id: 1,
        list: 'Data Analysis'
    },
    {
        id: 2,
        list: 'Excel'
    },
    {
        id: 3,
        list: 'Tableau'
    },
    {
        id: 4,
        list: 'Power BI'
    },
    {
        id: 5,
        list: 'Python'
    },
    {
        id: 6,
        list: 'R'
    },
    {
        id: 7,
        list: 'SQL'
    },
    {
        id: 8,
        list: 'statistical methods'
    },
    {
        id: 9,
        list: 'probability'
    },
    {
        id: 10,
        list: 'linear algebra'
    },
    {
        id: 11,
        list: 'data interpretation'
    },
    {
        id: 12,
        list: 'Hadoop'
    },
    {
        id: 13,
        list: 'Spark'
    },
    {
        id: 14,
        list: 'TensorFlow'
    },
    {
        id: 15,
        list: 'Scikit-learn'
    }
]





// dm



export const dmSkills = [
    {
        id: 1,
        list: 'SEO'
    },
    {
        id: 2,
        list: 'Social Media Marketing'
    },
    {
        id: 3,
        list: 'Content Marketing'
    },
    {
        id: 4,
        list: 'Advertising'
    },
    {
        id: 5,
        list: 'Email Marketing'
    },
    {
        id: 6,
        list: 'Digital Strategy Development'
    },
    {
        id: 7,
        list: 'Analytics'
    }
]







// Certificate Tools

// web

export const webTools = [
    {
        id: 1,
        list: (
            <RiReactjsFill color='#1d4ed8' className='text-[2rem]'/>
        )
    },
    {
        id: 2,
        list: (
            <BsBootstrapFill color='#9333ea' className='text-[2rem]'/>
        )
    },
    {
        id: 3,
        list: (
            <PiFileSqlDuotone color='#ca8a04' className='text-[2rem]'/>
        )
    },
    {
        id: 4,
        list: (
            <SiMongodb color='#22c55e' className='text-[2rem]'/>
        )
    },
    {
        id: 5,
        list: (
            <AiOutlineGithub className='text-[2rem]' />
        )
    },
    {
        id: 6,
        list: (
            <LiaAws color='#ca8a04' className='text-[2rem]'/>
        )
    },
    {
        id: 7,
        list: (
            <BiLogoNetlify color='#60a5fa' className='text-[2rem]'/>
        )
    }
]


// ux

export const uxTools = [
    {
        id: 1,
        list: (
            <FaDrawPolygon color="#2196F3" className='text-[2rem]' />
        )
    },
    {
        id: 2,
        list: (
            <SiFigma color="#F24E1E" className='text-[2rem]' />
        )
    }
]


// ds

export const dsTools = [
    {
      id: 1,
      list: (
        <FaPython color="#306998" className="text-[2rem]" />
      ),
    },
    {
      id: 2,
      list: (
        <SiR color="#276DC3" className="text-[2rem]" />
      ),
    },
    {
      id: 3,
      list: (
        <SiSqlite color="#1C1C1C" className="text-[2rem]" />
      ),
    },
    {
      id: 4,
      list: (
        <AiOutlineBarChart color="#F1C40F" className="text-[2rem]" />
      ),
    },
    {
      id: 5,
      list: (
        <FaCogs color="#34495E" className="text-[2rem]" />
      ),
    },
    {
      id: 6,
      list: (
        <RiDatabase2Fill color="#27AE60" className="text-[2rem]" />
      ),
    },
    {
      id: 7,
      list: (
        <GiNetworkBars color="#8E44AD" className="text-[2rem]" />
      ),
    },
];


// dm

export const dmTools = [
    {
        id: 1,
        list: (
            <FaSearch color="#1E88E5" className="text-[2rem]" />
        ),
        desc: 'SEO Mastery: Optimize websites to rank higher on search engines and drive organic traffic.'
    },
    {
        id: 2,
        list: (
            <FaFacebook color="#1877F2" className="text-[2rem]" />
        ),
        desc: 'Social Media Marketing: Create and manage impactful campaigns on platforms like Instagram, Facebook, LinkedIn, and Twitter.'
    },
    {
        id: 3,
        list: (
            <FaPenFancy color="#F39C12" className="text-[2rem]" />
        ),
        desc: 'Content Marketing: Develop compelling content strategies to engage and retain audiences.'
    },
    {
        id: 4,
        list: (
            <FaGoogle color="#DB4437" className="text-[2rem]" />
        ),
        desc: 'Pay-Per-Click Advertising (PPC): Run effective paid campaigns on Google Ads and social platforms.'
    },
    {
        id: 5,
        list: (
            <FaMailBulk color="#3498DB" className="text-[2rem]" />
        ),
        desc: 'Email Marketing: Craft emails that convert and build long-term customer relationships.'
    },
    {
        id: 6,
        list: (
            <FaChartPie color="#2ECC71" className="text-[2rem]" />
        ),
        desc: 'Analytics and Reporting: Use tools like Google Analytics to measure and optimize campaign performance.'
    },
    {
        id: 7,
        list: (
            <FaBullseye color="#E74C3C" className="text-[2rem]" />
        ),
        desc: 'Digital Strategy Development: Build comprehensive plans to achieve marketing objectives.'
    }
];


// Certificate Why

// Web

export const webWhy = [
    {
        id: 1,
        name: 'Comprehensive Curriculum',
        desc: 'Cover the entire spectrum of web development, from basics to advanced topics.',
        icon: <FaBookOpen className='text-[2rem] text-main' />
    },
    {
        id: 2,
        name: 'Hands-On Learning',
        desc: 'Build real-world projects to showcase your skills.',
        icon: <FaLaptopCode className='text-[2rem] text-main' />
    },
    {
        id: 3,
        name: 'Expert Instructors',
        desc: 'Learn from industry professionals with years of practical experience.',
        icon: <FaChalkboardTeacher className='text-[2rem] text-main' />
    },
    {
        id: 4,
        name: 'Flexible Learning Options',
        desc: 'Access self-paced courses or join live, interactive sessions.',
        icon: <FaCalendarCheck className='text-[2rem] text-main' />
    },
    {
        id: 5,
        name: 'Certification',
        desc: 'Earn a professional certificate to validate your expertise and enhance your resume.',
        icon: <FaCertificate className='text-[2rem] text-main' />
    }
]


// ux

export const uxWhy = [
    {
        id: 1,
        name: 'Expert Instructors',
        desc: 'Learn from seasoned UX professionals with real-world experience.',
        icon: <FaChalkboardTeacher className='text-[2rem] text-main' />
    },
    {
        id: 2,
        name: 'Hands-On Project',
        desc: 'Create a portfolio of projects that showcase your UX design skills.',
        icon: <FaTools className='text-[2rem] text-main' />
    },
    {
        id: 3,
        name: 'Flexible Learning',
        desc: 'Access self-paced modules or live sessions to suit your schedule.',
        icon: <FaCalendarCheck className='text-[2rem] text-main' />
    },
    {
        id: 4,
        name: 'Cutting-Edge Tools',
        desc: 'Get hands-on experience with industry-standard tools and software.',
        icon: <FaLaptopCode className='text-[2rem] text-main' />
    },
    {
        id: 5,
        name: 'Certification',
        desc: 'Earn a recognized certificate to boost your credibility and career prospects.',
        icon: <FaCertificate className='text-[2rem] text-main' />
    }
]


// data science

export const dsWhy = [
    {
        id: 1,
        icon: <FaChartLine className="text-[2rem] text-main" />,
        head: 'High Demand',
        desc: 'Data science is one of the top in-demand skills globally, with growing opportunities across industries.'
    },
    {
        id: 2,
        icon: <AiOutlineStock className="text-[2rem] text-main" />,
        head: 'Career Opportunities',
        desc: 'Unlock roles such as Data Analyst, Data Scientist, Machine Learning Engineer, and more.'
    },
    {
        id: 3,
        icon: <RiLightbulbFlashLine className="text-[2rem] text-main" />,
        head: 'Innovative Impact',
        desc: 'Leverage data to solve real-world problems and drive innovation.'
    },
    {
        id: 4,
        icon: <FaDollarSign className="text-[2rem] text-main" />,
        head: 'Lucrative Salaries',
        desc: 'Data professionals enjoy some of the highest-paying jobs in tech.'
    }
];



// digital marketing


export const dmWhy = [
    {
        id: 1,
        icon: <FaChalkboardTeacher className="text-[2rem] text-main" />,
        title: 'Industry-Expert Instructors',
        desc: 'Learn from seasoned marketers with real-world experience.'
    },
    {
        id: 2,
        icon: <FaLaptopCode className="text-[2rem] text-main" />,
        title: 'Practical Learning',
        desc: 'Gain hands-on experience through live projects and case studies.'
    },
    {
        id: 3,
        icon: <FaRegClock className="text-[2rem] text-main" />,
        title: 'Flexible Formats',
        desc: 'Choose between self-paced modules and live instructor-led sessions.'
    },
    {
        id: 4,
        icon: <FaCertificate className="text-[2rem] text-main" />,
        title: 'Certification',
        desc: 'Earn a recognized certificate to enhance your resume and LinkedIn profile.'
    },
    {
        id: 5,
        icon: <FaBriefcase className="text-[2rem] text-main" />,
        title: 'Career Support',
        desc: 'Access job placement assistance, resume reviews, and interview preparation.'
    }
];




// Certificate Curriculum


// web

export const curriculumWeb = [
    {
        id: 1,
        unit: 'unit 1',
        bg: '#C75C27',
        heading: 'Introduction to Web Development',
        desc: "In this unit, you'll learn the fundamentals of web development, including the structure of web pages, the role of HTML for content, CSS for styling, and JavaScript for interactivity. We'll explore how the internet works, the basics of browsers, and how web pages are rendered. This foundation will prepare you to start creating your own websites.",
        skills: [
            'The Web',
            'HTML',
            'CSS',
            'Responsive Design'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaGlobe className='text-[1.75rem]'/>
                ),
                head: 'WWW',
                desc: 'The World Wide Web (WWW) connects billions of websites, enabling access to vast information, resources, and communication on the internet.'
            },
            {
                id: 2,
                icon: (
                    <RiHtml5Line className='text-[1.75rem]'/>
                ),
                head: 'HTML',
                desc: 'HTML (HyperText Markup Language) is the foundational language used to create and structure content on the web, defining elements like text, links, and images.'
            },
            {
                id: 3,
                icon: (
                    <LiaCss3 className='text-[1.75rem]'/>
                ),
                head: 'CSS',
                desc: 'CSS (Cascading Style Sheets) controls the layout and visual appearance of web pages, allowing you to style text, colors, spacing, and positioning.'
            }
        ]
    },
    {
        id: 2,
        unit: 'unit 2',
        bg: '#FFFFFF',
        heading: 'Introduction to JavaScript and Frameworks',
        desc: "In this unit, you'll delve into JavaScript, the backbone of web interactivity, and explore popular frameworks like React, Angular, and Bootstrap. You'll learn how these tools streamline web development, enabling dynamic content, seamless user interfaces, and responsive design. By the end of this unit, you'll have the skills to create interactive and modern web applications.",
        skills: [
            'JavaScript Basics',
            'React',
            'Angular',
            'Bootstrap'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <RiJavascriptLine className='text-[1.75rem]'/>
                ),
                head: 'JavaScript',
                desc: 'JavaScript is a powerful programming language that brings interactivity to web pages, allowing you to create dynamic content and handle user actions effectively.'
            },
            {
                id: 2,
                icon: (
                    <SiReact className='text-[1.75rem]'/>
                ),
                head: 'React',
                desc: 'React is a popular JavaScript library for building user interfaces, emphasizing reusable components and efficient rendering for modern web applications.'
            },
            {
                id: 3,
                icon: (
                    <PiAngularLogo className='text-[1.75rem]'/>
                ),
                head: 'Angular',
                desc: 'Angular is a robust framework for building dynamic single-page applications, offering powerful tools for dependency injection and data binding.'
            },
            {
                id: 4,
                icon: (
                    <TbBrandBootstrap className='text-[1.75rem]'/>
                ),
                head: 'Bootstrap',
                desc: 'Bootstrap is a front-end framework that simplifies responsive design and layout creation, offering pre-styled components and grid systems.'
            }
        ]
    },
    {
        id: 3,
        unit: 'unit 3',
        bg: '#C75C27',
        heading: 'Introduction to Backend Development',
        desc: "In this unit, you'll learn the essentials of backend development, focusing on building and managing databases, server-side logic, and APIs. You'll explore SQL for relational databases, Node.js for server-side programming, and MongoDB for NoSQL database management. This unit will provide you with the tools to create and manage the backend of web applications effectively.",
        skills: [
            'SQL',
            'Node.js',
            'MongoDB',
            'RESTful APIs'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaDatabase className='text-white text-[1.75rem]'/>
                ),
                head: 'SQL',
                desc: 'SQL (Structured Query Language) is used to manage and query relational databases, enabling efficient data storage and retrieval for web applications.'
            },
            {
                id: 2,
                icon: (
                    <FaServer className='text-white text-[1.75rem]'/>
                ),
                head: 'Node.js',
                desc: 'Node.js is a runtime environment that allows you to run JavaScript on the server, ideal for building scalable and high-performance web applications.'
            },
            {
                id: 3,
                icon: (
                    <FaLayerGroup className='text-white text-[1.75rem]'/>
                ),
                head: 'MongoDB',
                desc: 'MongoDB is a NoSQL database designed for flexibility and scalability, enabling developers to work with dynamic and unstructured data efficiently.'
            }
        ]
    },   
    {
        id: 4,
        unit: 'unit 4',
        bg: '#FFFFFF',
        heading: 'Deploying Web Applications',
        desc: "This unit covers the deployment process for web applications, teaching you how to bring your projects live to the web. You'll learn how to use platforms like Netlify for frontend hosting and AWS for scalable backend deployments. By the end of this unit, you’ll understand how to configure servers, set up domain names, and optimize your applications for production environments.",
        skills: [
            'Netlify',
            'AWS',
            'CI/CD Pipelines',
            'DNS Configuration'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <BiLogoNetlify className='text-[1.75rem]'/>
                ),
                head: 'Netlify',
                desc: 'Netlify simplifies frontend deployment, providing continuous integration, custom domains, and automated builds for modern web projects.'
            },
            {
                id: 2,
                icon: (
                    <FaAws className='text-[1.75rem]'/>
                ),
                head: 'AWS',
                desc: 'Amazon Web Services (AWS) offers a wide range of cloud services for deploying and scaling web applications, ensuring high performance and reliability.'
            }
        ]
    }         
]

// ux

export const curriculumUX = [
    {
        id: 1,
        unit: 'unit 1',
        bg: '#C75C27',
        heading: 'User Research and Understanding Needs',
        desc: "In this unit, you'll explore methods for understanding user needs through interviews, surveys, and usability testing. You'll learn techniques to gather actionable insights that guide the design process and ensure user-focused solutions.",
        skills: [
            'User Interviews',
            'Surveys',
            'Usability Testing',
            'Persona Development'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FiUserCheck className='text-[1.75rem]'/>
                ),
                head: 'User Research',
                desc: 'Discover how to conduct user interviews, create surveys, and gather insights to inform design decisions.'
            }
        ]
    },
    {
        id: 2,
        unit: 'unit 2',
        bg: '#FFFFFF',
        heading: 'Design Principles and Aesthetics',
        desc: "This unit focuses on essential design principles like color theory, typography, and layout. Learn how to create visually appealing interfaces that align with user expectations and accessibility standards.",
        skills: [
            'Color Theory',
            'Typography',
            'Grid Systems',
            'Accessibility'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FiLayout className='text-[1.75rem]'/>
                ),
                head: 'Design Principles',
                desc: 'Master the core principles of layout, typography, and color to craft aesthetically pleasing designs.'
            }
        ]
    },
    {
        id: 3,
        unit: 'unit 3',
        bg: '#C75C27',
        heading: 'Prototyping and Tools',
        desc: "Learn to build interactive prototypes using modern tools like Figma, Adobe XD, and Sketch. This unit covers creating wireframes, mockups, and prototypes to visualize and test design concepts.",
        skills: [
            'Wireframing',
            'Interactive Prototypes',
            'Figma',
            'Adobe XD'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FiPenTool className='text-[1.75rem]'/>
                ),
                head: 'Prototyping Tools',
                desc: 'Use industry-standard tools to create interactive designs and bring your ideas to life.'
            }
        ]
    },
    {
        id: 4,
        unit: 'unit 4',
        bg: '#FFFFFF',
        heading: 'Information Architecture',
        desc: "This unit delves into organizing and structuring content to enhance navigation and user experience. You'll learn about sitemaps, user flows, and how to design intuitive interfaces.",
        skills: [
            'Sitemaps',
            'User Flows',
            'Content Strategy',
            'Navigation Design'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FiMap className='text-[1.75rem]'/>
                ),
                head: 'Information Architecture',
                desc: 'Learn to organize content effectively for seamless user navigation and interaction.'
            }
        ]
    },
    {
        id: 5,
        unit: 'unit 5',
        bg: '#C75C27',
        heading: 'Usability Testing and Refinement',
        desc: "This unit covers testing your designs with users to gather feedback and refine your solutions. You'll learn how to conduct usability testing and iterate on your designs based on user needs.",
        skills: [
            'Usability Testing',
            'Feedback Analysis',
            'Iteration',
            'User-Centric Refinement'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FiCheckSquare className='text-[1.75rem]'/>
                ),
                head: 'Usability Testing',
                desc: 'Test your designs with users and refine them to meet their needs and expectations.'
            }
        ]
    },
    {
        id: 6,
        unit: 'unit 6',
        bg: '#FFFFFF',
        heading: 'Human-Centered Design',
        desc: "Discover the principles of human-centered design, focusing on solutions that prioritize user needs and preferences. This unit emphasizes empathy, inclusivity, and problem-solving.",
        skills: [
            'Empathy Mapping',
            'Inclusive Design',
            'Problem-Solving',
            'User Focus'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FiSmile className='text-[1.75rem]'/>
                ),
                head: 'Human-Centered Design',
                desc: 'Design solutions that prioritize user needs and ensure inclusivity in every step.'
            }
        ]
    },
    {
        id: 7,
        unit: 'unit 7',
        bg: '#C75C27',
        heading: 'Collaboration and Teamwork',
        desc: "This unit teaches you how to collaborate effectively with developers, product managers, and stakeholders. You'll gain skills to communicate your designs, gather feedback, and work in a team environment.",
        skills: [
            'Cross-Functional Teams',
            'Feedback Loops',
            'Stakeholder Communication',
            'Agile Workflows'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FiUsers className='text-[1.75rem]'/>
                ),
                head: 'Collaboration',
                desc: 'Work effectively with teams and stakeholders to bring your designs to life.'
            }
        ]
    }
];


// ds



export const curriculumDS = [
    {
        id: 1,
        unit: 'unit 1',
        bg: '#C75C27',
        heading: 'Data Analysis & Visualization',
        desc: "Analyze datasets and create compelling visualizations using tools like Excel, Tableau, and Power BI. You'll learn how to turn raw data into insights through visual storytelling.",
        skills: [
            'Data Analysis',
            'Data Visualization',
            'Excel',
            'Tableau',
            'Power BI'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaChartBar className='text-[1.75rem]'/>
                ),
                head: 'Data Visualization',
                desc: 'Use tools like Tableau and Power BI to create compelling visual representations of data.'
            }
        ]
    },
    {
        id: 2,
        unit: 'unit 2',
        bg: '#FFFFFF',
        heading: 'Programming for Data Science',
        desc: "Learn Python, R, and SQL to clean, analyze, and manipulate data. This unit focuses on the programming skills required to work with large datasets effectively.",
        skills: [
            'Python',
            'R',
            'SQL',
            'Data Cleaning',
            'Data Manipulation'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaCode className='text-[1.75rem]'/>
                ),
                head: 'Programming for Data Science',
                desc: 'Master Python, R, and SQL to analyze and manipulate data effectively.'
            }
        ]
    },
    {
        id: 3,
        unit: 'unit 3',
        bg: '#C75C27',
        heading: 'Statistics & Mathematics',
        desc: "Master statistical methods, probability, and linear algebra for data interpretation. This unit provides a mathematical foundation necessary for effective data analysis.",
        skills: [
            'Probability',
            'Statistics',
            'Linear Algebra',
            'Statistical Inference'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaCalculator className='text-[1.75rem]'/>
                ),
                head: 'Mathematical Foundations',
                desc: 'Build a strong foundation in statistics, probability, and linear algebra for data interpretation.'
            }
        ]
    },
    {
        id: 4,
        unit: 'unit 4',
        bg: '#FFFFFF',
        heading: 'Machine Learning',
        desc: "Build predictive models and algorithms using libraries like TensorFlow and Scikit-learn. This unit will guide you through the process of training models and making predictions based on data.",
        skills: [
            'Supervised Learning',
            'Unsupervised Learning',
            'TensorFlow',
            'Scikit-learn',
            'Model Evaluation'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaMicrochip className='text-[1.75rem]'/>
                ),
                head: 'Machine Learning',
                desc: 'Use TensorFlow and Scikit-learn to build machine learning models that predict outcomes based on data.'
            }
        ]
    },
    {
        id: 5,
        unit: 'unit 5',
        bg: '#C75C27',
        heading: 'Big Data Technologies',
        desc: "Explore tools like Hadoop and Spark for handling large-scale data. Learn how to process and analyze massive datasets that traditional tools cannot handle.",
        skills: [
            'Hadoop',
            'Spark',
            'Distributed Computing',
            'Data Storage and Processing'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaDatabase className='text-[1.75rem]'/>
                ),
                head: 'Big Data Tools',
                desc: 'Use Hadoop and Spark to process and analyze large-scale datasets efficiently.'
            }
        ]
    },
    {
        id: 6,
        unit: 'unit 6',
        bg: '#FFFFFF',
        heading: 'Data Ethics',
        desc: "Learn to manage and analyze data responsibly. This unit focuses on the ethical considerations of data collection, privacy, and the potential impact of data science on society.",
        skills: [
            'Data Privacy',
            'Ethical Data Management',
            'Bias and Fairness',
            'Transparency'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaLock className='text-[1.75rem]'/>
                ),
                head: 'Data Ethics',
                desc: 'Understand the ethical implications of data collection, privacy, and use in society.'
            }
        ]
    },
    {
        id: 7,
        unit: 'unit 7',
        bg: '#C75C27',
        heading: 'Real-World Applications',
        desc: "Apply data science techniques in industries like healthcare, finance, e-commerce, and more. This unit covers how to implement data-driven solutions in various fields to solve real-world problems.",
        skills: [
            'Healthcare',
            'Finance',
            'E-commerce',
            'Predictive Analytics'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaBriefcase className='text-[1.75rem]'/>
                ),
                head: 'Real-World Data Science',
                desc: 'Learn how data science is applied in various industries, including healthcare, finance, and e-commerce.'
            }
        ]
    }
];




// dm

export const curriculumDM = [
    {
        id: 1,
        unit: 'unit 1',
        bg: '#C75C27',
        heading: 'SEO Mastery',
        desc: "Optimize websites to rank higher on search engines and drive organic traffic. Learn how search engines work and how to use SEO techniques to improve website visibility.",
        skills: [
            'SEO',
            'Keyword Research',
            'On-Page SEO',
            'Off-Page SEO'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaSearch className='text-[1.75rem]' />
                ),
                head: 'SEO Techniques',
                desc: 'Master search engine optimization to boost organic traffic and improve search rankings.'
            }
        ]
    },
    {
        id: 2,
        unit: 'unit 2',
        bg: '#FFFFFF',
        heading: 'Social Media Marketing',
        desc: "Create and manage impactful campaigns on platforms like Instagram, Facebook, LinkedIn, and Twitter. Learn to craft engaging content and track performance across various platforms.",
        skills: [
            'Social Media Strategy',
            'Content Creation',
            'Platform Engagement',
            'Social Ads'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaShareAlt className='text-[1.75rem]' />
                ),
                head: 'Social Media Campaigns',
                desc: 'Leverage platforms like Instagram, Facebook, and Twitter to create impactful social media campaigns.'
            }
        ]
    },
    {
        id: 3,
        unit: 'unit 3',
        bg: '#C75C27',
        heading: 'Content Marketing',
        desc: "Develop compelling content strategies to engage and retain audiences. Learn how to create valuable content that resonates with your target audience and boosts brand visibility.",
        skills: [
            'Content Strategy',
            'Blogging',
            'Content Creation',
            'Content Promotion'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaFileAlt className='text-[1.75rem]' />
                ),
                head: 'Content Creation',
                desc: 'Learn how to create valuable and engaging content to build a connection with your audience.'
            }
        ]
    },
    {
        id: 4,
        unit: 'unit 4',
        bg: '#FFFFFF',
        heading: 'Pay-Per-Click Advertising (PPC)',
        desc: "Run effective paid campaigns on Google Ads and social platforms. Learn to craft paid advertisements that reach the right audience and maximize your ROI.",
        skills: [
            'Google Ads',
            'Facebook Ads',
            'Campaign Budgeting',
            'PPC Optimization'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaDollarSign className='text-[1.75rem]' />
                ),
                head: 'PPC Campaigns',
                desc: 'Master PPC advertising strategies on platforms like Google and Facebook to drive paid traffic.'
            }
        ]
    },
    {
        id: 5,
        unit: 'unit 5',
        bg: '#C75C27',
        heading: 'Email Marketing',
        desc: "Craft emails that convert and build long-term customer relationships. Learn email campaign strategies, from list segmentation to copywriting and analytics.",
        skills: [
            'Email Campaigns',
            'List Building',
            'Copywriting',
            'Email Analytics'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaEnvelope className='text-[1.75rem]' />
                ),
                head: 'Email Strategy',
                desc: 'Learn how to create and send targeted email campaigns to engage and convert subscribers.'
            }
        ]
    },
    {
        id: 6,
        unit: 'unit 6',
        bg: '#FFFFFF',
        heading: 'Analytics and Reporting',
        desc: "Use tools like Google Analytics to measure and optimize campaign performance. Learn how to track key metrics, analyze data, and generate actionable insights.",
        skills: [
            'Google Analytics',
            'Data Analysis',
            'Key Metrics',
            'Performance Optimization'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaChartBar className='text-[1.75rem]' />
                ),
                head: 'Data Analytics',
                desc: 'Use analytics tools to track and optimize marketing campaign performance.'
            }
        ]
    },
    {
        id: 7,
        unit: 'unit 7',
        bg: '#C75C27',
        heading: 'Digital Strategy Development',
        desc: "Build comprehensive plans to achieve marketing objectives. Learn to align business goals with digital marketing tactics, measuring success along the way.",
        skills: [
            'Digital Strategy',
            'Campaign Planning',
            'Goal Setting',
            'Performance Metrics'
        ],
        more: [
            {
                id: 1,
                icon: (
                    <FaClipboardList className='text-[1.75rem]' />
                ),
                head: 'Strategic Planning',
                desc: 'Develop a comprehensive digital marketing strategy to achieve your business goals.'
            }
        ]
    }
];







// Certificate FAQS

// web

export const webFaqs = [
    {
        id: 1,
        name: 'Who can take this course?',
        desc: 'Anyone interested in web development! Whether you’re a complete beginner, an experienced professional looking to enhance your skills, or an entrepreneur, this course is for you.'
    },
    {
        id: 2,
        name: 'Do I need prior coding experience?',
        desc: 'No prior coding experience is needed. Our courses are designed to guide you step-by-step, starting with the basics.'
    },
    {
        id: 3,
        name: 'How long does it take to complete the course?',
        desc: 'The duration depends on your chosen learning path. Self-paced courses typically take 8–12 weeks, while instructor-led classes have a set schedule.'
    },
    {
        id: 4,
        name: 'Will I receive a certificate upon completion?',
        desc: 'Yes, you’ll receive a professional certificate upon successfully completing the course, showcasing your expertise to employers or clients.'
    },
    {
        id: 5,
        name: 'Are there hands-on projects included?',
        desc: 'Absolutely! You’ll work on real-world projects to build a portfolio that demonstrates your skills and knowledge.'
    },
    {
        id: 6,
        name: 'What tools and software do I need for this course?',
        desc: 'All you need is a computer and a stable internet connection. We’ll guide you on how to set up free tools like text editors (e.g., Visual Studio Code) and version control systems (e.g., Git).'
    },
    {
        id: 7,
        name: 'Can I get help if I get stuck?',
        desc: 'Yes, our instructors and support team are available to assist you through our discussion forums, live Q&A sessions, and email support.'
    },
    {
        id: 8,
        name: 'How much does the course cost?',
        desc: 'Pricing details are available on our website. We also offer flexible payment plans and occasional discounts to make learning accessible.'
    },
    {
        id: 9,
        name: 'Is this course available online?',
        desc: 'Yes, the course is fully online, giving you the flexibility to learn at your own pace or join live interactive classes.'
    },
    {
        id: 10,
        name: 'How do I enroll?',
        desc: 'Click the "Get Started!" button on this page. Fill out the registration form, complete the payment, and you’re ready to start learning!'
    },
]

// ux

export const dsFaqs = [
    {
        id: 1,
        name: 'What is data science, and why is it important?',
        desc: 'Data science involves extracting insights from data using techniques from statistics, machine learning, and programming. It’s crucial for making data-driven decisions in business, healthcare, technology, and more.'
    },
    {
        id: 2,
        name: 'Do I need prior experience in programming or statistics?',
        desc: 'No prior experience is required. The course begins with foundational concepts and progresses to advanced topics, making it suitable for beginners.'
    },
    {
        id: 3,
        name: 'What tools and languages will I learn?',
        desc: 'You’ll learn Python, R, SQL, Tableau, and Big Data tools like Hadoop and Spark, among others.'
    },
    {
        id: 4,
        name: 'Are there hands-on projects included?',
        desc: 'Yes, you’ll work on real-world datasets and projects, such as building predictive models and data visualizations, to create a portfolio.'
    },
    {
        id: 5,
        name: 'How long does the course take to complete?',
        desc: 'The course typically takes 12–16 weeks, depending on the pace you choose.'
    },
    {
        id: 6,
        name: 'Is the course entirely online?',
        desc: 'Yes, all our data science courses are fully online, offering the flexibility to learn from anywhere.'
    },
    {
        id: 7,
        name: 'Will I earn a certificate after completing the course?',
        desc: 'Yes, you’ll receive a professional certificate upon successfully completing the course, showcasing your skills to potential employers.'
    },
    {
        id: 8,
        name: 'Can I interact with instructors and peers?',
        desc: 'Yes, our live sessions, discussion forums, and group projects provide opportunities to engage with instructors and fellow learners.'
    },
    {
        id: 9,
        name: 'How much does the course cost?',
        desc: 'Course fees vary based on your chosen program. Visit [your website link] for detailed pricing and available payment options.'
    },
    {
        id: 10,
        name: 'How do I enroll?',
        desc: 'Click the "Get Started!" button. Complete the registration form, make your payment, and start learning!'
    }
];


// dm

export const dmFaqs = [
    {
        id: 1,
        name: 'What is digital marketing, and why is it important?',
        desc: 'Digital marketing involves promoting products or services online using strategies like SEO, social media, email marketing, and PPC. It’s essential for reaching today’s tech-savvy consumers and driving business growth.'
    },
    {
        id: 2,
        name: 'Do I need any prior experience to enroll?',
        desc: 'No prior experience is required. Our courses are designed for beginners and advanced learners alike.'
    },
    {
        id: 3,
        name: 'What tools will I learn to use?',
        desc: 'You’ll gain hands-on experience with tools like Google Analytics, Google Ads, Facebook Business Manager, Canva, and email marketing platforms.'
    },
    {
        id: 4,
        name: 'Will I work on real-world projects?',
        desc: 'Yes, you’ll work on live campaigns and case studies to build practical skills and create a portfolio.'
    },
    {
        id: 5,
        name: 'How long does the course take?',
        desc: 'The course duration is typically 8–12 weeks, depending on the program and your learning pace.'
    },
    {
        id: 6,
        name: 'Is this course online or in-person?',
        desc: 'Our courses are 100% online, allowing you to learn from anywhere at your convenience.'
    },
    {
        id: 7,
        name: 'Will I receive a certificate upon completion?',
        desc: 'Yes, you’ll earn a professional certificate to validate your expertise and boost your career prospects.'
    },
    {
        id: 8,
        name: 'Can I interact with instructors?',
        desc: 'Yes, our live sessions and discussion forums allow you to ask questions and engage with instructors.'
    },
    {
        id: 9,
        name: 'What career opportunities can I expect after completing this course?',
        desc: 'You’ll be equipped for roles like SEO Specialist, Social Media Manager, Digital Marketing Manager, and more, or you can use your skills to grow your own business.'
    },
    {
        id: 10,
        name: 'How do I enroll?',
        desc: 'Click the "Enroll Now" button or visit [your website link]. Complete your registration, make your payment, and start learning!'
    }
];

