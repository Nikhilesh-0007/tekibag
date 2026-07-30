export const categories = [
  'All',
  'AI',
  'Development',
  'Data Science & Analytics',
  'Data Engineering',
  'Software Testing',
  'Cloud & DevOps',
  'Cyber Security',
  'SAP',
  'Others'
];

export const coursesList = [
  {
    title: 'Gen AI Developer',
    duration: '3 – 4 Months',
    level: 'Beginner to Intermediate',
    rating: '5.0',
    category: 'AI',
    tagColor: 'text-pink-500 bg-pink-500/10',
    subtitle: 'Master Generative AI Development — From Fundamentals to Production-Ready Applications',
    overview: 'The Gen AI Developer program is designed to equip learners with the practical, in-demand skills needed to build, deploy, and scale applications powered by Generative AI. As organizations across every industry adopt Large Language Models (LLMs), AI agents, and generative tools, the demand for skilled Gen AI Developers has never been higher.',
    whoShouldEnroll: [
      'Freshers / Students — CS, IT, or Engineering graduates looking to enter the AI job market.',
      'Working Professionals — Software developers, data analysts, and QA engineers looking to upskill.',
      'Entrepreneurs & Product Managers — Individuals wanting to build AI-powered products.',
      'Career Switchers — Professionals from non-tech backgrounds with basic programming knowledge.'
    ],
    prerequisites: 'Basic understanding of Python programming is recommended (a refresher module is included).',
    whyChoose: [
      'Industry-relevant curriculum aligned with hiring trends in Generative AI.',
      'Hands-on projects using OpenAI, LangChain, Hugging Face, and Vector Databases.',
      'Live doubt-solving sessions and mentor support.',
      'Resume building and interview preparation for AI/ML roles.'
    ],
    keySkills: ['Prompt Engineering', 'LLM Integration', 'LangChain', 'RAG Pipelines', 'Vector Databases', 'AI Agents', 'API Development', 'Model Fine-Tuning', 'Deployment & MLOps'],
    careerOutcomes: ['Generative AI Developer', 'AI/ML Engineer', 'LLM Application Developer', 'AI Product Engineer', 'Prompt Engineer', 'AI Automation Specialist'],
    curriculum: [
      {
        moduleName: 'Module 1: Foundations',
        topics: [
          'Introduction to Artificial Intelligence, Machine Learning & Deep Learning',
          'Python programming essentials for AI development',
          'Understanding Neural Networks and Transformers (conceptual overview)',
          'Introduction to Generative AI and its industry applications'
        ]
      },
      {
        moduleName: 'Module 2: Large Language Models (LLMs)',
        topics: [
          'How LLMs work: architecture, training, and inference basics',
          'Working with popular LLMs (GPT, Claude, Gemini, LLaMA)',
          'Prompt Engineering techniques and best practices',
          'Tokens, context windows, and cost optimization'
        ]
      },
      {
        moduleName: 'Module 3: Building with APIs & Frameworks',
        topics: [
          'Using OpenAI / Anthropic APIs for application development',
          'Introduction to LangChain and LlamaIndex',
          'Building chatbots, assistants, and automation tools',
          'Function calling and tool integration'
        ]
      },
      {
        moduleName: 'Module 4: Retrieval-Augmented Generation (RAG)',
        topics: [
          'Understanding embeddings and vector representations',
          'Working with Vector Databases (Pinecone, ChromaDB, FAISS)',
          'Building a RAG pipeline from scratch',
          'Document Q&A and knowledge-base chatbot projects'
        ]
      },
      {
        moduleName: 'Module 5: AI Agents & Automation',
        topics: [
          'Introduction to autonomous AI agents',
          'Multi-agent systems and orchestration',
          'Tool-using agents and workflow automation',
          'Real-world use cases: customer support bots, research assistants'
        ]
      },
      {
        moduleName: 'Module 6: Fine-Tuning & Model Customization',
        topics: [
          'When and how to fine-tune models',
          'Working with open-source models via Hugging Face',
          'Dataset preparation and evaluation techniques'
        ]
      },
      {
        moduleName: 'Module 7: Deployment & Production',
        topics: [
          'Deploying Gen AI applications (Streamlit, FastAPI, Docker basics)',
          'API integration and scalability considerations',
          'Monitoring, cost management, and responsible AI practices',
          'Security and data privacy in AI applications'
        ]
      },
      {
        moduleName: 'Module 8: Capstone Project',
        topics: [
          'End-to-end Gen AI application (AI assistant, document analyzer)',
          'Portfolio-ready project with deployment',
          'Code review and mentor feedback'
        ]
      }
    ]
  },
  {
    title: 'AI/ML Engineer',
    duration: '4 – 5 Months',
    level: 'Beginner to Intermediate',
    rating: '4.9',
    category: 'AI',
    tagColor: 'text-indigo-500 bg-indigo-500/10',
    subtitle: 'Become a Job-Ready AI/ML Engineer — From Core Concepts to Production Deployment',
    overview: 'The AI/ML Engineer program is built to give learners a strong, practical foundation in Artificial Intelligence and Machine Learning — covering everything from data handling and algorithms to model deployment in real-world systems. As AI adoption grows across industries, AI/ML Engineers are among the most sought-after professionals in tech.',
    whoShouldEnroll: [
      'Freshers / Students — CS, IT, Statistics, or Engineering graduates.',
      'Working Professionals — Software developers, data analysts, and IT professionals.',
      'Career Switchers — Individuals with basic programming knowledge looking for a structured path.',
      'Product & Tech Enthusiasts — Those wanting to understand how ML models are built.'
    ],
    prerequisites: 'Basic programming knowledge (Python preferred) and familiarity with high-school level mathematics are recommended.',
    whyChoose: [
      'Comprehensive curriculum covering ML theory, hands-on coding, and deployment.',
      'Real datasets and industry-style projects, not just toy examples.',
      'Live mentorship, doubt-solving sessions, and code reviews.',
      'Certificate of Completion recognized for professional portfolios.'
    ],
    keySkills: ['Python for ML', 'Data Preprocessing', 'Supervised & Unsupervised Learning', 'Deep Learning (CNN/RNN)', 'TensorFlow & PyTorch', 'Model Evaluation & Tuning', 'MLOps & Deployment', 'Git & Cloud Basics'],
    careerOutcomes: ['AI/ML Engineer', 'Machine Learning Developer', 'Data Scientist (Entry to Mid)', 'ML Ops Engineer', 'AI Application Engineer', 'Analytics Associate'],
    curriculum: [
      {
        moduleName: 'Module 1: Foundations of AI/ML',
        topics: [
          'Introduction to AI, ML & Deep Learning',
          'Python for Data Science (NumPy, Pandas, Matplotlib)',
          'Statistics & probability fundamentals for ML',
          'Understanding the ML project lifecycle'
        ]
      },
      {
        moduleName: 'Module 2: Data Handling & Preprocessing',
        topics: [
          'Data collection, cleaning, and wrangling',
          'Exploratory Data Analysis (EDA)',
          'Feature engineering and selection',
          'Handling missing data, outliers, and imbalanced datasets'
        ]
      },
      {
        moduleName: 'Module 3: Core Machine Learning',
        topics: [
          'Supervised Learning: Regression & Classification',
          'Unsupervised Learning: Clustering & Dimensionality Reduction',
          'Model evaluation metrics and cross-validation',
          'Hyperparameter tuning and optimization'
        ]
      },
      {
        moduleName: 'Module 4: Deep Learning',
        topics: [
          'Neural Network fundamentals',
          'Introduction to TensorFlow and PyTorch',
          'Convolutional Neural Networks (CNNs) for image data',
          'Recurrent Neural Networks (RNNs) and sequence modeling basics'
        ]
      },
      {
        moduleName: 'Module 5: Advanced Topics',
        topics: [
          'Introduction to Natural Language Processing (NLP)',
          'Introduction to Generative AI and LLMs',
          'Time series forecasting',
          'Recommendation systems basics'
        ]
      },
      {
        moduleName: 'Module 6: MLOps & Model Deployment',
        topics: [
          'Model packaging and versioning',
          'Deploying ML models with Flask/FastAPI',
          'Introduction to Docker and cloud deployment (AWS/GCP/Azure)',
          'Model monitoring, retraining, and CI/CD concepts'
        ]
      },
      {
        moduleName: 'Module 7: Tools & Industry Practices',
        topics: [
          'Git & version control for ML projects',
          'Working with Jupyter, Google Colab, and cloud notebooks',
          'Experiment tracking (MLflow overview)',
          'Responsible AI: bias, fairness, and ethics in ML'
        ]
      },
      {
        moduleName: 'Module 8: Capstone Project',
        topics: [
          'End-to-end ML project: from raw data to deployed model',
          'Portfolio-ready project with deployment',
          'Mentor code review and feedback'
        ]
      }
    ]
  },
  {
    title: 'Full Stack Python with AI Integration',
    duration: '4 – 5 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'Development',
    tagColor: 'text-blue-500 bg-blue-500/10',
    subtitle: 'Build Complete Web Applications and Power Them with AI — From Frontend to Backend to Intelligence',
    overview: 'The Full Stack Python with AI Integration program teaches you to design, build, and deploy complete web applications using Python — while also equipping you with the skills to embed AI and Generative AI capabilities directly into those applications. This is a rare and highly sought-after skill combination in today’s job market.',
    whoShouldEnroll: [
      'Freshers / Students — Graduates who want a complete, in-demand skill set.',
      'Working Professionals — Backend/Frontend developers wanting to add AI integration.',
      'Freelancers & Entrepreneurs — Individuals wanting to independently ship AI web products.',
      'Career Switchers — Professionals looking for a well-rounded development career.'
    ],
    prerequisites: 'Basic programming knowledge is helpful but not mandatory (Python fundamentals included).',
    whyChoose: [
      'End-to-end learning: Frontend + Backend + Database + AI Integration in one program.',
      'Real, deployable projects — not isolated exercises.',
      'Learn to integrate AI/LLM APIs into practical, everyday applications.',
      'Live mentorship, code reviews, and doubt-solving sessions.'
    ],
    keySkills: ['Python', 'Django/FastAPI', 'React Basics', 'REST APIs', 'SQL & NoSQL Databases', 'Git & GitHub', 'Prompt Engineering', 'AI/LLM API Integration', 'RAG Basics', 'Docker'],
    careerOutcomes: ['Full Stack Python Developer', 'AI-Integrated Web Developer', 'Backend Developer with AI Skills', 'Software Engineer (Full Stack)', 'Product Engineer'],
    curriculum: [
      {
        moduleName: 'Module 1: Python Foundations',
        topics: [
          'Python programming fundamentals (syntax, data structures, OOP)',
          'Working with files, APIs, and error handling',
          'Version control with Git & GitHub'
        ]
      },
      {
        moduleName: 'Module 2: Frontend Development',
        topics: [
          'HTML, CSS, and JavaScript essentials',
          'Responsive design fundamentals',
          'Introduction to modern React basics for dynamic UIs'
        ]
      },
      {
        moduleName: 'Module 3: Backend Development with Python',
        topics: [
          'Backend development using Django and/or FastAPI',
          'Building REST APIs',
          'Authentication, authorization, and session management',
          'Server-side application architecture'
        ]
      },
      {
        moduleName: 'Module 4: Databases',
        topics: [
          'Relational databases with SQL (PostgreSQL/MySQL)',
          'Working with ORMs (Django ORM / SQLAlchemy)',
          'Introduction to NoSQL databases (MongoDB basics)',
          'Database design and query optimization'
        ]
      },
      {
        moduleName: 'Module 5: Full Stack Integration',
        topics: [
          'Connecting frontend and backend applications',
          'Building complete CRUD applications',
          'API integration and data flow across the stack',
          'Deployment basics (Render, Railway, or cloud platforms)'
        ]
      },
      {
        moduleName: 'Module 6: AI Basics for Developers',
        topics: [
          'Introduction to AI and Machine Learning concepts',
          'Understanding LLMs and how they work',
          'Prompt engineering fundamentals',
          'Working with AI APIs (OpenAI, Anthropic) in Python'
        ]
      },
      {
        moduleName: 'Module 7: AI Integration into Web Applications',
        topics: [
          'Adding AI-powered features to apps (chatbots, smart search)',
          'Building Retrieval-Augmented Generation (RAG) features',
          'Using vector databases for AI search',
          'Handling API costs and streaming responses in production'
        ]
      },
      {
        moduleName: 'Module 8: Deployment & Best Practices',
        topics: [
          'Containerization basics with Docker',
          'Environment management and secrets handling',
          'CI/CD fundamentals',
          'Security, performance, and scalability'
        ]
      },
      {
        moduleName: 'Module 9: Capstone Project',
        topics: [
          'Build a complete AI-integrated full stack web application',
          'End-to-end deployment',
          'Mentor code review and portfolio finalization'
        ]
      }
    ]
  },
  {
    title: 'Full Stack Java with AI Integration',
    duration: '4 – 5 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'Development',
    tagColor: 'text-orange-500 bg-orange-500/10',
    subtitle: 'Build Enterprise-Grade Web Applications and Power Them with AI — From Frontend to Backend to Intelligence',
    overview: 'The Full Stack Java with AI Integration program teaches you to design, build, and deploy complete, enterprise-ready web applications using Java — while also equipping you with the skills to embed AI and Generative AI capabilities into those applications.',
    whoShouldEnroll: [
      'Freshers / Students — CS, IT, or Engineering graduates wanting enterprise skills.',
      'Working Professionals — Java developers who want to become full-stack AI engineers.',
      'Enterprise IT Professionals — Developers wanting to bring AI into corporate environments.',
      'Career Switchers — Professionals seeking a structured, high-demand path.'
    ],
    prerequisites: 'Basic programming knowledge is helpful but not mandatory (Java fundamentals included).',
    whyChoose: [
      'End-to-end learning: Frontend + Backend + Database + AI Integration in one program.',
      'Enterprise-standard tools and frameworks (Spring Boot, Hibernate).',
      'Learn to integrate AI/LLM APIs into Java enterprise applications.',
      'Live mentorship, code reviews, and resume preparation.'
    ],
    keySkills: ['Java', 'Spring Boot', 'Spring Security', 'React/Angular Basics', 'REST APIs', 'SQL & NoSQL Databases', 'Hibernate/JPA', 'Git & GitHub', 'Prompt Engineering', 'AI/LLM Integration', 'RAG Basics', 'Docker'],
    careerOutcomes: ['Full Stack Java Developer', 'AI-Integrated Java Developer', 'Backend Developer (Java) with AI Skills', 'Software Engineer (Full Stack)', 'Enterprise Application Developer'],
    curriculum: [
      {
        moduleName: 'Module 1: Java Foundations',
        topics: [
          'Java programming fundamentals (syntax, OOP, collections)',
          'Exception handling and file I/O',
          'Version control with Git & GitHub'
        ]
      },
      {
        moduleName: 'Module 2: Frontend Development',
        topics: [
          'HTML, CSS, and JavaScript essentials',
          'Responsive design fundamentals',
          'Introduction to modern frontend basics (React or Angular)'
        ]
      },
      {
        moduleName: 'Module 3: Backend Development with Java',
        topics: [
          'Backend development using Spring Boot',
          'Building REST APIs with Spring MVC',
          'Authentication & authorization (Spring Security, JWT)',
          'Server-side application architecture and design patterns'
        ]
      },
      {
        moduleName: 'Module 4: Databases',
        topics: [
          'Relational databases with SQL (MySQL/PostgreSQL)',
          'Working with ORMs (Hibernate/JPA)',
          'Introduction to NoSQL databases (MongoDB)',
          'Database design and query optimization'
        ]
      },
      {
        moduleName: 'Module 5: Full Stack Integration',
        topics: [
          'Connecting frontend and backend applications',
          'Building complete CRUD applications with Spring Boot',
          'API integration and data flow',
          'Deployment basics'
        ]
      },
      {
        moduleName: 'Module 6: AI Basics for Developers',
        topics: [
          'Introduction to AI and Machine Learning concepts',
          'Understanding LLMs and how they work',
          'Prompt engineering fundamentals',
          'Working with AI APIs from Java applications'
        ]
      },
      {
        moduleName: 'Module 7: AI Integration into Web Applications',
        topics: [
          'Adding AI features (chatbots, content generators, search)',
          'Building RAG features in Java',
          'Using vector databases for search',
          'Handling API costs and streaming in production'
        ]
      },
      {
        moduleName: 'Module 8: Deployment & Best Practices',
        topics: [
          'Containerization with Docker',
          'Environment management and secrets handling',
          'CI/CD fundamentals for full stack Java apps',
          'Security, performance, and scalability considerations'
        ]
      },
      {
        moduleName: 'Module 9: Capstone Project',
        topics: [
          'Build a complete AI-integrated full stack Java enterprise app',
          'End-to-end deployment',
          'Mentor code review and portfolio finalization'
        ]
      }
    ]
  },
  {
    title: 'Full Stack .NET with AI Integration',
    duration: '4 – 5 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'Development',
    tagColor: 'text-purple-500 bg-purple-500/10',
    subtitle: 'Build Enterprise-Grade Web Applications and Power Them with AI — From Frontend to Backend to Intelligence',
    overview: 'The Full Stack .NET with AI Integration program teaches you to design, build, and deploy complete, enterprise-ready web applications using Microsoft’s .NET ecosystem — while also equipping you with the skills to embed AI and Generative AI capabilities into those applications.',
    whoShouldEnroll: [
      'Freshers / Students — CS, IT, or Engineering graduates wanting .NET skills.',
      'Working Professionals — .NET/C# developers who want to become full-stack AI developers.',
      'Enterprise IT Professionals — Developers wanting to bring AI into Microsoft ecosystems.',
      'Career Switchers — Professionals seeking a high-demand enterprise development path.'
    ],
    prerequisites: 'Basic programming knowledge is helpful but not mandatory (C# fundamentals included).',
    whyChoose: [
      'End-to-end learning: C#, ASP.NET Core, EF Core, and React/Blazor.',
      'Microsoft enterprise-standard tools used by top corporations.',
      'Learn to integrate AI/LLM APIs (including Azure OpenAI) from C# code.',
      'Live mentorship, resume building, and interview preparation.'
    ],
    keySkills: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'React/Blazor Basics', 'REST APIs', 'SQL Server', 'NoSQL Basics', 'Git & GitHub', 'Prompt Engineering', 'AI/LLM API Integration (Azure OpenAI)', 'RAG Basics', 'Docker'],
    careerOutcomes: ['Full Stack .NET Developer', 'AI-Integrated .NET Developer', 'Backend Developer (C#) with AI Skills', 'Software Engineer (Full Stack)', 'Enterprise Developer'],
    curriculum: [
      {
        moduleName: 'Module 1: C# & .NET Foundations',
        topics: [
          'C# programming fundamentals (syntax, OOP, collections)',
          'Exception handling and file I/O',
          'Version control with Git & GitHub'
        ]
      },
      {
        moduleName: 'Module 2: Frontend Development',
        topics: [
          'HTML, CSS, and JavaScript essentials',
          'Responsive design fundamentals',
          'Introduction to modern React or Blazor for dynamic UIs'
        ]
      },
      {
        moduleName: 'Module 3: Backend Development with .NET',
        topics: [
          'Backend development using ASP.NET Core',
          'Building REST APIs with ASP.NET Core Web API',
          'Authentication & authorization (Identity, JWT)',
          'Server-side application architecture and design patterns'
        ]
      },
      {
        moduleName: 'Module 4: Databases',
        topics: [
          'Relational databases with SQL Server',
          'Working with Entity Framework Core (ORM)',
          'Introduction to NoSQL databases (MongoDB basics)',
          'Database design and query optimization'
        ]
      },
      {
        moduleName: 'Module 5: Full Stack Integration',
        topics: [
          'Connecting frontend and backend applications',
          'Building complete CRUD applications with ASP.NET Core',
          'API integration and data flow across the stack',
          'Deployment basics (IIS, cloud platforms)'
        ]
      },
      {
        moduleName: 'Module 6: AI Basics for Developers',
        topics: [
          'Introduction to AI and Machine Learning concepts',
          'Understanding LLMs and how they work',
          'Prompt engineering fundamentals',
          'Working with AI APIs (Azure OpenAI, OpenAI) from .NET'
        ]
      },
      {
        moduleName: 'Module 7: AI Integration into Web Applications',
        topics: [
          'Adding AI features (chatbots, content generation, search)',
          'Building Retrieval-Augmented Generation (RAG) features in .NET',
          'Using vector databases for search',
          'Handling API costs and streaming in production'
        ]
      },
      {
        moduleName: 'Module 8: Deployment & Best Practices',
        topics: [
          'Containerization basics with Docker',
          'Environment management and secrets handling',
          'CI/CD fundamentals (Azure DevOps)',
          'Security, performance, and scalability'
        ]
      },
      {
        moduleName: 'Module 9: Capstone Project',
        topics: [
          'Build a complete AI-integrated full stack .NET enterprise app',
          'End-to-end deployment',
          'Mentor code review and portfolio finalization'
        ]
      }
    ]
  },
  {
    title: 'Frontend Developer (React.js)',
    duration: '3 – 4 Months',
    level: 'Beginner to Intermediate',
    rating: '4.9',
    category: 'Development',
    tagColor: 'text-cyan-500 bg-cyan-500/10',
    subtitle: 'Build Modern, Responsive, and Interactive User Interfaces with React.js',
    overview: 'The Frontend Developer (React.js) program is designed to give learners a strong, practical foundation in modern frontend development using React.js — one of the most in-demand JavaScript libraries used by companies worldwide to build fast, scalable, and interactive user interfaces.',
    whoShouldEnroll: [
      'Freshers / Students — CS, IT, or Engineering graduates wanting a web dev career.',
      'Working Professionals — Backend developers, designers, or QA professionals wanting to move into frontend.',
      'Freelancers & Entrepreneurs — Individuals wanting to independently build modern web interfaces.',
      'Career Switchers — Professionals with basic web knowledge seeking a structured path.'
    ],
    prerequisites: 'Basic knowledge of HTML, CSS, and JavaScript is recommended (web fundamentals refresher included).',
    whyChoose: [
      'Industry-relevant curriculum aligned with current frontend hiring trends.',
      'Hands-on projects using modern React practices (Hooks, State Management).',
      'Live doubt-solving sessions and mentor support.',
      'Certificate of Completion recognized for professional portfolios.'
    ],
    keySkills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'React Hooks', 'React Router', 'State Management (Redux/Context)', 'REST API Integration', 'Tailwind CSS', 'Git & GitHub', 'Deployment'],
    careerOutcomes: ['Frontend Developer', 'React.js Developer', 'UI Developer', 'Web Developer', 'Junior Full Stack Developer'],
    curriculum: [
      {
        moduleName: 'Module 1: Web Development Foundations',
        topics: [
          'HTML5 and semantic markup',
          'CSS3, Flexbox, and Grid layouts',
          'Responsive web design principles',
          'JavaScript (ES6+) fundamentals: variables, functions, arrays, objects'
        ]
      },
      {
        moduleName: 'Module 2: Modern JavaScript for React',
        topics: [
          'Arrow functions, destructuring, spread/rest operators',
          'Promises, async/await, and fetch API',
          'Modules and JavaScript tooling basics (npm, package.json)'
        ]
      },
      {
        moduleName: 'Module 3: React Fundamentals',
        topics: [
          'Introduction to React and how it works (Virtual DOM, JSX)',
          'Components, props, and state',
          'Event handling and conditional rendering',
          'Lists, keys, and forms in React'
        ]
      },
      {
        moduleName: 'Module 4: React Hooks & State Management',
        topics: [
          'useState, useEffect, and other core hooks',
          'Custom hooks',
          'Context API for state sharing',
          'Introduction to state management libraries (Redux Toolkit or Zustand)'
        ]
      },
      {
        moduleName: 'Module 5: Routing & Application Structure',
        topics: [
          'Client-side routing with React Router',
          'Structuring multi-page React applications',
          'Protected routes and navigation guards',
          'Project architecture and folder structuring best practices'
        ]
      },
      {
        moduleName: 'Module 6: Working with APIs',
        topics: [
          'Consuming REST APIs in React',
          'Handling loading, error, and success states',
          'Working with third-party APIs',
          'Basics of connecting to backend/AI APIs for dynamic content'
        ]
      },
      {
        moduleName: 'Module 7: Styling & UI Libraries',
        topics: [
          'CSS-in-JS and utility-first CSS (Tailwind CSS)',
          'Component libraries (Material UI / Chakra UI overview)',
          'Building reusable, styled components',
          'Basics of responsive and accessible UI design'
        ]
      },
      {
        moduleName: 'Module 8: Performance, Testing & Deployment',
        topics: [
          'Code splitting and lazy loading',
          'Basics of testing React components (Jest, React Testing Library)',
          'Debugging and browser developer tools',
          'Building and deploying React apps (Vercel/Netlify)'
        ]
      },
      {
        moduleName: 'Module 9: Capstone Project',
        topics: [
          'Build a complete, deployed React application (e.g., e-commerce UI)',
          'API integration and responsive design implementation',
          'Mentor code review and portfolio finalization'
        ]
      }
    ]
  },
  {
    title: 'Backend Developer (Java/Spring Boot)',
    duration: '3 – 4 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'Development',
    tagColor: 'text-green-500 bg-green-500/10',
    subtitle: 'Build Secure, Scalable, and Enterprise-Grade Backend Systems with Java & Spring Boot',
    overview: 'The Backend Developer (Java/Spring Boot) program is designed to give learners a strong, practical foundation in backend engineering using Java and Spring Boot — the standard framework for enterprise-grade APIs, microservices, and server-side systems. The course covers Java from scratch to advanced microservices.',
    whoShouldEnroll: [
      'Freshers / Students — CS, IT, or Engineering graduates wanting server-side careers.',
      'Working Professionals — Frontend developers or QA professionals looking to move into backend.',
      'Enterprise IT Professionals — Developers working in corporate Java environments.',
      'Career Switchers — Professionals wanting a structured, high-demand backend path.'
    ],
    prerequisites: 'None. No prior programming experience is required — Java is taught from the basics through advanced concepts.',
    whyChoose: [
      'Java taught from scratch — no prior programming experience needed.',
      'Curriculum aligned with modern enterprise microservices hiring trends.',
      'Hands-on projects using Spring Boot, Hibernate, Spring Security, and Docker.',
      'Live doubt-solving sessions, resume reviews, and mentor support.'
    ],
    keySkills: ['Basic Java', 'Advance Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'REST API Design', 'Microservices', 'JUnit & Mockito', 'Docker', 'Git & GitHub'],
    careerOutcomes: ['Backend Developer', 'Java Developer', 'Spring Boot Developer', 'API Developer', 'Microservices Engineer'],
    curriculum: [
      {
        moduleName: 'Module 1: Basic Java',
        topics: [
          'Introduction to Java and JDK setting up',
          'Variables, control statements, loops, arrays',
          'Object-Oriented Programming (OOP) core concepts',
          'Interfaces, abstract classes, and access modifiers'
        ]
      },
      {
        moduleName: 'Module 2: Advance Java',
        topics: [
          'Exception handling and custom exceptions',
          'Collections framework (List, Set, Map)',
          'Generics, multithreading, and file I/O',
          'JDBC — database connectivity and CRUD operations',
          'Version control with Git & GitHub'
        ]
      },
      {
        moduleName: 'Module 3: Spring Framework Fundamentals',
        topics: [
          'Introduction to Spring and IoC/Dependency Injection',
          'Spring Beans and Auto-configuration',
          'Spring Boot project structure and starter dependencies'
        ]
      },
      {
        moduleName: 'Module 4: Building REST APIs',
        topics: [
          'Building REST APIs with Spring Web',
          'Controllers, Request Mappings, and DTOs',
          'Validation, exception handling, and API docs with Swagger'
        ]
      },
      {
        moduleName: 'Module 5: Database Integration',
        topics: [
          'Relational databases with SQL (MySQL/PostgreSQL)',
          'Spring Data JPA and Hibernate',
          'Repository pattern, relationships, and transactions'
        ]
      },
      {
        moduleName: 'Module 6: Security & Authentication',
        topics: [
          'Introduction to Spring Security',
          'JWT-based token authentication',
          'Role-based access control (RBAC)'
        ]
      },
      {
        moduleName: 'Module 7: Microservices Architecture',
        topics: [
          'Microservices concepts, Spring Cloud overview',
          'Service communication (Feign Client, REST Template)',
          'API Gateway and Service Discovery (Eureka)'
        ]
      },
      {
        moduleName: 'Module 8: Testing & Best Practices',
        topics: [
          'Unit testing with JUnit 5 and Mockito',
          'Integration testing for Spring Boot services',
          'Logging, monitoring, and clean code principles'
        ]
      },
      {
        moduleName: 'Module 9: Deployment & DevOps Basics',
        topics: [
          'Containerization with Docker',
          'Building executable JARs and deployment strategies',
          'CI/CD pipeline basics'
        ]
      },
      {
        moduleName: 'Module 10: Capstone Project',
        topics: [
          'Build and deploy a complete secure booking or e-commerce microservices API',
          'Database integration, JWT security, and API documentation',
          'Mentor code review'
        ]
      }
    ]
  },
  {
    title: 'Web Development',
    duration: '3 - 4 Months',
    level: 'Beginner to Intermediate',
    rating: '4.7',
    category: 'Development',
    tagColor: 'text-amber-500 bg-amber-500/10',
    subtitle: 'Master the Complete Web Development Journey — From HTML Basics to Full Stack, Deployable Websites',
    overview: 'The Web Development program is designed to take learners from the fundamentals of building web pages all the way to creating complete, functional, and deployable web applications. It covers frontend, backend, and database concepts in a structured, progressive format.',
    whoShouldEnroll: [
      'Freshers / Students — Anyone starting from scratch (including non-CS graduates).',
      'Working Professionals — IT support, QA, or junior developers wanting full-stack skills.',
      'Experienced Professionals (2–3+ years) — Domain experts looking to transition into developer roles.',
      'Freelancers & Entrepreneurs — Individuals wanting to independently build websites.'
    ],
    prerequisites: 'None for the foundational track. Fast-track assessments are available for experienced candidates.',
    whyChoose: [
      'Structured, progressive curriculum suitable for all levels.',
      'Covers frontend, backend, database, and hosting.',
      'Flexible pacing: fast-track fundamentals if you have experience.',
      'Portfolio-ready projects built throughout the course.'
    ],
    keySkills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js Basics', 'Node.js & Express.js', 'SQL & MongoDB', 'REST APIs', 'Git & GitHub', 'SEO & Security', 'Deployment'],
    careerOutcomes: ['Web Developer', 'Junior Full Stack Developer', 'Frontend Developer', 'Freelance Web Developer', 'Web App Developer'],
    curriculum: [
      {
        moduleName: 'Module 1: Web Fundamentals',
        topics: [
          'How the web works: browsers, servers, and HTTP/HTTPS basics',
          'HTML5 semantic markup, forms, and accessibility basics',
          'CSS3 Flexbox, Grid layouts, and responsive design'
        ]
      },
      {
        moduleName: 'Module 2: JavaScript Essentials',
        topics: [
          'JavaScript syntax, functions, and control flow',
          'DOM manipulation, event handling, and Fetch API',
          'Modern ES6+ features (promises, async/await)'
        ]
      },
      {
        moduleName: 'Module 3: Frontend Frameworks',
        topics: [
          'Introduction to React.js: components, props, state, and hooks',
          'React Router and client-side multi-page navigation',
          'Consuming REST APIs in React'
        ]
      },
      {
        moduleName: 'Module 4: Backend Development',
        topics: [
          'Node.js runtime environment',
          'Express.js web framework and server creation',
          'Routing, request handling, and middleware'
        ]
      },
      {
        moduleName: 'Module 5: Databases',
        topics: [
          'Relational (MySQL/PostgreSQL) and NoSQL (MongoDB) databases',
          'Connecting databases to Node.js applications',
          'Performing CRUD operations and data modeling'
        ]
      },
      {
        moduleName: 'Module 6: Full Stack Integration',
        topics: [
          'Connecting React frontend to Express backend',
          'Securing endpoints, CORS, and environment variables',
          'Git & GitHub collaboration workflow'
        ]
      },
      {
        moduleName: 'Module 7: Modern Practices & Tools',
        topics: [
          'AI-assisted development tools (CoPilot, Cursor)',
          'Integrating AI/LLM APIs for chatbots or content features',
          'SEO basics, metadata, and web performance optimization'
        ]
      },
      {
        moduleName: 'Module 8: Deployment',
        topics: [
          'Static and dynamic website hosting (Vercel, Netlify, Render)',
          'Domain and DNS settings, CI/CD fundamentals',
          'Monitoring and maintaining a live website'
        ]
      },
      {
        moduleName: 'Module 9: Capstone Project',
        topics: [
          'Design, build, and deploy an e-commerce, portfolio, or booking full stack web application',
          'Code review and portfolio optimization'
        ]
      }
    ]
  },
  {
    title: 'UI/UX Designer',
    duration: '3 Months',
    level: 'Beginner',
    rating: '4.8',
    category: 'Development',
    tagColor: 'text-rose-500 bg-rose-500/10',
    subtitle: 'Design Premium User Experiences and User Interfaces for Web & Mobile',
    overview: 'The UI/UX Designer program trains you in modern design methodologies, user research, wireframing, prototyping, and high-fidelity visual design. You will master design systems and tools like Figma to create stunning, accessible, and user-centric interfaces.',
    whoShouldEnroll: [
      'Aspiring Designers wanting to enter the tech space.',
      'Frontend Developers looking to improve visual UI design skills.',
      'Product Managers wanting to understand user journey mapping.'
    ],
    prerequisites: 'No prior design or technical background required.',
    whyChoose: [
      'Focus on Figma, design systems, and wireframing.',
      'Comprehensive portfolio creation with real-world case studies.',
      'Step-by-step guidance on user research and accessibility rules (WCAG).'
    ],
    keySkills: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Information Architecture', 'Design Systems', 'Typography & Grids', 'UI Styling'],
    careerOutcomes: ['UI Designer', 'UX Designer', 'Product Designer', 'Interaction Designer', 'UX Researcher'],
    curriculum: [
      {
        moduleName: 'Module 1: Intro to UX Design',
        topics: [
          'Design Thinking Process: Empathize, Define, Ideate, Prototype, Test',
          'Conducting user research, interviews, and creating personas',
          'User journey mapping and information architecture'
        ]
      },
      {
        moduleName: 'Module 2: Wireframing & Figma Basics',
        topics: [
          'Figma interface, tools, and canvas setup',
          'Low-fidelity wireframing on paper and digitally',
          'Grid systems, auto layout, and responsive resizing'
        ]
      },
      {
        moduleName: 'Module 3: UI Design Principles',
        topics: [
          'Typography hierarchy, font choices, and readability',
          'Color theory, contrast ratios, and HSL palettes',
          'Component creation, variants, and UI patterns'
        ]
      },
      {
        moduleName: 'Module 4: High-Fidelity Prototyping',
        topics: [
          'Interactive prototypes, page transitions, and smart animate',
          'Component states (hover, active, disabled) and interactive components',
          'User testing and feedback loops'
        ]
      },
      {
        moduleName: 'Module 5: Design Systems & Handoff',
        topics: [
          'Building reusable style guides and component libraries',
          'Figma developer mode and designer-to-developer handoff process',
          'Preparing assets and export configurations'
        ]
      },
      {
        moduleName: 'Module 6: Capstone Project & Portfolio',
        topics: [
          'Build a complete mobile app or web platform case study in Figma',
          'Create a portfolio on Behance, Dribbble, or custom site'
        ]
      }
    ]
  },
  {
    title: 'Data Science with Gen AI Integration',
    duration: '5 – 6 Months',
    level: 'Beginner to Intermediate',
    rating: '4.9',
    category: 'Data Science & Analytics',
    tagColor: 'text-indigo-500 bg-indigo-500/10',
    subtitle: 'Turn Data Into Insight and Intelligence — Combining Core Data Science with Generative AI',
    overview: 'The Data Science with Gen AI Integration program gives learners a complete, practical skill set spanning statistics, data analysis, machine learning, and modern Generative AI techniques. As organizations increasingly combine traditional data science workflows with LLM-powered tools for analysis, automation, and reporting, professionals who can do both are in exceptionally high demand.',
    whoShouldEnroll: [
      'Freshers / Students — Computer Science, Statistics, Mathematics, or Engineering graduates.',
      'Working Professionals — Data/business analysts, software developers, or reporting professionals.',
      'Experienced Professionals (2–3+ years) — Analysts or engineers wanting Gen AI data workflows.',
      'Career Switchers — Individuals with basic programming knowledge.'
    ],
    prerequisites: 'Basic Python knowledge is helpful but not mandatory (programming and math refresher included).',
    whyChoose: [
      'Complete curriculum covering statistics, ML, and Generative AI integration in one program.',
      'Real datasets and business-style problems, not just toy examples.',
      'Learn to use Gen AI tools to accelerate and enhance data science workflows.',
      'Live mentorship, doubt-solving sessions, and project reviews.'
    ],
    keySkills: ['Python for Data Science', 'SQL', 'Statistics & EDA', 'Machine Learning', 'Time Series & NLP Basics', 'Prompt Engineering', 'LLM API Integration', 'RAG Basics', 'Data Visualization (Power BI/Tableau)'],
    careerOutcomes: ['Data Scientist', 'Data Analyst (AI-focused)', 'AI/Data Science Associate', 'BI Analyst with AI Skills', 'Gen AI Data Analyst'],
    curriculum: [
      {
        moduleName: 'Module 1: Foundations',
        topics: [
          'Python for Data Science (NumPy, Pandas, Matplotlib, Seaborn)',
          'Statistics & probability fundamentals for data analysis',
          'SQL for data querying and analysis',
          'Understanding the data science project lifecycle'
        ]
      },
      {
        moduleName: 'Module 2: Data Wrangling & Exploratory Data Analysis',
        topics: [
          'Data collection, cleaning, and preprocessing',
          'Handling missing values, outliers, and inconsistent data',
          'Exploratory Data Analysis (EDA) and data visualization',
          'Feature engineering and feature selection'
        ]
      },
      {
        moduleName: 'Module 3: Machine Learning Fundamentals',
        topics: [
          'Supervised Learning: Regression & Classification',
          'Unsupervised Learning: Clustering & Dimensionality Reduction',
          'Model evaluation metrics and cross-validation',
          'Hyperparameter tuning basics'
        ]
      },
      {
        moduleName: 'Module 4: Advanced Analytics',
        topics: [
          'Time series analysis and forecasting',
          'Introduction to Deep Learning concepts (Neural Networks overview)',
          'Introduction to Natural Language Processing (NLP)',
          'A/B testing and experimentation basics'
        ]
      },
      {
        moduleName: 'Module 5: Introduction to Generative AI',
        topics: [
          'Understanding Large Language Models (LLMs) and how they work',
          'Prompt engineering fundamentals for data tasks',
          'Overview of leading Gen AI tools (GPT, Claude, Gemini)',
          'Ethical and responsible use of AI in data workflows'
        ]
      },
      {
        moduleName: 'Module 6: Gen AI Integration into Data Science Workflows',
        topics: [
          'Using LLM APIs (OpenAI, Anthropic) for data summarization and reporting',
          'AI-assisted data cleaning, labeling, and exploratory analysis',
          'Building RAG-based systems for querying structured/unstructured data',
          'Automating insights generation and natural-language data querying (chat-with-your-data)'
        ]
      },
      {
        moduleName: 'Module 7: Data Visualization & Storytelling',
        topics: [
          'Building dashboards (Power BI / Tableau overview)',
          'Effective data storytelling and presentation techniques',
          'Using AI to accelerate report generation and visualization',
          'Communicating insights to technical and non-technical stakeholders'
        ]
      },
      {
        moduleName: 'Module 8: Tools, Deployment & Best Practices',
        topics: [
          'Git & version control for data science projects',
          'Working with Jupyter, Google Colab, and cloud notebooks',
          'Deploying ML/AI models with simple APIs (Flask/FastAPI overview)',
          'Model monitoring, data privacy, and responsible AI practices'
        ]
      },
      {
        moduleName: 'Module 9: Capstone Project',
        topics: [
          'End-to-end data science project integrating a Gen AI component',
          'Portfolio-ready project with deployment',
          'Code review and feedback'
        ]
      }
    ]
  },
  {
    title: 'Data Analyst (Business & AI-Powered Analytics)',
    duration: '3 – 4 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'Data Science & Analytics',
    tagColor: 'text-emerald-500 bg-emerald-500/10',
    subtitle: 'Turn Raw Data Into Business Decisions — Master Data Analytics with Modern AI Tools',
    overview: 'The Data Analyst (Business & AI-Powered Analytics) program is designed to build a strong, practical foundation in data analytics — the skill of collecting, cleaning, analyzing, and visualizing data to help businesses make smarter decisions. Data Analyst roles remain among the highest-demand, most accessible entry points into the data and AI industry.',
    whoShouldEnroll: [
      'Freshers / Students — Graduates from any background (not just CS/IT) who want an accessible entry point.',
      'Working Professionals — Excel users, operations, finance, sales, or support professionals.',
      'Experienced Professionals (2–3+ years) — Domain experts wanting to combine industry knowledge with analytics.',
      'Career Switchers — Individuals seeking a practical career path without heavy coding.'
    ],
    prerequisites: 'None. Basic computer literacy and comfort with spreadsheets is helpful but all tools are taught from the basics.',
    whyChoose: [
      'Balanced mix of technical tools (SQL, Excel, Python, Power BI/Tableau) and business analytical thinking.',
      'Real business datasets and case studies, not just theory.',
      'Learn to use AI tools (ChatGPT, Claude) to speed up analysis and report generation.',
      'Live mentorship, resume reviews, and interview prep.'
    ],
    keySkills: ['Excel', 'SQL', 'Power BI / Tableau', 'Python Basics', 'EDA', 'Data Visualization', 'Storytelling', 'AI-Assisted Analytics'],
    careerOutcomes: ['Data Analyst', 'Business Intelligence Analyst', 'Data Visualization Specialist', 'Reporting Analyst', 'AI-Assisted Business Analyst'],
    curriculum: [
      {
        moduleName: 'Module 1: Excel for Business Analytics',
        topics: [
          'Advanced Excel formulas and data formatting',
          'Pivot tables, Pivot charts, and data dashboards',
          'Lookup functions (VLOOKUP, XLOOKUP) and logical operations',
          'Introduction to data automation and macros'
        ]
      },
      {
        moduleName: 'Module 2: SQL & Relational Databases',
        topics: [
          'Relational database concepts and SQL syntax',
          'Querying and filtering data, joins, and unions',
          'Data aggregations, groupings, and window functions',
          'Subqueries and database optimization for analysts'
        ]
      },
      {
        moduleName: 'Module 3: Data Visualization with Power BI & Tableau',
        topics: [
          'Connecting data sources and data modeling in Power BI / Tableau',
          'Building interactive dashboards and report layouts',
          'Writing DAX queries and calculating custom KPIs',
          'Data presentation and dashboard sharing best practices'
        ]
      },
      {
        moduleName: 'Module 4: Python for Data Analysis',
        topics: [
          'Python programming basics (variables, lists, conditions)',
          'Working with Pandas and NumPy for data manipulation',
          'Data cleaning and exploratory analysis with Python',
          'Data visualization using Matplotlib and Seaborn'
        ]
      },
      {
        moduleName: 'Module 5: Statistical Data Analysis & EDA',
        topics: [
          'Descriptive vs. inferential statistics, probability distributions',
          'Hypothesis testing, correlation vs. causation, A/B testing basics',
          'Exploratory Data Analysis (EDA) methodologies and cleaning outliers'
        ]
      },
      {
        moduleName: 'Module 6: AI-Powered Analytics & Business Intelligence',
        topics: [
          'Prompt engineering for data interpretation and Excel formulas',
          'Using AI to write and debug SQL queries and Python code',
          'AI-assisted storytelling: writing executive summaries and presentation outlines',
          'Ethics, privacy, and guidelines for AI analytics'
        ]
      },
      {
        moduleName: 'Module 7: Capstone Project',
        topics: [
          'End-to-end data analysis: from importing raw data to creating a Power BI dashboard',
          'AI-assisted executive report and presentation slide deck',
          'Code and dashboard review with industry mentors'
        ]
      }
    ]
  },
  {
    title: 'AWS Data Engineering',
    duration: '4 Months',
    level: 'Intermediate',
    rating: '4.8',
    category: 'Data Engineering',
    tagColor: 'text-orange-500 bg-orange-500/10',
    subtitle: 'Design, Build, and Manage Scalable Data Pipelines on Amazon Web Services (AWS)',
    overview: 'The AWS Data Engineering program teaches you how to collect, transform, and store huge volumes of data using AWS cloud services. You will learn how to build enterprise-grade data lakes, ETL pipelines, and data warehouses.',
    whoShouldEnroll: [
      'Software developers or database administrators wanting to move into data engineering.',
      'Data analysts wanting to build scalable pipelines on cloud infrastructure.'
    ],
    prerequisites: 'Basic knowledge of SQL and Python is recommended.',
    whyChoose: [
      'In-depth training on AWS services: Glue, Redshift, EMR, Athena, S3, and Lambda.',
      'Focus on modern ETL design patterns, security, and schema modeling.',
      'Hands-on building of real-world serverless data pipelines.'
    ],
    keySkills: ['AWS S3', 'AWS Glue', 'AWS Redshift', 'Athena & EMR', 'AWS Lambda', 'Python ETL', 'PySpark', 'Data Warehousing', 'Data Lakes'],
    careerOutcomes: ['AWS Data Engineer', 'Data Engineer', 'Big Data Developer', 'Cloud Database Engineer', 'Analytics Engineer'],
    curriculum: [
      {
        moduleName: 'Module 1: Data Engineering & AWS Intro',
        topics: [
          'Data Engineering lifecycle: Ingestion, Storage, Processing, Analysis',
          'AWS IAM, Security, S3 core concepts and folder structures',
          'Database storage formats: CSV, JSON, Parquet, and ORC'
        ]
      },
      {
        moduleName: 'Module 2: Ingestion & Storage Solutions',
        topics: [
          'AWS Kinesis for real-time streaming data ingestion',
          'AWS RDS (SQL) and DynamoDB (NoSQL) database ingestion',
          'AWS DMS (Database Migration Service) for database replication'
        ]
      },
      {
        moduleName: 'Module 3: Data Transformation (ETL)',
        topics: [
          'AWS Glue Catalog, Crawlers, and Jobs',
          'Writing Spark/PySpark scripts for data cleaning',
          'Serverless processing with AWS Lambda and Step Functions'
        ]
      },
      {
        moduleName: 'Module 4: Data Warehousing & Querying',
        topics: [
          'Redshift architecture, schema design, and load operations',
          'Interactive serverless querying using AWS Athena',
          'Introduction to EMR for distributed Hadoop/Spark clusters'
        ]
      },
      {
        moduleName: 'Module 5: Pipeline Orchestration & Monitoring',
        topics: [
          'Orchestrating workflows using Apache Airflow (MWAA)',
          'Monitoring AWS Glue and Lambda logs in CloudWatch',
          'Security, data encryption (KMS), and VPC network fundamentals'
        ]
      },
      {
        moduleName: 'Module 6: Capstone Project',
        topics: [
          'Build an end-to-end serverless ETL pipeline on AWS ingestion to Redshift',
          'Athena dashboard integration and performance tuning'
        ]
      }
    ]
  },
  {
    title: 'Azure Data Engineering',
    duration: '4 Months',
    level: 'Intermediate',
    rating: '4.8',
    category: 'Data Engineering',
    tagColor: 'text-sky-500 bg-sky-500/10',
    subtitle: 'Design, Build, and Manage Scalable Data Pipelines on Microsoft Azure',
    overview: 'The Azure Data Engineering program equips you to design and build enterprise data solutions using Microsoft Azure services. You will learn to ingestion, process, transform, and store data at scale for analytics and BI.',
    whoShouldEnroll: [
      'IT professionals, developers, or database administrators transition to cloud data engineering.',
      'Professionals aiming for Microsoft Certified: Azure Data Engineer Associate (DP-203).'
    ],
    prerequisites: 'Basic knowledge of SQL and Python is recommended.',
    whyChoose: [
      'Comprehensive coverage of Azure Data Factory, Databricks, Synapse Analytics, and ADLS.',
      'Preparation support for the Microsoft DP-203 certification exam.',
      'Practical, deployable projects implementing Medallion architecture.'
    ],
    keySkills: ['Azure Data Factory', 'Azure Databricks', 'Synapse Analytics', 'Azure Data Lake (ADLS)', 'Spark & PySpark', 'Medallion Architecture', 'Azure SQL'],
    careerOutcomes: ['Azure Data Engineer', 'Data Platform Engineer', 'BI Developer', 'Cloud Data Architect'],
    curriculum: [
      {
        moduleName: 'Module 1: Azure Storage & ADLS Gen2',
        topics: [
          'Azure subscription, resource groups, and storage accounts',
          'Azure Data Lake Storage Gen2 folder hierarchy and ACL security',
          'File formats: CSV, JSON, Parquet, Delta Lake'
        ]
      },
      {
        moduleName: 'Module 2: Data Ingestion with Azure Data Factory',
        topics: [
          'ADF Architecture: Integration Runtimes, Linked Services, Datasets',
          'Copy Activity, Mapping Data Flows, and parameters',
          'Orchestration, triggers (event-based/schedule), and alerting'
        ]
      },
      {
        moduleName: 'Module 3: Data Processing with Azure Databricks',
        topics: [
          'Databricks workspace, clusters, and notebooks',
          'Writing PySpark data cleaning code',
          'Implementing Medallion Architecture (Bronze, Silver, Gold layers)',
          'Delta Lake features: ACID transactions and Time Travel'
        ]
      },
      {
        moduleName: 'Module 4: Enterprise Analytics with Azure Synapse',
        topics: [
          'Synapse Workspace, Serverless SQL pools, Dedicated SQL pools',
          'Loading huge datasets (PolyBase / COPY statement)',
          'Data warehousing modeling, schemas, and distribution keys'
        ]
      },
      {
        moduleName: 'Module 5: Security & Monitoring',
        topics: [
          'Azure Key Vault for secret management',
          'Monitoring ADF runs and Databricks clusters using Azure Monitor',
          'Role-based access control (RBAC) and data governance'
        ]
      },
      {
        moduleName: 'Module 6: Capstone Project',
        topics: [
          'Build an end-to-end Medallion pipeline using ADF, Databricks, Synapse, and Power BI',
          'Code review and DP-203 exam prep'
        ]
      }
    ]
  },
  {
    title: 'Selenium with Python',
    duration: '3 Months',
    level: 'Beginner to Intermediate',
    rating: '4.7',
    category: 'Software Testing',
    tagColor: 'text-yellow-600 bg-yellow-500/10',
    subtitle: 'Automate Web Application Testing using Selenium WebDriver and Python',
    overview: 'The Selenium with Python program is designed to take you from manual testing to advanced test automation. You will learn to write clean, reusable, and robust test scripts, design modular frameworks, and execute them in CI/CD pipelines.',
    whoShouldEnroll: [
      'Manual QA Engineers wanting to transition to Test Automation.',
      'Freshers wishing to enter the software testing job market.',
      'Developers wishing to write automated checks for their apps.'
    ],
    prerequisites: 'No prior coding experience required; a comprehensive Python programming module is included.',
    whyChoose: [
      'Combines Python programming and Selenium WebDriver.',
      'Focuses on Page Object Model (POM) and PyTest framework.',
      'Hands-on building of framework components: reporting, logging, and screenshots.'
    ],
    keySkills: ['Python Basics', 'Selenium WebDriver', 'PyTest Framework', 'Page Object Model', 'XPath & CSS Locators', 'Test Automation Frameworks', 'Jenkins CI/CD', 'Git'],
    careerOutcomes: ['Automation Test Engineer', 'QA Automation Engineer', 'SDET (Software Development Engineer in Test)', 'QA Engineer'],
    curriculum: [
      {
        moduleName: 'Module 1: Python Programming for QA',
        topics: [
          'Python installation, syntax, variables, and data types',
          'Control flow: loops, conditional blocks, functions',
          'Object-Oriented Programming (OOP) concepts for automation design'
        ]
      },
      {
        moduleName: 'Module 2: Selenium Web Driver Core',
        topics: [
          'Selenium architecture and browser driver setup',
          'Locating web elements using ID, Name, XPath, CSS selectors',
          'Interacting with buttons, inputs, dropdowns, alerts, frames',
          'Handling synchronization: Implicit, Explicit, and Fluent Waits'
        ]
      },
      {
        moduleName: 'Module 3: PyTest Framework & Reporting',
        topics: [
          'Introduction to PyTest, assertions, and test annotations',
          'PyTest Fixtures for setup and teardown',
          'Generating HTML reports and attaching screenshots on failure',
          'Data-driven testing using Excel or JSON files'
        ]
      },
      {
        moduleName: 'Module 4: Advanced Automation Design',
        topics: [
          'Page Object Model (POM) architectural pattern',
          'Handling dynamic tables, dropdown menus, and mouse hovers',
          'JavaScript Executor commands and screenshot captures'
        ]
      },
      {
        moduleName: 'Module 5: Git & CI/CD Integration',
        topics: [
          'Storing test code in Git & GitHub',
          'Integrating tests with Jenkins / GitHub Actions',
          'Running tests in headless mode'
        ]
      },
      {
        moduleName: 'Module 6: Capstone Project',
        topics: [
          'Build a modular Page Object Model automation framework from scratch for an e-commerce application',
          'Review of logs, reports, and code structure with mentor'
        ]
      }
    ]
  },
  {
    title: 'Selenium with Java',
    duration: '3 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'Software Testing',
    tagColor: 'text-orange-500 bg-orange-500/10',
    subtitle: 'Automate Web Application Testing using Selenium WebDriver, Java, and TestNG',
    overview: 'The Selenium with Java program is a industry-standard test automation course. It covers core Java, Selenium WebDriver, and professional framework building with TestNG, Maven, and Page Object Model.',
    whoShouldEnroll: [
      'Manual QA professionals wanting to transition to Java automation.',
      'CS/IT freshers looking for a job-ready SDET pathway.'
    ],
    prerequisites: 'No prior programming experience required; Java programming basics are covered from scratch.',
    whyChoose: [
      'Covers Java programming from the absolute basics.',
      'Comprehensive training on TestNG, Maven, Extent Reports, and Page Object Model.',
      'Practical framework-building projects matching top industry QA practices.'
    ],
    keySkills: ['Core Java', 'Selenium WebDriver', 'TestNG Framework', 'Maven Build Tool', 'Page Object Model', 'Log4j Logging', 'Extent Reports', 'Git & Jenkins'],
    careerOutcomes: ['QA Automation Engineer', 'SDET (Java)', 'Automation Engineer', 'Test Lead'],
    curriculum: [
      {
        moduleName: 'Module 1: Java Programming for Automation',
        topics: [
          'Java basics, JDK setup, Eclipse/IntelliJ configuration',
          'OOP Principles: Classes, Objects, Inheritance, Polymorphism, Encapsulation',
          'Java Collections (List, Set, Map), Exception handling'
        ]
      },
      {
        moduleName: 'Module 2: Selenium WebDriver Basics',
        topics: [
          'WebDriver interface, browser drivers setup',
          'Locating strategies: XPath, CSS Selectors, relative locators',
          'Implicit and Explicit waits for dynamic elements',
          'Interacting with checkboxes, radios, drop-downs, and pop-ups'
        ]
      },
      {
        moduleName: 'Module 3: TestNG Testing Framework',
        topics: [
          'TestNG annotations, XML suite file execution, parameterization',
          'Parallel execution of tests, groups, and assertions',
          'Generating TestNG and Extent Reports'
        ]
      },
      {
        moduleName: 'Module 4: Maven & Framework Architecture',
        topics: [
          'Maven dependencies and pom.xml configuration',
          'Building Page Object Model (POM) framework structure',
          'Data-driven testing with Apache POI (Excel integration)',
          'Adding Log4j logging to framework execution'
        ]
      },
      {
        moduleName: 'Module 5: Git & Jenkins CI/CD',
        topics: [
          'Git commands, repository branching, GitHub uploads',
          'Setting up a Jenkins job to run Maven test builds',
          'Running tests in headless browsers'
        ]
      },
      {
        moduleName: 'Module 6: Capstone Project',
        topics: [
          'Build an enterprise-grade Page Object Model test suite with Apache POI, Log4j, and Extent Reports',
          'Execute tests via Maven command line and Jenkins'
        ]
      }
    ]
  },
  {
    title: 'Playwright Automation Testing',
    duration: '3 Months',
    level: 'Intermediate',
    rating: '4.9',
    category: 'Software Testing',
    tagColor: 'text-green-500 bg-green-500/10',
    subtitle: 'Modern Web Test Automation using Microsoft Playwright and JavaScript/TypeScript',
    overview: 'The Playwright Automation Testing program trains QA engineers in modern web automation. Playwright is a fast, reliable, and powerful test automation library by Microsoft that is rapidly replacing older frameworks.',
    whoShouldEnroll: [
      'QA Engineers wishing to transition from Selenium to Playwright.',
      'Frontend developers wanting to write end-to-end UI tests.'
    ],
    prerequisites: 'Basic JavaScript/TypeScript knowledge is helpful but not mandatory (programming module is included).',
    whyChoose: [
      'Master Playwright: auto-waiting, tracing, network interception.',
      'API testing combined with UI end-to-end automation.',
      'Modern, highly efficient test suite structures.'
    ],
    keySkills: ['Playwright Test', 'JavaScript / TypeScript', 'E2E Testing', 'API Testing', 'Page Object Model', 'CI/CD Pipelines', 'Trace Viewer', 'Headless Testing'],
    careerOutcomes: ['Automation QA Engineer', 'SDET', 'E2E Test Specialist', 'Quality Assurance Engineer'],
    curriculum: [
      {
        moduleName: 'Module 1: JavaScript/TypeScript for Automation',
        topics: [
          'JS essentials: variables, arrays, objects, functions',
          'Async programming: callbacks, Promises, async/await',
          'TypeScript types and compiling configurations'
        ]
      },
      {
        moduleName: 'Module 2: Playwright Basics',
        topics: [
          'Installing Playwright, browser engines setup',
          'Page object, browser context, and locators',
          'Auto-waiting mechanisms, assertions, and inputs handling'
        ]
      },
      {
        moduleName: 'Module 3: Advanced UI Operations',
        topics: [
          'Handling nested frames, shadow DOM, dynamic dialogs',
          'File uploads and downloads automation',
          'Capturing screenshots, videos, and utilizing Playwright Trace Viewer'
        ]
      },
      {
        moduleName: 'Module 4: API Testing with Playwright',
        topics: [
          'Sending GET, POST, PUT, DELETE API requests',
          'Asserting API status codes and JSON payloads',
          'Combining API and UI test steps (session storage reuse)'
        ]
      },
      {
        moduleName: 'Module 5: Framework Design & CI/CD',
        topics: [
          'Page Object Model design in TypeScript',
          'Test runner configurations, environment variables',
          'Integrating tests with GitHub Actions, HTML report generation'
        ]
      },
      {
        moduleName: 'Module 6: Capstone Project',
        topics: [
          'Build a hybrid API-UI automation framework using Playwright, TypeScript, and GitHub Actions',
          'Trace viewer analysis and code review'
        ]
      }
    ]
  },
  {
    title: 'DevOps with Multi-Cloud',
    duration: '4 Months',
    level: 'Advanced',
    rating: '4.9',
    category: 'Cloud & DevOps',
    tagColor: 'text-purple-500 bg-purple-500/10',
    subtitle: 'Automate Deployments and Manage Infrastructure on AWS & Azure using Modern DevOps Tools',
    overview: 'The DevOps with Multi-Cloud program trains you to be a modern DevOps Engineer capable of building CI/CD pipelines, containerizing applications, and orchestrating cloud resources on both AWS and Azure.',
    whoShouldEnroll: [
      'System Administrators and IT professionals wishing to upskill.',
      'Developers wishing to take control of their app deployments.'
    ],
    prerequisites: 'Basic knowledge of Linux commands and coding is helpful but not mandatory.',
    whyChoose: [
      'Dual cloud focus: AWS & Microsoft Azure implementation.',
      'Hands-on with Terraform, Docker, Kubernetes, Ansible, and Jenkins.',
      'Focus on industry-standard GitOps and CI/CD pipelines.'
    ],
    keySkills: ['Linux & Bash', 'Terraform (IaC)', 'Docker Containerization', 'Kubernetes Orchestration', 'CI/CD (Jenkins, GitHub Actions)', 'Ansible Configuration', 'AWS & Azure DevOps'],
    careerOutcomes: ['DevOps Engineer', 'Cloud Infrastructure Engineer', 'SRE (Site Reliability Engineer)', 'Platform Engineer'],
    curriculum: [
      {
        moduleName: 'Module 1: Linux & Git Essentials',
        topics: [
          'Linux administration, bash scripting, file permissions, ssh keys',
          'Git workflows, branch protection, pull requests, merges'
        ]
      },
      {
        moduleName: 'Module 2: Containerization with Docker',
        topics: [
          'Docker architecture, writing Dockerfiles, image building',
          'Docker compose, networking, volumes, multi-stage builds',
          'Docker registries: AWS ECR and Azure Container Registry'
        ]
      },
      {
        moduleName: 'Module 3: Container Orchestration with Kubernetes',
        topics: [
          'Kubernetes architecture, Pods, Deployments, Services, ConfigMaps',
          'Setting up managed Kubernetes: AWS EKS and Azure AKS',
          'Helm charts, ingress controllers, storage provisioning'
        ]
      },
      {
        moduleName: 'Module 4: Infrastructure as Code (IaC)',
        topics: [
          'Terraform providers, variables, state management',
          'Writing Terraform modules for AWS and Azure resource creation',
          'Configuration management with Ansible playbooks'
        ]
      },
      {
        moduleName: 'Module 5: CI/CD Pipelines & Monitoring',
        topics: [
          'Jenkins setup, declarative pipelines, agents configuration',
          'GitHub Actions workflow automation',
          'Monitoring with Prometheus, Grafana, and ELK Stack'
        ]
      },
      {
        moduleName: 'Module 6: Capstone Project',
        topics: [
          'Deploy a multi-tier microservices application onto a Kubernetes cluster provisioned via Terraform, with complete CI/CD automation',
          'Presentation and architect review'
        ]
      }
    ]
  },
  {
    title: 'Cloud Engineer (AWS & Azure)',
    duration: '3 - 4 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'Cloud & DevOps',
    tagColor: 'text-orange-500 bg-orange-500/10',
    subtitle: 'Deploy, Secure, and Manage Infrastructure on the Two Top Cloud Platforms',
    overview: 'The Cloud Engineer program is designed to take you from cloud basics to architectural planning. You will master deploying virtual machines, configuring virtual networks, setting up identity systems, and monitoring billing.',
    whoShouldEnroll: [
      'IT support technicians, system administrators looking to cloud transition.',
      'Graduates wishing to enter the cloud infrastructure job market.'
    ],
    prerequisites: 'Basic computer networking and OS concepts are recommended.',
    whyChoose: [
      'Covers both AWS and Microsoft Azure platforms.',
      'Practical labs modeling real enterprise migration scenarios.',
      'Prepares you for AWS Solutions Architect & Azure Administrator exams.'
    ],
    keySkills: ['AWS EC2 & S3', 'Azure VMs', 'VPC & Azure VNet', 'IAM & Entra ID', 'Load Balancing', 'Cloud Security', 'Monitoring & Billing'],
    careerOutcomes: ['Cloud Engineer', 'Cloud System Administrator', 'Infrastructure Engineer', 'Cloud Consultant'],
    curriculum: [
      {
        moduleName: 'Module 1: Cloud & Network Fundamentals',
        topics: [
          'Cloud computing deployment models: IaaS, PaaS, SaaS',
          'Networking: IPv4 subnets, DNS, routers, VPN basics'
        ]
      },
      {
        moduleName: 'Module 2: Compute & Storage (AWS & Azure)',
        topics: [
          'Deploying AWS EC2 instances and Azure Virtual Machines',
          'Configuring storage: AWS S3/EBS and Azure Blob/File storage',
          'Creating machine images and configuring auto-scaling'
        ]
      },
      {
        moduleName: 'Module 3: Virtual Networks & Routing',
        topics: [
          'Configuring AWS VPC: subnets, internet gateways, route tables',
          'Configuring Azure VNet: peering, Network Security Groups (NSGs)',
          'Setting up Load Balancers (ALB / Azure Application Gateway)'
        ]
      },
      {
        moduleName: 'Module 4: Security & Identity Management',
        topics: [
          'AWS IAM: users, groups, roles, and JSON policies',
          'Azure Active Directory (Microsoft Entra ID) user and app registration',
          'Multi-Factor Authentication (MFA) and Single Sign-On (SSO)'
        ]
      },
      {
        moduleName: 'Module 5: Database Services & Billing',
        topics: [
          'Managed databases: AWS RDS and Azure SQL Database',
          'Monitoring costs: AWS Budgets and Azure Cost Management',
          'CloudWatch and Azure Monitor configuration'
        ]
      },
      {
        moduleName: 'Module 6: Capstone Project',
        topics: [
          'Design and implement a highly available, load-balanced web application architecture spanning databases and storage on AWS/Azure',
          'Architectural documentation review'
        ]
      }
    ]
  },
  {
    title: 'Cybersecurity Engineer',
    duration: '4 Months',
    level: 'Intermediate',
    rating: '4.8',
    category: 'Cyber Security',
    tagColor: 'text-emerald-500 bg-emerald-500/10',
    subtitle: 'Secure Networks, Applications, and Operating Systems from Cyber Threats',
    overview: 'The Cybersecurity Engineer program focuses on security architecture, threat vulnerability assessment, penetration testing, cryptography, and implementing defensive security controls to protect digital assets.',
    whoShouldEnroll: [
      'Network administrators or IT support professionals wishing to pivot to cybersecurity.',
      'CS/IT graduates looking for a structured, hands-on path to security roles.'
    ],
    prerequisites: 'Basic understanding of OS (Windows/Linux) and network protocols (TCP/IP) is required.',
    whyChoose: [
      'Covers both defensive and offensive security principles.',
      'Hands-on labs with Wireshark, Metasploit, Nmap, and Kali Linux.',
      'Prepares you for CompTIA Security+ and CEH certification styles.'
    ],
    keySkills: ['Network Security', 'Penetration Testing', 'Cryptography', 'Vulnerability Assessment', 'Firewalls & VPNs', 'Kali Linux', 'Wireshark', 'OS Hardening'],
    careerOutcomes: ['Cybersecurity Engineer', 'Security Consultant', 'Vulnerability Analyst', 'Network Security Engineer'],
    curriculum: [
      {
        moduleName: 'Module 1: Security & Networking Refresher',
        topics: [
          'Confidentiality, Integrity, Availability (CIA triad) principles',
          'Deep dive into TCP/IP, OSI model, ports, protocols, packets',
          'Configuring firewalls, IDS/IPS, and Secure Shell (SSH) connections'
        ]
      },
      {
        moduleName: 'Module 2: Penetration Testing (Offensive Security)',
        topics: [
          'Information gathering and footprinting using Nmap, Shodan',
          'Exploiting vulnerabilities with Metasploit framework',
          'OWASP Top 10 web application vulnerabilities (SQL Injection, XSS)'
        ]
      },
      {
        moduleName: 'Module 3: Cryptography & Identity',
        topics: [
          'Symmetric vs. Asymmetric encryption algorithms (AES, RSA)',
          'Hashing algorithms (SHA-256) and digital signatures',
          'Public Key Infrastructure (PKI) and SSL/TLS certificates'
        ]
      },
      {
        moduleName: 'Module 4: Endpoint Security & Hardening',
        topics: [
          'Hardening Windows and Linux operating systems',
          'Endpoint Detection & Response (EDR) basics, antivirus setup',
          'Access control lists (ACLs) and group policy controls'
        ]
      },
      {
        moduleName: 'Module 5: Capstone Project',
        topics: [
          'Perform a vulnerability assessment and penetration test on a mock company environment, document the findings, and propose security remediation controls',
          'Report submission and review'
        ]
      }
    ]
  },
  {
    title: 'Cyber Security SOC',
    duration: '3 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'Cyber Security',
    tagColor: 'text-red-500 bg-red-500/10',
    subtitle: 'Train as a Security Operations Center (SOC) Analyst — Monitor, Detect, and Respond to Cyber Incidents',
    overview: 'The Cyber Security SOC program prepares you for a role as a SOC Analyst. You will learn to use SIEM tools, analyze logs, detect network intrusions, investigate alerts, and execute incident response procedures.',
    whoShouldEnroll: [
      'Career switchers wanting an accessible entry-level role in cybersecurity.',
      'IT support staff wishing to join a security operations team.'
    ],
    prerequisites: 'Basic computer literacy is required (networking fundamentals included).',
    whyChoose: [
      'Hands-on with Splunk, Wireshark, Snort, and incident logging tools.',
      'Focused training on security incident monitoring and triage workflows.',
      'Prepares you to work inside a security operations team.'
    ],
    keySkills: ['SIEM (Splunk)', 'Log Analysis', 'Incident Triage', 'Network Monitoring', 'Wireshark Packet Analysis', 'Phishing Analysis', 'Incident Response Playbooks'],
    careerOutcomes: ['SOC Analyst (L1/L2)', 'Security Monitor', 'Incident Responder', 'Threat Analyst'],
    curriculum: [
      {
        moduleName: 'Module 1: SOC Operations & Logging',
        topics: [
          'Role of a SOC Analyst inside an enterprise security team',
          'Log types: Windows Event Logs, Syslog, Web Server logs, Firewall logs',
          'Introduction to SIEM (Security Information and Event Management)'
        ]
      },
      {
        moduleName: 'Module 2: SIEM Monitoring using Splunk',
        topics: [
          'Splunk Search Processing Language (SPL) fundamentals',
          'Creating dashboards and search queries to detect anomalies',
          'Correlating events to trace attack patterns'
        ]
      },
      {
        moduleName: 'Module 3: Traffic & Email Investigation',
        topics: [
          'Analyzing pcap network files using Wireshark',
          'Detecting malicious packet traffic (port scans, beaconing)',
          'Investigating suspicious emails and phishing header analyses'
        ]
      },
      {
        moduleName: 'Module 4: Incident Response & Playbooks',
        topics: [
          'SANS Incident Response process: Preparation, Identification, Containment, Eradication, Recovery',
          'Following playbooks for malware alerts and unauthorized access',
          'Documenting incidents in ticketing systems'
        ]
      },
      {
        moduleName: 'Module 5: Capstone Project',
        topics: [
          'Investigate and document a multi-stage cyber attack scenario using Splunk and Wireshark logs. Present a full SOC incident report.',
          'Review of the investigation report'
        ]
      }
    ]
  },
  {
    title: 'SAP FICO',
    duration: '4 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'SAP',
    tagColor: 'text-blue-500 bg-blue-500/10',
    subtitle: 'SAP Financial Accounting (FI) and Controlling (CO) Consultant Training',
    overview: 'The SAP FICO program trains you in configuring and managing financial modules in the SAP system. Learn general ledger accounting, accounts payable/receivable, asset management, and cost controlling processes.',
    whoShouldEnroll: [
      'Finance and accounting graduates (B.Com, M.Com, MBA Finance).',
      'Finance professionals wanting to move into SAP consulting.'
    ],
    prerequisites: 'Basic knowledge of accounting concepts is recommended.',
    whyChoose: [
      'Includes access to SAP practice servers for hands-on labs.',
      'Covers both configuration and transaction-level tasks.',
      'Taught by certified SAP FICO consultant trainers.'
    ],
    keySkills: ['General Ledger (GL)', 'Accounts Payable (AP)', 'Accounts Receivable (AR)', 'Asset Accounting', 'Cost Center Accounting', 'Internal Orders', 'Profitability Analysis (CO-PA)', 'SAP ERP Navigation'],
    careerOutcomes: ['SAP FICO Consultant', 'SAP Finance Consultant', 'SAP Analyst', 'Finance Executive (SAP User)'],
    curriculum: [
      {
        moduleName: 'Module 1: General Ledger Accounting',
        topics: [
          'SAP Navigation, Enterprise Structure creation',
          'Fiscal year variants, chart of accounts configuration',
          'GL master record creation, posting documents, and reversals'
        ]
      },
      {
        moduleName: 'Module 2: Accounts Payable & Receivable',
        topics: [
          'Vendor and customer master data setup',
          'Invoice posting, partial and full payment transactions',
          'Dunning (payment reminders) configuration, automatic payments'
        ]
      },
      {
        moduleName: 'Module 3: Asset Accounting',
        topics: [
          'Chart of depreciation configuration, asset classes',
          'Asset acquisition, retirement, and transfer transactions',
          'Depreciation run execution and GL posting'
        ]
      },
      {
        moduleName: 'Module 4: SAP Controlling (CO)',
        topics: [
          'Controlling area activation and cost element accounting',
          'Cost centers creation, budget planning, and allocations',
          'Profit centers setup and internal orders tracking'
        ]
      },
      {
        moduleName: 'Module 5: Capstone Project',
        topics: [
          'Configure a complete SAP FICO enterprise model including financial accounting structures and cost-controlling processes from scratch on the SAP server',
          'Live system walkthrough and review'
        ]
      }
    ]
  },
  {
    title: 'SAP ABAP',
    duration: '4 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'SAP',
    tagColor: 'text-cyan-500 bg-cyan-500/10',
    subtitle: 'SAP Advanced Business Application Programming (ABAP) Developer Training',
    overview: 'The SAP ABAP program trains you in SAP’s core programming language. You will learn to write reports, customize database tables, build user interfaces, and integrate systems inside SAP ERP applications.',
    whoShouldEnroll: [
      'CS/IT graduates wishing to start a developer career in SAP.',
      'IT professionals wanting to upskill in enterprise development.'
    ],
    prerequisites: 'Basic programming concepts is recommended.',
    whyChoose: [
      'Includes access to SAP development environment and servers.',
      'Comprehensive coverage of ABAP dictionary, reporting, forms, and BAPIs.',
      'Prepared for standard SAP developer interviews.'
    ],
    keySkills: ['ABAP Dictionary', 'Internal Tables', 'Open SQL', 'Interactive Reporting', 'ALV Grid Reports', 'Module Pool Programming', 'BAPIs & RFCs', 'Debugging SAP Code'],
    careerOutcomes: ['SAP ABAP Developer', 'SAP Technical Consultant', 'SAP Programmer', 'ABAP Engineer'],
    curriculum: [
      {
        moduleName: 'Module 1: ABAP Dictionary & Basic Coding',
        topics: [
          'SAP ABAP architecture, workbench tools navigation',
          'Creating database tables, data elements, domains',
          'ABAP syntax, variables, conditional statements, control loops'
        ]
      },
      {
        moduleName: 'Module 2: Internal Tables & Database Access',
        topics: [
          'Working with internal tables and work areas',
          'Writing Open SQL queries to fetch data from SAP database tables',
          'Modularization: Subroutines and Function Modules'
        ]
      },
      {
        moduleName: 'Module 3: Reports & ALV Grid',
        topics: [
          'Classical and Interactive Reporting designs',
          'Creating advanced reports using ALV Grid controls',
          'Designing Selection Screens with inputs and checkboxes'
        ]
      },
      {
        moduleName: 'Module 4: Screens & Enhancements',
        topics: [
          'Module Pool programming, screen painter, menu painter',
          'Forms: designing SmartForms or Adobe Forms layouts',
          'Enhancements: User Exits, BAdIs, and introduction to BAPIs'
        ]
      },
      {
        moduleName: 'Module 5: Capstone Project',
        topics: [
          'Develop custom database tables, entry screens, and an ALV grid report matching customer invoice patterns inside the SAP server environment',
          'Technical code review and review'
        ]
      }
    ]
  },
  {
    title: 'Digital Marketing',
    duration: '3 Months',
    level: 'Beginner',
    rating: '4.7',
    category: 'Others',
    tagColor: 'text-amber-500 bg-amber-500/10',
    subtitle: 'Grow Brands and Sell Online — Master SEO, SEM, SMM, and Email Marketing',
    overview: 'The Digital Marketing program is designed to train you in online campaigns. You will learn to optimize websites for Google search, execute paid ads, manage social media communities, and analyze traffic.',
    whoShouldEnroll: [
      'Entrepreneurs wishing to market their own businesses.',
      'Graduates from any stream wanting a creative digital career.',
      'Traditional marketing professionals transition to online marketing.'
    ],
    prerequisites: 'Basic computer literacy and social media familiarity are required.',
    whyChoose: [
      'Covers Google Ads, Meta Ads, SEO, and Google Analytics.',
      'Practical training launching live mock campaigns.',
      'Resume reviews and preparation for Google Ads certifications.'
    ],
    keySkills: ['SEO (On-Page/Off-Page)', 'Google Ads (SEM)', 'Meta Ads (SMM)', 'Google Analytics (GA4)', 'Content Marketing', 'Email Marketing', 'Copywriting'],
    careerOutcomes: ['Digital Marketing Specialist', 'SEO Executive', 'Social Media Manager', 'PPC Analyst', 'Content Marketer'],
    curriculum: [
      {
        moduleName: 'Module 1: SEO (Search Engine Optimization)',
        topics: [
          'Keyword research, competitor analysis tools',
          'On-page SEO: headings, alt text, meta titles/descriptions',
          'Off-page SEO: backlink building and local business listings'
        ]
      },
      {
        moduleName: 'Module 2: SEM (Search Engine Marketing) - Google Ads',
        topics: [
          'Google Search, Display, and Video campaign settings',
          'Bid strategies, budgeting, ad groups, and writing ad copy',
          'Conversion tracking setup and analysis'
        ]
      },
      {
        moduleName: 'Module 3: SMM (Social Media Marketing) - Meta Ads',
        topics: [
          'Creating business pages, organic community strategies',
          'Targeting audiences based on demographics and behaviors',
          'Running Meta Ad campaigns on Facebook and Instagram'
        ]
      },
      {
        moduleName: 'Module 4: Email & Analytics',
        topics: [
          'Email marketing campaigns using Mailchimp',
          'Tracking visitor traffic and behavior with Google Analytics 4 (GA4)',
          'Creating marketing campaign reports and tracking ROI'
        ]
      },
      {
        moduleName: 'Module 5: Capstone Project',
        topics: [
          'Develop and present a comprehensive 3-month digital marketing strategy, containing keyword reports, ad mockups, and target budgets, for a brand',
          'Mentor feedback and strategy session'
        ]
      }
    ]
  },
  {
    title: 'ServiceNow (Admin & Developer)',
    duration: '3 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'Others',
    tagColor: 'text-indigo-500 bg-indigo-500/10',
    subtitle: 'Master ServiceNow Administration and Custom Development',
    overview: 'The ServiceNow program equips you to configure, manage, and build custom workflows inside the ServiceNow enterprise cloud platform. It prepares you for both Administrator and Developer roles.',
    whoShouldEnroll: [
      'IT support professionals wanting to move to enterprise platforms.',
      'Developers wishing to build custom apps in the ServiceNow ecosystem.'
    ],
    prerequisites: 'Basic knowledge of JavaScript is recommended.',
    whyChoose: [
      'Preparation support for ServiceNow Certified System Administrator (CSA) exam.',
      'Hands-on labs in your personal developer instance (PDI).',
      'Covers ServiceNow scripting (Client Scripts, Business Rules).'
    ],
    keySkills: ['ServiceNow CSA', 'Client Scripting', 'Business Rules', 'Service Catalog', 'Workflows / Flow Designer', 'UI Policies & Actions', 'Data Imports & Update Sets'],
    careerOutcomes: ['ServiceNow Administrator', 'ServiceNow Developer', 'ITIL Process Consultant', 'ServiceNow Analyst'],
    curriculum: [
      {
        moduleName: 'Module 1: ServiceNow Administration',
        topics: [
          'Platform User Interface, navigation, tables, and fields',
          'User administration: creating users, groups, and assigning roles',
          'Creating and configuring lists, forms, and UI policies'
        ]
      },
      {
        moduleName: 'Module 2: Service Catalog & Flow Designer',
        topics: [
          'Designing Service Catalog items, record producers, variables',
          'Building automation workflows using Flow Designer',
          'Configuring SLA definitions and email notifications'
        ]
      },
      {
        moduleName: 'Module 3: Data Management & Update Sets',
        topics: [
          'Importing data using Import Sets and Transform Maps',
          'Creating and managing Update Sets to track system changes',
          'Core IT Service Management (ITSM) modules: Incident, Problem, Change'
        ]
      },
      {
        moduleName: 'Module 4: ServiceNow Development (Scripting)',
        topics: [
          'Client-side scripting: Client Scripts and UI Policies',
          'Server-side scripting: Business Rules and Script Includes',
          'Using GlideRecord API to query and modify database records'
        ]
      },
      {
        moduleName: 'Module 5: Capstone Project',
        topics: [
          'Design and configure a custom IT Service Portal widget and ticket lifecycle workflow in a personal developer instance (PDI)',
          'System demo and code review'
        ]
      }
    ]
  },
  {
    title: 'Salesforce (Admin & Developer)',
    duration: '3 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'Others',
    tagColor: 'text-sky-500 bg-sky-500/10',
    subtitle: 'Master Salesforce Administration, Configuration, and Apex Programming',
    overview: 'The Salesforce program trains you in customizing the world’s leading CRM platform. Learn configuration (objects, security, flows) and development (Apex, Lightning Web Components).',
    whoShouldEnroll: [
      'Aspiring Salesforce professionals wanting to get certified.',
      'Developers wishing to build enterprise cloud applications.'
    ],
    prerequisites: 'No coding experience needed for Admin modules; basic programming logic is recommended for Developer modules.',
    whyChoose: [
      'Prepares you for Salesforce Admin (ADM-201) and Platform Developer I (PDI) certifications.',
      'Practical training using Salesforce Developer Org sandboxes.',
      'Step-by-step guidance building custom objects, Apex triggers, and LWC UI.'
    ],
    keySkills: ['Salesforce Admin', 'Custom Objects & Fields', 'Lightning Flows', 'Apex Programming', 'Apex Triggers', 'SOQL / SOSL', 'Lightning Web Components (LWC)', 'Data Security'],
    careerOutcomes: ['Salesforce Administrator', 'Salesforce Developer', 'Salesforce Consultant', 'CRM Analyst'],
    curriculum: [
      {
        moduleName: 'Module 1: Salesforce Administration & Security',
        topics: [
          'Salesforce Architecture, setting up custom objects, fields, and relationships',
          'Data security model: Profiles, Roles, Permission Sets, Sharing Settings',
          'Page layouts, validation rules, and record types configuration'
        ]
      },
      {
        moduleName: 'Module 2: Automation with Lightning Flows',
        topics: [
          'Building screen flows, record-triggered flows, scheduled flows',
          'Configuring approval processes and email alerts',
          'Data import/export using Data Import Wizard and Data Loader'
        ]
      },
      {
        moduleName: 'Module 3: Apex Programming Core',
        topics: [
          'Apex syntax, variables, lists, maps, loops',
          'Writing database queries using SOQL and SOSL',
          'Creating Apex Classes, Methods, and Exception Handlers'
        ]
      },
      {
        moduleName: 'Module 4: Apex Triggers & Testing',
        topics: [
          'Writing Apex Triggers for automation (Before/After events)',
          'Trigger handler frameworks, context variables',
          'Writing test classes and verifying code coverage rules'
        ]
      },
      {
        moduleName: 'Module 5: Lightning Web Components (LWC)',
        topics: [
          'LWC framework architecture: HTML, JS, XML files structure',
          'Rendering data from Salesforce in custom LWC interfaces',
          'Deploying components to Salesforce sandbox orgs'
        ]
      },
      {
        moduleName: 'Module 6: Capstone Project',
        topics: [
          'Build a custom Recruiting and Interview Management application containing custom objects, automation flows, Apex trigger rules, and LWC UI',
          'System demo and code review'
        ]
      }
    ]
  },
  {
    title: 'Power BI and SQL',
    duration: '3 Months',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    category: 'Others',
    tagColor: 'text-yellow-650 bg-yellow-500/10',
    subtitle: 'Master Enterprise Data Analytics, SQL Database Querying, and Power BI Dashboards',
    overview: 'The Power BI and SQL program trains you to be an enterprise reporting specialist. Learn to structure database queries using SQL, connect data inside Power BI, write DAX calculations, and build dynamic dashboards.',
    whoShouldEnroll: [
      'Aspiring data analysts, business analysts, reporting specialists.',
      'Excel users wanting to learn robust enterprise reporting systems.'
    ],
    prerequisites: 'No technical background required; all SQL syntax and Power BI operations are covered from scratch.',
    whyChoose: [
      'Strong dual focus on database querying (SQL) and visualization (Power BI).',
      'Covers advanced DAX modeling and Power Query data cleanups.',
      'Hands-on building of operational dashboard files.'
    ],
    keySkills: ['SQL Queries', 'Joins & Joins Types', 'Data Modeling', 'Power Query (M)', 'DAX Calculations', 'Power BI Visuals', 'KPI Dashboards', 'Database Relational Schemas'],
    careerOutcomes: ['Power BI Developer', 'Data Analyst', 'BI Analyst', 'Reporting Specialist', 'SQL Analyst'],
    curriculum: [
      {
        moduleName: 'Module 1: SQL Database Fundamentals',
        topics: [
          'Relational database architecture, schemas, primary/foreign keys',
          'SQL querying: SELECT, WHERE, ORDER BY, GROUP BY, HAVING',
          'Connecting database systems to external analytics applications'
        ]
      },
      {
        moduleName: 'Module 2: Advanced SQL Joins & Functions',
        topics: [
          'Mastering INNER, LEFT, RIGHT, FULL outer joins',
          'String, Date, Math functions, CASE statements',
          'Writing subqueries, Common Table Expressions (CTEs), views'
        ]
      },
      {
        moduleName: 'Module 3: Power BI Data Ingestion & Transformation',
        topics: [
          'Power BI desktop interface, connecting to SQL/Excel databases',
          'Using Power Query Editor: cleaning data, columns operations, types',
          'Relational data modeling, star schemas, snowflake schemas'
        ]
      },
      {
        moduleName: 'Module 4: DAX Formulas & Visualization',
        topics: [
          'Introduction to DAX (Data Analysis Expressions) syntax',
          'Writing calculated columns and measures (CALCULATE, RELATED, SUM)',
          'Building visuals: bar/line charts, tables, matrices, KPIs, slicers',
          'Designing dashboards and report page navigation'
        ]
      },
      {
        moduleName: 'Module 5: Capstone Project',
        topics: [
          'Ingest database logs from SQL, build relationships, perform DAX KPI calculations, and publish a complete multi-tab executive sales performance dashboard',
          'Report design review'
        ]
      }
    ]
  }
];
