import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserOtp } from "@/Types/User";
import { useNavigate } from "react-router-dom";
import { UserOtpVerify } from "@/lib/validation";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { AppDispatch } from '../store/index'
import { setUser } from "@/store/userSlice";
import { InputOTP  , InputOTPGroup ,InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp";
import { setToken } from "@/store/Token";
const Verification = () => {
    const [data, setData] = useState<UserOtp>({
        email: "",
        otp: ""
    });
    console.log(data);
    const dispatch: AppDispatch = useDispatch();



    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleOtpChange = (newValue: string) => {
        setData({ ...data, otp: newValue });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const isValid = UserOtpVerify.safeParse(data)
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
            const response = await verifyOtp.json();
            
            if (verifyOtp.status == 200) {
                setLoading(false);
                dispatch(setUser(response.data.userDetails));
                dispatch(setToken(response.data.token));
                toast.success("OTP verified successfully");
                navigate("/auth/dashboard")
            }
            toast.error("Failed to verify OTP")
            setLoading(false)
        } catch (error) {
            console.error(error);
            toast.error("Failed to verify OTP");

        }
    };


    const resendOtp = async () => {
        toast.success("OTP resent successfully");
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
                            onChange={handleChange}
                            required
                            className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-1.5 mb-6">
                        <Label htmlFor="otp">OTP</Label>
                        <InputOTP maxLength={6} onChange={handleOtpChange} value={data.otp} name="otp" required id="otp"> 
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
                    >
                        {loading ? "Verifying" : "Verify"}
                    </Button>
                </form>
                <div className="mt-4 text-center">
                    {/* post request for generating otp for restaurant admin */}
                    <Button onClick={resendOtp} className="text-blue-500 hover:text-blue-600">
                        Didn't receive an OTP? Resend
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Verification;
