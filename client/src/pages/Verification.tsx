import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserOtp } from "@/Types/User";
import { Link, useNavigate } from "react-router-dom";
import { UserOtpVerify } from "@/lib/validation";
import { toast } from "sonner";

const Verification = () => {
    const [data, setData] = useState<UserOtp>({
        email: "",
        otp: ""
    });
    console.log(data);
    
    const [loading , setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const isValid =  UserOtpVerify.safeParse(data)
            if (!isValid.success) {
                toast.error("Invalid OTP")
                return;
            }
            console.log(isValid);
            
            const verifyOtp = await fetch("/api/v1/auth/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            console.log(verifyOtp);
            
            if (verifyOtp.status === 200) {
                toast.success("OTP Verified Successfully");
                setLoading(false)
                navigate('/dashboard');
            }
            toast.error("Failed to verify OTP")
            setLoading(false)
        } catch (error) {
            console.error(error);
            toast.error("Failed to verify OTP");
            
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Verify OTP</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-1.5 mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={data.email}
                            onChange={onChange}
                            required
                            className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5 mb-6">
                        <Label htmlFor="otp">OTP</Label>
                        <Input
                            id="otp"
                            name="otp"
                            type="text"
                            placeholder="Enter the OTP"
                            value={data.otp}
                            onChange={onChange}
                            required
                            className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
                    >
                        {loading ? "Verifying Otp" : "Verify Otp"}
                    </Button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/resend-otp" className="text-blue-500 hover:text-blue-600">
                        Didn't receive an OTP? Resend
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Verification;
