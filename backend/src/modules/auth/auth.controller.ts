import { Request, Response } from 'express';
import { User } from '../../models/User.js';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: 'User not found with this email.' });
            return;
        }

        const resetToken = crypto.randomBytes(20).toString('hex');

        user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        user.resetPasswordExpire = new Date(Date.now() + 10 * 60 * 1000); // 10 Minutes

        await user.save();

        const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"JobMatrix AI" <${process.env.EMAIL_USER}>`,
            to: user.email,
            subject: 'Password Reset Request - JobMatrix AI',
            html: `
        <h3>You requested a password reset</h3>
        <p>Please click on the following link to reset your password. This link is valid for 10 minutes:</p>
        <a href="${resetUrl}" target="_blank" style="padding: 10px 20px; background-color: #4f46e5; color: white; text-decoration: none; border-radius: 8px; display: inline-block; margin-top: 10px;">Reset Password</a>
        <p>If you did not request this, please ignore this email.</p>
      `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Reset link sent to your email.' });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: (error as Error).message });
    }
};

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        const hashedToken = crypto.createHash('sha256').update(token as string).digest('hex');

        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: { $gt: new Date() },
        });

        if (!user) {
            res.status(400).json({ message: 'Invalid or expired token.' });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        user.resetPasswordToken = null;
        user.resetPasswordExpire = null;

        await user.save();
        res.status(200).json({ message: 'Password reset successful. You can log in now.' });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: (error as Error).message });
    }
};