const crypto = require('crypto');
const hash = require('./hashOtp');
const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const twilio = require('twilio')(smsSid, smsAuthToken, {
    lazyLoading: true,
});

class Otp{
    async generateOtp() {
        const otp = crypto.randomInt(1000, 9999);
        return otp;
    }
    async sendBySMS(phone,otp) {
        return await twilio.messages.create({
            to: phone,
            from:process.env.SMS_FROM_NUMBER,
            body:`Use OTP ${otp} to log into your Call Out account. Do not share the OTP or your number with anyone including Call Out personel!`
        });
    }
    verifyOtp(hashOtp,data) {
        let computedHash = hash.Hash(data);
        if (computedHash === hashOtp) {
            return true;
        }
        else {
            return false;
        }
    }
}
module.exports = new Otp();