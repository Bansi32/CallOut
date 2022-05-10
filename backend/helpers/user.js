const UserSchema = require('../models/user');
class UserHelper{
    async findUser(filter) {
        const user = await UserSchema.findOne(filter);
        return user;
    }
    async createUser(data) {
        const user = await UserSchema.create(data);
        return user;
    }
}

module.exports = new UserHelper();