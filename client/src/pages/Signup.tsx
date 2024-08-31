import React, { useState } from 'react';
import { RestaurantAdminSignUp } from '@/Types/User';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [restaurantAdmin, setRestaurantAdmin] = useState<RestaurantAdminSignUp>({
        profileImg: "",
        username: "",
        password: "",
        phone: "",
        email: ""
    });

    const [profileImgPreview, setProfileImgPreview] = useState<string | null>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRestaurantAdmin({ ...restaurantAdmin, [name]: value });
    };

    const handleProfileImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setRestaurantAdmin({ ...restaurantAdmin, profileImg: file.name });
            setProfileImgPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
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
                        />
                    </div>
                    <Button type="submit" className="w-full  font-bold py-2 rounded">
                        Signup
                    </Button>
                </form>
                <div className="py-5">
                    <Button className='w-full'>Google</Button>
                </div>
                <div className="mt-4 text-center">
                    <p>Already have an account?</p>
                    <Link to="/signin" className="hover:underline"> Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
