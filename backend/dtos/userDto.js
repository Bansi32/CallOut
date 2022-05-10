//data transfer objects
//here the data(console) from mongo db can be excluded if not needed

class userDto{
    id;
    phone;
    activated;
    createdAt;
    constructor(user){
        this.id = user._id;
        this.phone = user.phone;
        this.activated = user.activated;
        this.createdAt = user.createdAt;
    }
}

module.exports = userDto;