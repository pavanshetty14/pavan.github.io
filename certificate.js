const certificates = [
    {
        id: "1",
        title: "Summer Internship Training on Soft Skills & Microsoft Office",
        details: "Successfully completed a Summer Internship focused on developing Soft Skills and proficiency in Microsoft Office tools.The training enhanced communication, teamwork, leadership, and professional productivity skills.",
        image: "./assets/images/certificate1.jpg"
    },
    {
        id: "2",
        title: "Space Science and Technology Awareness Training (START)",
        details: "Participated in an online training program on “Overview of Space Science and Technology” conducted by ISRO, gaining knowledge of India’s space research and satellite technology.",
        image: "./assets/images/certificate2.jpg"
    },
    {
        id: "3",
        title: "Ethical Hacking & Cyber Security Workshop",
        details: "Participated in a workshop by NIC and Rajeev Institute of Technology under the Ministry of Electronics & IT, gaining practical insights into cybersecurity and ethical hacking techniques.",
        image: "./assets/images/certificate3.jpg"
    },
    {
        id: "4",
        title: "Varcons Technologies Pvt. Ltd",
        details: "Full Stack Web Development Internship at Varcons Technologies Pvt. Ltd, I worked on developing a fully functional website for Ignyt – The Beer Lounge",
        image: "./assets/images/certificate4.jpg"
    },
    {
        id: "5",
        title: "Zero to Hero: Git, GitHub & GitHub Copilot",
        details: "Completed the “Zero to Hero: Git, GitHub & GitHub Copilot” program by Microsoft Learn Student Ambassador, gaining hands-on skills in version control and AI-powered coding",
        image: "./assets/images/certificate5.jpg"
    },
    {
        id: "6",
        title: "The Joy of Computing Using Python (NPTEL)",
        details: "Completed “The Joy of Computing Using Python” course by IIT Madras (NPTEL), gaining foundational skills in Python programming and computational thinking",
        image: "./assets/images/certificate6.jpg"
    },
    {
        id: "7",
        title: "Rooman Technologies Pvt. Ltd.- AI – Machine Learning Engineer",
        details: "Successfully completed AI–ML Engineer training with outstanding dedication and performance.In Association With: NSDC, Skill India, NASSCOM, IBM, Wadhwani Foundation",
        image: "./assets/images/certificate7.jpg"
    },
    {
        id: "8",
        title: "Wadhwani Foundation certificate:Life Skills (Jeevan Kaushal) 2.0",
        details: "Completed “Life Skills (Jeevan Kaushal) 2.0” program by Wadhwani Foundation through Rooman Technologies Pvt. Ltd.Developed essential professional and communication skills through a 93-hour interactive course.",
        image: "./assets/images/certificate8.jpg"
    },
    {
        id: "9",
        title: "Rooman Technologies – On the Job Training (OJT) certificate",
        details: "Completed On-the-Job Training (OJT) as an AI – Machine Learning Engineer at Rooman Technologies Pvt. Ltd., Bengaluru.Gained hands-on experience in machine learning model development, deployment, and real-time data processing.",
        image: "./assets/images/certificate9.jpg"
    },
    {
        id: "10",
        title: "IBM Cognitive Class certificate: SQL and Relational Databases",
        details: "Completed “SQL and Relational Databases 101” course on CognitiveClass.ai, powered by IBM Developer Skills Network.Gained foundational knowledge in SQL queries, relational schema design, and database management concepts.",
        image: "./assets/images/certificate10.jpg"
    }
 
];

// Get certificate ID from URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const certId = urlParams.get('id');

// Find the certificate by ID
const certificate = certificates.find(cert => cert.id === certId);

// Update the page content
const titleElement = document.getElementById('cert-title');
const detailsElement = document.getElementById('cert-details');
const imageElement = document.getElementById('cert-image');

if (certificate) {
    titleElement.textContent = certificate.title;
    detailsElement.textContent = certificate.details;
    if (certificate.image) {
        imageElement.src = certificate.image;
        imageElement.style.display = 'block';
    }
} else {
    titleElement.textContent = "Certificate Not Found";
    detailsElement.textContent = "Sorry, the requested certificate could not be found.";
}

// ScrollReveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.certificate-container, .heading', { origin: 'top' });
ScrollReveal().reveal('.certificate-box', { origin: 'bottom' });

// Navbar toggle for mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Sticky header and navbar reset on scroll
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Update digital clock
function updateClock() {
    const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    document.getElementById('current-time').textContent = now;
}
setInterval(updateClock, 1000);
updateClock();