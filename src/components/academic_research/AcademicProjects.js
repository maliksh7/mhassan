// src/components/AcademicResearch/AcademicProjects.js

import { useState } from 'react';
import styles from './AcademicProjects.module.scss'; // Import the SCSS module

const projects = [
    {
        title: "Master Thesis - Automated API Connectivity and Credential Monitoring System for Logistics Integration (ACCM))",
        date: "(09/2025)",
        description: "Developing an automated system to monitor API connectivity and credentials for seamless logistics integration at Texas Instruments.",
        link: ""
    },
    {
        title: "Final Project Report - Malicious Activity Detection Using Deep Learning",
        date: "(02/2022)",
        description: "Developed a machine learning-based system for enhancing cybersecurity through the detection of malicious network activities at FAST NUCES.",
        link: "https://github.com/maliksh7/DeepMAD/blob/main/FYP_thesis.pdf"
    },
    {
        title: "Term Paper - IoT based Smart Weather Tracker: Using M5Stack",
        date: "(04/2023)",
        description: "Designed and implemented an IoT-based weather tracking system utilizing M5Stack technology for real-time environmental monitoring at Hochschule Hof.",
        link: "https://github.com/maliksh7/IoT-Based-Smart-Weather-Finder-Using-M5Stack/blob/main/IoT-Based%20Smart%20Weather%20Finder%20Using%20M5Stack.pdf"
    },
    {
        title: "IEEE Paper - Tourism Management System with ownCloud and Yii2 Integration",
        date: "(06/2023)",
        description: "Researched and developed a comprehensive tourism management system integrating cloud services and Yii2 framework to enhance user experience and data management at Hochschule Hof.",
        link: "https://github.com/maliksh7/WanderWave-Tourism-with-ownCloud-and-Yii2-integration/blob/main/WanderWave_Tourism.pdf"
    },
    {
        title: "Term Paper - Revolutionizing Manufacturing: Implementing Industry 4.0 at Wiesmann Automotive Group",
        date: "(04/2024)",
        description: "Analyzed the impact of Industry 4.0 technologies on manufacturing processes, proposing solutions for improved efficiency and automation at Hochschule Hof.",
        link: "https://github.com/maliksh7/Wiesmann---Industry-4.0/blob/main/Wiesmann-Automotive-Industry4.0.pdf"
    }
];

const AcademicProjects = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 2;

    // Calculate the index range for the current page
    const startIndex = currentPage * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = projects.slice(startIndex, endIndex);

    // Function to handle page change
    const handleNextPage = () => {
        if (currentPage < Math.ceil(projects.length / projectsPerPage) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        // generate main container div in the center of the page horizontally and vertically with min height of 100vh
        <div
            className={styles.academicProjects}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh', padding: '1rem' }}
        >
            <h2 className={styles.sectionTitle}>Academic Projects and Research</h2>
            <div className={styles.projectsContainer}>
                {currentProjects.map((project, index) => (
                    <div key={index} className={styles.project}>
                        <h3 className={styles.projectTitle}>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.projectLink}
                            >
                                {project.title}
                            </a>
                            <span className={styles.projectDate}>{project.date}</span>
                        </h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                <button 
                    className={styles.paginationButton} 
                    onClick={handlePreviousPage} 
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <button 
                    className={styles.paginationButton} 
                    onClick={handleNextPage} 
                    disabled={currentPage >= Math.ceil(projects.length / projectsPerPage) - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );

    // return (






        
    //     <div className={styles.academicProjects}>
    //         <h2 className={styles.sectionTitle}>Academic Projects and Research</h2>

    //         <div className={styles.projectsContainer}>
    //             <div className={styles.column}>
    //                 {currentProjects[0] && (
    //                     <div className={styles.project}>
    //                         <h3 className={styles.projectTitle}>
    //                             <a 
    //                                 href={currentProjects[0].link} 
    //                                 target="_blank" 
    //                                 rel="noopener noreferrer"
    //                                 className={styles.projectLink}
    //                             >
    //                                 {currentProjects[0].title}
    //                             </a>
    //                             <span className={styles.projectDate}>{currentProjects[0].date}</span>
    //                         </h3>
    //                         <p className={styles.projectDescription}>{currentProjects[0].description}</p>
    //                     </div>
    //                 )}
    //             </div>
    //             <div className={styles.column}>
    //                 {currentProjects[1] && (
    //                     <div className={styles.project}>
    //                         <h3 className={styles.projectTitle}>
    //                             <a 
    //                                 href={currentProjects[1].link} 
    //                                 target="_blank" 
    //                                 rel="noopener noreferrer"
    //                                 className={styles.projectLink}
    //                             >
    //                                 {currentProjects[1].title}
    //                             </a>
    //                             <span className={styles.projectDate}>{currentProjects[1].date}</span>
    //                         </h3>
    //                         <p className={styles.projectDescription}>{currentProjects[1].description}</p>
    //                     </div>
    //                 )}
    //             </div>
    //         </div>

    //         <div className={styles.pagination}>
    //             <button 
    //                 className={styles.paginationButton} 
    //                 onClick={handlePreviousPage} 
    //                 disabled={currentPage === 0}
    //             >
    //                 Previous
    //             </button>
    //             <button 
    //                 className={styles.paginationButton} 
    //                 onClick={handleNextPage} 
    //                 disabled={currentPage >= Math.ceil(projects.length / projectsPerPage) - 1}
    //             >
    //                 Next
    //             </button>
    //         </div>
    //     </div>
    // );
};

export default AcademicProjects;
