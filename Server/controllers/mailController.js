const nodemailer=require('nodemailer')

const transporter=nodemailer.createTransport({
    host: 'mail.server.in',
    port: 587,
    authMethod: 'NTLM',
    secure: false,
    tls: {rejectUnauthorized: false},
    debug: true,
    auth: {
        user: 'nithish.cse@gmail.com',
        pass: 'knrdbvusyrsggojk',
    }
});

exports.sendMailForServiceStatus=(to, subject, status) =>
{
    const mailData={
        from: 'nithish.cse@gmail.com',
        to: to,
        subject: subject,
        text: 'Current status of your bookings in John Garage'+status,
    }

    transporter.sendMail(mailData, function(err, info)
    {
        if(err)
            console.log(err)
        else
            console.log(info)
    });
}


exports.sendMail=(req, res) =>
{
    const mailOptions={
        from: 'nithish.cse@gmail.com',
        to: 'nithish.cse@gmail.com',
        subject: 'Hello, Nodemailer!',
        text: 'This is a test email sent from Nodemailer.',
    };

    transporter.sendMail(mailOptions, (error, info) =>
    {
        if(error) {
            console.error('Error sending email: ', error);
        } else {
            console.log('Email sent: '+info.response);
        }
    });
}
