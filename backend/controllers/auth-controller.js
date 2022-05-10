const Otp = require('../helpers/otp');
const Hash = require('../helpers/hashOtp');
const userHelper = require('../helpers/user');
const token = require('../helpers/token');
const userDto = require('../dtos/userDto');

class AuthController{  //singleton class
    async sendOtp(req, res) {
        const { phone } = req.body;
        if (!phone) {
            res.status(400).json({ message: "Phone field is required!" });
        }

        const otp = await Otp.generateOtp();

        const expire = 1000 * 60 * 2; // 2 min
        const expires = Date.now() + expire;
        const data = `${phone}.${otp}.${expires}`;
        const hash = Hash.Hash(data);

        // send OTP
        try {
            //await Otp.sendBySMS(phone, otp);
            res.json({
                hash: `${hash}.${expires}`,
                phone,
                otp,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'message sending failed' });
        }
    }
    async verifyOtp(req, res) {
        const { phone, otp, hash } = req.body;
        if (!phone || !otp || !hash) {
            res.status(400).json({ message: "All fields are required!" });
        }
        const [hashOtp, expire] = hash.split('.');
        if (Date.now() > +expire) {
            res.status(400).json({ message: "Otp is expired!" });
        }
        const data = `${phone}.${otp}.${expire}`;
        const isValid = Otp.verifyOtp(hashOtp,data);
        if (!isValid) {
            res.status(400).json({ message: "Invalid OTP" });
        }
        let user;
        
        //check user || create user
        try {
            user = await userHelper.findUser({ phone });
            if (!user) {
                user=await userHelper.createUser({phone}); 
            }
        }
        catch (e)
        {
            console.log(e);
            return res.status(400).json({ message: "Db Error!" });
        }

        //token
        const { accessToken, refreshToken } = token.generateTokens({_id:user._id,activated:false});
        
        await token.storeRefreshToken(refreshToken, user._id);

        res.cookie('refreshtoken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30, //mili seconds sec min hrs days,
            httpOnly:true
        });

        res.cookie('accesstoken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30, //mili seconds sec min hrs days,
            httpOnly:true
        });

        const userDtos = new userDto(user);
        res.status(200).json({user:userDtos,auth:true });
    }
}

module.exports = new AuthController();