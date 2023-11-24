import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({//objeto de lo que queremos validar
    username: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)//Interactua con la base