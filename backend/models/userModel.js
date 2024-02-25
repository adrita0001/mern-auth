import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', userSchema);



// password hashing
userSchema.pre('save',async function (next){
    if(!this.isModified(this.password)){
        next()
    }
    const salt = bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

export default User;
