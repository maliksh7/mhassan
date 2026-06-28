import DeepMAD from '../img/DeepMAD.png';
import sfa from '../img/Serverless-Flask-Application.png';
import accm from '../img/accm.png';
import ads from '../img/ads.png';
import techsphere from '../img/techsphere.png';
// import ProShop from '../img/project-proshop.png';

import whms from '../img/whms.png';

const projects = [
    {
    title: "Automated API Connectivity and Credential Monitoring System for Logistics Integration (ACCM)",
    domain: "Web Development",
    description:
      "Developed an automated system to monitor API connectivity and credentials for seamless logistics integration at Texas Instruments.",
    image: accm,
    link: "https://github.com/maliksh7/DeepMAD/",
  }, 
   {
    title: "DeepMAD",
    domain: "AI & ML",
    description:
      "Malicious Activity Detection System using Deep Learning (BERT). Classifies network activity as Malicious or Benign. Tools: Python, PyTorch, TensorFlow, Kaggle.",
    image: DeepMAD,
    link: "https://github.com/maliksh7/DeepMAD/",
  },

  {
    title: "Anomaly Detection System",
    domain: "AI & ML",
    description:
      "Detects irregular patterns in datasets using advanced ML models for anomaly and fraud detection.",
    image: ads,
    link: "https://github.com/maliksh7/Anomaly-Detection-System",
  },
  {
    title: "TechSphere E-Commerce Store",
    domain: "Web Development",
    description:
      "This is a ecommerce website for electronic products, developed by saad, this project is developed in Java 17, Spring Boot 21, React, AWS, Spring Data JPA and Hibernate, Spring AI and stripe.",
    image: techsphere,
    link: "https://github.com/maliksh7/techsphere",
  },
  {
    title: "Serverless Flask Application",
    domain: "Cloud & DevOps",
    description:
      "Flask app containerized with Docker and deployed via AWS ECS + Fargate, focusing on scalability and CI/CD best practices.",
    image: sfa,
    link: "https://github.com/maliksh7/Serverless-Flask-Application",
  },
  {
    title: "Web Health Monitoring System",
    domain: "Cloud & DevOps",
    description:
      "Implemented real-time web health monitoring via AWS API Gateway for efficient data management.",
    image: whms,
    link: "https://github.com/maliksh7/Web-Health-Monitoring",
  },
];

export default projects;
