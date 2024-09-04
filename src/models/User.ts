import mongoose from "mongoose"

const userScheme = new mongoose.Schema(
    {
        firstName : {
            type: String,
            required: true
        },
        lastName : {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            select: false
        },
        role: {
            type: String,
            default: "user"
        },
        img: {
            type: String
        },
        authProvidorId: {
            type: String
        },
    }
);

export const User = mongoose.models?.User || mongoose.model("User", userScheme);