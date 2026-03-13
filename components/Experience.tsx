'use client';

const EXPERIENCES = [
  {
    company: "Intervision",
    role: "Full Stack Developer",
    period: "March 2025 - Present",
    bullets: [
      "Developed web interfaces using Spring Boot, JSP, Thymeleaf, Angular 2+, HTML5, CSS3, Bootstrap, integrating Spring MVC, Spring Data, and Spring Security for secure, scalable applications.",
      "Designed and implemented microservices architecture with RESTful APIs, supporting modular, maintainable backend services.",
      "Integrated Apache Kafka, ActiveMQ, and SQS for real-time messaging and streaming data pipelines; ingested data into HDFS for analytics.",
      "Built reusable frontend components using Angular/React, ensuring cross-browser and cross-device compatibility.",
      "Developed SOAP and RESTful web services, with Swagger/OpenAPI documentation for internal and external integrations.",
      "Implemented ORM with Hibernate/JPA to interact with Oracle, MySQL, and Postgres, ensuring transactional consistency.",
      "Applied design patterns (DTO, DAO, Singleton, Factory, Session Facade, Business Delegate) for clean architecture.",
      "Built unit and integration tests using JUnit, Mockito, Selenium, ensuring code quality and reliability.",
      "Monitored performance and logs using ELK Stack (Elasticsearch, Logstash, Kibana), Prometheus, Grafana, and Log4J.",
      "Managed CI/CD pipelines with Git, GitHub, Jenkins, Docker, and Kubernetes, enabling automated builds, testing, and deployments.",
      "Leveraged AWS (EC2, S3, Lambda, API Gateway), Azure, and GCP for cloud deployment and serverless computing.",
      "Implemented security and authentication using OAuth2.0 and JWT for APIs.",
      "Utilized JIRA for sprint planning, issue tracking, and bug management."
    ],
    tags: ["Angular 2+", "Spring Boot", "Kafka", "AWS", "Kubernetes"]
  },
  {
    company: "State of Nebraska",
    role: "Full Stack Developer",
    period: "Sep 2023 - Feb 2025",
    bullets: [
      "Maintained and enhanced the Billing Department application, enabling citizens to view billing history, process payments, download invoices, schedule transactions, and manage autopay configurations.",
      "Supported full-stack development across multiple billing modules, including payments, invoices, and transaction scheduling.",
      "Developed responsive UIs using Angular 15 and TypeScript, integrated NgRx for state management, and enforced secure form validation.",
      "Integrated front-end with Spring Boot REST APIs for real-time billing updates and payment processing.",
      "Migrated legacy Spring MVC monoliths to Spring Boot microservices, improving scalability and deployment efficiency.",
      "Implemented Spring Data JPA with Hibernate and Redis caching, improving response time by 40%.",
      "Applied JWT authentication and Spring Security for role-based access control and secure session handling.",
      "Leveraged Apache Kafka for asynchronous message streaming between distributed microservices.",
      "Integrated MongoDB for document storage and MySQL for transactional operations.",
      "Configured AWS SQS and Lambda for scheduled/recurring payments with fault-tolerant processing.",
      "Integrated SOAP web services to support legacy gift card payment flows.",
      "Managed CI/CD pipelines with Git, GitHub, Jenkins, Docker, and Kubernetes.",
      "Monitored application performance using ELK Stack, Prometheus, Grafana.",
      "Collaborated with cross-functional teams for requirements, design, and documentation."
    ],
    tags: ["Angular 15", "Redis", "MongoDB", "Spring Security"]
  },
  {
    company: "Tata Consultancy Services",
    role: "Full Stack Developer",
    period: "Oct 2021 - July 2023",
    bullets: [
      "Delivered key web modules for claims submission, policy management, and tracking, improving user efficiency and reducing claim processing time.",
      "Implemented robust backend logic in Core Java with OOP, collections, and multithreading, supporting high-volume claims processing.",
      "Developed and integrated RESTful APIs and third-party insurance services, enabling seamless policy validation and automated claim verification.",
      "Designed data persistence layers with Hibernate ORM and optimized SQL queries, stored procedures, and views.",
      "Built interactive dashboards and analytics charts using AngularJS, jQuery, and Highcharts.",
      "Implemented end-to-end validation, logging, and unit testing using AngularJS, Spring Validation, Log4J, and JUnit.",
      "Managed deployments on Apache Tomcat and Unix/Linux environments, integrating JMS/ActiveMQ for asynchronous communication.",
      "Collaborated with cross-functional teams to deliver a streamlined Insurance Claims Management System."
    ],
    tags: ["Core Java", "AngularJS", "Hibernate", "ActiveMQ"]
  },
  {
    company: "Optum, India",
    role: "Full Stack Developer",
    period: "Sep 2018 - Sep 2021",
    bullets: [
      "Developed backend modules using Java, Spring Boot, and Spring MVC to implement core business logic and service layer functionality.",
      "Built dynamic web pages using HTML5, CSS3, Bootstrap, JSP, and AngularJS to create user-friendly interfaces for hospital staff.",
      "Implemented Hibernate ORM to map Java objects to relational database tables and simplify database operations.",
      "Designed and integrated RESTful APIs to enable communication between frontend components and backend services.",
      "Wrote and optimized SQL queries to manage patient data, appointment schedules, and reporting modules.",
      "Assisted in implementing form validation and session management using J2EE technologies.",
      "Participated in Agile/Scrum development processes, attending sprint meetings and daily stand-ups.",
      "Used Git for version control to manage source code and collaborate with team members.",
      "Performed unit testing and debugging to identify and resolve issues, improving overall system stability."
    ],
    tags: ["Spring Boot", "JSP", "SQL", "Agile"]
  },
  {
    company: "InterScripts, India",
    role: "Associate Software Engineer",
    period: "Jan 2018 - Aug 2018",
    bullets: [
      "Assisted in designing and developing frontend interfaces using AngularJS, HTML5, CSS3, and Bootstrap.",
      "Built RESTful APIs with Spring Boot to handle CRUD operations for patient data, appointments, and billing information.",
      "Implemented data persistence using Hibernate/JPA with MySQL, ensuring secure storage of healthcare records.",
      "Applied basic form validations and error handling in both front-end and back-end to maintain data integrity.",
      "Learned and implemented role-based access control using Spring Security and JWT, ensuring sensitive patient data was protected.",
      "Participated in API testing using Postman and wrote simple unit tests with JUnit under mentor guidance.",
      "Gained hands-on exposure to Agile methodology, version control using Git, and collaborative software development practices.",
      "Assisted in generating basic reports on patient appointments, billing summaries, and treatment history for administrative use."
    ],
    tags: ["RESTful APIs", "MySQL", "JPA", "Postman"]
  }
];

export default function Experience() {
  return (
    <section className="min-h-screen bg-[#121212] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">Professional Experience</h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl">
            A comprehensive overview of my 8+ years architecting and engineering scalable software solutions.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {EXPERIENCES.map((job, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-white/10 pb-6">
                  <div>
                    <h3 className="text-3xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {job.company}
                    </h3>
                    <p className="text-lg font-medium text-blue-400 mt-1">{job.role}</p>
                  </div>
                  <span className="text-neutral-400 font-mono tracking-widest text-sm mt-4 md:mt-0 px-4 py-2 bg-black/30 rounded-full">
                    {job.period}
                  </span>
                </div>
                
                <ul className="space-y-3 pt-2">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-neutral-300 leading-relaxed flex items-start text-[15px]">
                      <span className="mr-4 mt-[10px] block w-1.5 h-1.5 bg-blue-500/50 rounded-full flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 mt-auto flex flex-wrap gap-2 border-t border-white/5">
                {job.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-black/50 border border-white/10 text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
