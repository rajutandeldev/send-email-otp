module.exports.generateOtpTemplate = (otp) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your OTP Code</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #4CAF50;
            color: #ffffff;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .content {
            padding: 20px;
            text-align: center;
        }

        .otp {
            font-size: 24px;
            font-weight: bold;
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 5px;
            letter-spacing: 2px;
            margin: 20px 0;
            display: inline-block;
        }

        .footer {
            text-align: center;
            color: #888888;
            font-size: 12px;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Your OTP Code</h1>
        </div>
        <div class="content">
            <p>Hello,</p>
            <p>Use the following OTP to complete your transaction or verification process:</p>
            <div class="otp">${otp}</div>
            <p>This OTP is valid for the next 5 minutes. Please do not share it with anyone.</p>
        </div>
        <div class="footer">
            <p>If you didn't request this, please ignore this email.</p>
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
    </div>
</body>

</html>
`;
};
