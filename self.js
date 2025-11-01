// Typewriter effect for birthday
const birthdayText = "January 14, 2004";
let i = 0;

function typeWriter() {
    if (i < birthdayText.length) {
        document.getElementById('typewriter').textContent += birthdayText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

function downloadBio() {
    const bio = `Name: Pavan R K\nAbout: Hello! My Name is Pavan R K,and i am from Halebeedu where i currently live.I have completed my B.E. in computer Science and Engineering from Rajeev Institute Of Technology,Hassan in June 2025.I did a 5-month internship at Rooman Technologies, where I worked on NLP projects using Transformer Models.
In academics, I scored 81% in 12th (2021) and 80% in 10th. Along with studies, I participated in extracurricular activities, which helped me build good communication and teamwork skills.My technical skills include Web Development, SQL, Fullstack Development, Java, UNIX, HTML, and PLSQL. I can read, write, and speak Kannada and English.
I am a quick learner, hardworking, and always eager to update my knowledge and improve myself both professionally and personally.\nHobbies: Playing Cricket and Volley Ball,Listening Music ,Travelling ,Watching Movies, Coding and Building Web Apps\nBirthday: January 14, 2004`;
    const blob = new Blob([bio], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Pavan_Bio.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Start typewriter effect when page loads
window.onload = typeWriter;