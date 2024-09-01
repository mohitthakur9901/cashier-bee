import React, { useState } from 'react';
import { RestaurantAdminSignUp } from '@/Types/User';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { UserSignUpValidate } from '../lib/validation';

const Signup = () => {
    const navigate = useNavigate();

    const [restaurantAdmin, setRestaurantAdmin] = useState<Omit<RestaurantAdminSignUp, 'profileImg'>>({
        username: "",
        password: "",
        phone: "",
        email: ""
    });
    console.log(restaurantAdmin);
    
    const [profileImg, setProfileImg] = useState<File | null>(null);
    const [profileImgPreview, setProfileImgPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRestaurantAdmin({ ...restaurantAdmin, [name]: value });
    };

    const handleProfileImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setProfileImg(file);
            setProfileImgPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!profileImg) {
            toast.error("Profile image is required");
            setLoading(false);
            return;
        }

        const isValid = UserSignUpValidate.safeParse(restaurantAdmin);
        if (!isValid.success) {
            toast.error("Invalid User Credentials");
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('profileImg', profileImg);
        formData.append('username', restaurantAdmin.username);
        formData.append('password', restaurantAdmin.password);
        formData.append('phone', restaurantAdmin.phone);
        formData.append('email', restaurantAdmin.email);

        try {
            const requestSignUp = await fetch('/api/v1/auth/signup', {
                method: 'POST',
                body: formData
            });
            console.log(requestSignUp);
            

            if (requestSignUp.status === 201) {
                toast.success("User Signed Up Successfully");
                navigate('/verify-user');
            } else {
                const response = await requestSignUp.json();
                toast.error(response.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to sign up. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-8 rounded-lg shadow-lg w-full max-w-md border-4">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold mb-6">Signup</h1>
                    <div className="profileImg mb-4">
                        {profileImgPreview ? (
                            <img
                                src={profileImgPreview}
                                alt="Profile Preview"
                                className="w-32 h-32 object-cover rounded-full mx-auto"
                            />
                        ) : (
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                                <span className="text-gray-500">No Image</span>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1.5 mb-4">
                        <Label htmlFor="profileImg">Profile Image</Label>
                        <Input
                            id="profileImg"
                            name="profileImg"
                            type="file"
                            onChange={handleProfileImg}
                            className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5 mb-4">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            value={restaurantAdmin.username}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5 mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={restaurantAdmin.password}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5 mb-4">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={restaurantAdmin.phone}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5 mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={restaurantAdmin.email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full font-bold py-2 rounded">
                        {loading ? "Signing Up..." : "Signup"}
                    </Button>
                </form>
                <div className="py-5">
                    <Button className="w-full">Google</Button>
                </div>
                <div className="mt-4 text-center">
                    <p>Already have an account?</p>
                    <Link to="/signin" className="hover:underline">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
