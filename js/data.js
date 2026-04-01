/* =============================================================================
   PORTFOLIO DATA
   -----------------------------------------------------------------------------
   Update this file to change content on the website.
   Images should be in the 'images/' folder.
   
   Structure:
   - education: Array of education objects
   - projects: Array of project objects
   - skills: Array of skill objects
   - internships: Array of internship objects
   - certifications: Array of certification objects
============================================================================= */

window.portfolioData = {

    /* =========================
       EDUCATION
    ========================= */
    education: [
        {
            title: "Secondary School (10th)",
            year: "2020 – 2021",
            description: "At Ekashila Public School, Jangaon, Telangana – 506167.",
            grade: "CGPA: 9.8 / 10"
        },
        {
            title: "Higher Secondary (12th)",
            year: "2021 – 2023",
            description: "At Nano Junior College, Hyderabad, Telangana – 500030."
        },
        {
            title: "B.Tech – Data Science",
            year: "2023 – Present",
            description: "Pursuing undergraduate studies in Data Science at Vignana Bharathi Institute of Technology with a strong focus on analytics, machine learning, and real-world applications.",
            grade: "Current CGPA: 7.8 / 10"
        }
    ],

    /* =========================
       PROJECTS
    ========================= */
    projects: [
        {
            title: "Diet Plan Generator",
            image: "images/project1.png",
            description: "An AI-based system that generates personalized diet plans based on age, gender, and lifestyle.",
            tags: ["Python", "LLM", "AI"],
            link: "https://github.com/SonuSuraj1807/Diet-plan-Generator"
        },
        {
            title: "Brain Tumor Detection Using X-Ray Images",
            image: "images/project2.png",
            description: "A machine learning model to identify brain tumors from X-ray images using computer vision techniques.",
            tags: ["Python", "Computer Vision", "ML"],
            link: "https://github.com/SonuSuraj1807/Identifying-brain-tumors-using-x-ray-images"
        },
        {
            title: "Automated Online Ordering System using GenAI",
            image: "images/project3.png",
            description: "A GenAI-powered system that automates online product ordering by understanding user inputs and generating responses.",
            tags: ["Python", "GenAI", "NLP"],
            link: "https://github.com/SonuSuraj1807/Automated-online-ordering-system-using-GenAI"
        },
        {
            title: "Digital Library Management System",
            image: "images/LMS.png",
            description: "A comprehensive library management system that streamlines book issuance, return, and inventory tracking processes.",
            tags: ["Java Script", "HTML", "CSS"],
            link: "https://github.com/SonuSuraj1807/Digital-Library-Management"
        }
    ],

    /* =========================
       SKILLS
    ========================= */
    skills: [
        {
            name: "Python",
            icon: "fab fa-python",
            color: "#3776AB",
            level: "90%",
            levelText: "Expert"
        },
        {
            name: "HTML",
            icon: "fab fa-html5",
            color: "#E34F26",
            level: "85%",
            levelText: "Advanced"
        },
        {
            name: "C",
            icon: "fas fa-code",
            color: "#A8B9CC",
            level: "80%",
            levelText: "Advanced"
        },
        {
            name: "JavaScript",
            icon: "fab fa-js-square",
            color: "#F7DF1E",
            level: "70%",
            levelText: "Intermediate"
        },
        {
            name: "SQL",
            icon: "fas fa-database",
            color: "#00758F",
            level: "75%",
            levelText: "Intermediate"
        },
        {
            name: "Java",
            icon: "fab fa-java",
            color: "#007396",
            level: "60%",
            levelText: "Intermediate"
        },
        {
            name: "CSS",
            icon: "fab fa-css3-alt",
            color: "#1572B6",
            level: "85%",
            levelText: "Advanced"
        }
    ],

    /* =========================
       INTERNSHIPS
    ========================= */
    internships: [
        {
            title: "Virtual Internship: Android Developer",
            icon: "fab fa-google",
            iconTitle: "Google for Developers",
            company: "AICTE – EduSkills",
            duration: "April 2024 – June 2024 (10 Weeks)",
            description: "Completed a virtual internship as an Android Developer under AICTE – EduSkills, supported by Google for Developers. Gained hands-on exposure to Android application development, UI design, activity lifecycle management, and modern mobile development practices."
        },
        {
            title: "Virtual Internship: Data Engineering",
            icon: "fab fa-aws",
            iconTitle: "AWS Academy",
            company: "AICTE – EduSkills",
            duration: "January 2025 – March 2025 (10 Weeks)",
            description: "Completed a virtual internship in Data Engineering under AICTE – EduSkills, supported by AWS Academy. Acquired practical knowledge in data pipelines, cloud-based data services, ETL processes, and foundational data engineering concepts using AWS tools."
        },
        {
            title: "Virtual Internship: Altair Data Science Master",
            icon: "fab fa-altair", // Note: FontAwesome might not have fa-altair, fallback to standard if needed or custom
            iconTitle: "Altair",
            company: "AICTE – EduSkills",
            duration: "January 2025 – March 2025 (10 Weeks)",
            description: "Currently pursuing a virtual internship in Data Science using Altair, facilitated by AICTE – EduSkills. Developing skills in data analysis, predictive modeling, and simulation using Altair’s comprehensive data science platform."
        }
    ],

    /* =========================
       CERTIFICATIONS
    ========================= */
    certifications: [
        {
            title: "Android Developer Virtual Internship",
            image: "certificates/internship_flat.png",
            issuer: "AICTE – EduSkills (Google for Developers)",
            issueDate: "Issued June 2024"
        },
        {
            title: "Data Engineering Virtual Internship",
            image: "certificates/AWS-1.png",
            pdf: "certificates/AWS.pdf",
            issuer: "AICTE - EduSkills (AWS Academy)",
            issueDate: "Issued March 2025"
        },
        {
            title: "Data Science Master Virtual Internship",
            image: "certificates/Altair-1.png",
            pdf: "certificates/Altair.pdf",
            issuer: "AICTE - EduSkills (ALTAIR)",
            issueDate: "Issued December 2024"
        }

    ]
};
