const express = require('express');
const { sendEmailOtpController } = require('../controller/sendOtpViaEmailController');

const router = express.Router();

router.post('/sendEmailOtp',sendEmailOtpController);

module.exports = router;