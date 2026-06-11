import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['candidate', 'recruiter', 'admin'], default: 'candidate' },
    resetPasswordToken: { type: String, default: null },
    resetPasswordExpire: { type: Date, default: null }
}, { timestamps: true });

export const User = model('User', userSchema);