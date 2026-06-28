// src/components/AcademicResearch/AcademicProjects.js

import { useState } from 'react';
import styles from './AcademicProjects.module.scss';

const projects = [
    {
        title: "Master Thesis - Automated API Connectivity and Credential Monitoring System for Logistics Integration (ACCM)",
        date: "(09/2025)",
        description: "Developing an automated system to monitor API connectivity and credentials for seamless logistics integration at Texas Instruments.",
        link: "https://github.com/maliksh7/accm"
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

const AcademicProjects = ({ darkMode }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 2;

    const startIndex = currentPage * projectsPerPage;
    const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    // Consistent title color regardless of whether it's a link or plain text
    // Matches the site's accent: blue in dark mode, darker blue in light mode
    const titleColor = darkMode ? "#58a6ff" : "#0077cc";
    const textColor  = darkMode ? "#c9d1d9" : "#1f1f1f";
    const descColor  = darkMode ? "#8b949e" : "#555555";
    const dateColor  = darkMode ? "#8b949e" : "#777777";
    const borderColor = darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
    const cardBg     = darkMode ? "rgba(255,255,255,0.03)" : "#ffffff";

    return (
        <div
            className={styles.academicProjects}
            style={{ color: textColor }}
        >
            <h2 className={styles.sectionTitle} style={{ color: textColor }}>
                Academic Projects and Research
            </h2>

            <div className={styles.projectsContainer}>
                {currentProjects.map((project, index) => (
                    <div
                        key={index}
                        className={styles.project}
                        style={{ borderColor: borderColor, backgroundColor: cardBg }}
                    >
                        <h3 className={styles.projectTitle}>
                            {/* Always render title in the same accent color whether linked or not */}
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.projectLink}
                                    style={{ color: titleColor }}
                                >
                                    {project.title}
                                </a>
                            ) : (
                                <span style={{ color: titleColor }}>{project.title}</span>
                            )}
                            <span className={styles.projectDate} style={{ color: dateColor }}>
                                {project.date}
                            </span>
                        </h3>
                        <p className={styles.projectDescription} style={{ color: descColor }}>
                            {project.description}
                        </p>
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
                    disabled={currentPage >= totalPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AcademicProjects;