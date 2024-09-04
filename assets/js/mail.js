import nodemailer from "nodemailer";

const contactForm = document.querySelector('.c-1');

let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

     // Create a transporter object using Gmail SMTP
     const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'teddybrian543@gmail.com',
        pass: 'zmib dnky korv oovg'
        }
    });

    // Email options
    const mailOptions = {
        from: 'teddybrian543@gmail.com',
        to: 'niarbyddet@gmail.com',
        email: email,
        subject: subject,
        text: message,
    };

    // Send the email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            
        console.error('❌ Error:', error.message);
        } else {
        console.log('✅ Email sent:', info.response);
        }
        
    });
});



