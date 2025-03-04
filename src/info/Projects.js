import DeepMAD from '../img/DeepMAD.png';
import sfa from '../img/Serverless-Flask-Application.png';
import ads from '../img/ads.png';
import ft from '../img/ft.png';
import ProShop from '../img/project-proshop.png';
import whms from '../img/whms.png';

const projects = [
   {
      title: "DeepMAD",
      description: "Malicious Activity Detection System. Final Year Project. Deep Learning-based solution, which analyses Network Activity sequences to classify whether the certain node is Malicious or Benign.  Devising a tool/software which will detect malicious Network Activity Detection using Deep Learning Model. Tools:  Python, Neural Network (BERT), Google Colaboratory, PyTorch, Kaggle, Tensorflow, and Flowmeter.",
      image: DeepMAD,
      link: "https://github.com/maliksh7/DeepMAD/"
   },
   {
      title: "ProShop E-Commerce Store",
      description: "Proshop is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to browse and purchase products online. Features includes User authentication (signup, login),Product listing with details,Shopping cart functionality,Checkout process,Order history,Admin panel for product managementUser authentication (signup, login),Product listing with details,Shopping cart functionality,Checkout process,Order history,Admin panel for product management",
      image: ProShop,
      link: "https://github.com/maliksh7/ProShop"
   },
   {
    title: "Serverless Flask Application",
    description: "It focuses on mastering FLASK, ECS, ECR, Docker, and Fargate for cloud-native development, enhancing scalability and deployment efficiency. By adhering to best practices like docstrings and environmental variables, it streamlines development workflows and ensures consistency across deployments. Technologies utilized include FLASK, ECS, ECR etc.",
    image: sfa,
    link: "https://github.com/maliksh7/Serverless-Flask-Application"
   },
   {
    title: "Web Health Monitoring System",
    description: "Implemented a Web Health Monitoring system via CRUD API Gateway, leveraging AWS services for efficient real-time data management and optimal web application performance.",
    image: whms,
    link: "https://github.com/maliksh7/Web-Health-Monitoring"
   },
   {
    title: "Finance Tracker",
    description: "This is the finance tracker app, this app is built using Ruby on Rails. This app allows users to track their expenses and incomes. Users can create categories for their transactions and can view the total expenses and incomes. Users can also view the transactions of a particular category.",
    image: ft,
    link: "https://github.com/maliksh7/finance-tracker-"
   },
   {
    title: "Anomaly Detection System",
    description: "If you can find the pattern for expected or normal data, then you can also find those data points that don't fit the pattern. Companies in industries as diverse as financial services, healthcare, retail and manufacturing regularly employ a variety of data science methods to identify anomalies in their data for uses such as fraud detection, custom.",
    image: ads,
    link: "https://github.com/maliksh7/Anomaly-Detection-System"
   }
];

export default projects;
