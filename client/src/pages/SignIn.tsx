import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RestaurantAdminSignIn } from '@/Types/User'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const [restaurantAdmin, setRestaurantAdmin] = useState<RestaurantAdminSignIn>({
        password: "",
        email: ""
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRestaurantAdmin({ ...restaurantAdmin, [name]: value });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };
  return (
    <div className="flex items-center justify-center min-h-screen ">
    <div className="p-8 rounded-lg shadow-lg w-full max-w-md border-4">
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-6">SignIn</h1>

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
                SignIn
            </Button>
        </form>
        <div className="py-5">
            <Button className='w-full'>Google</Button>
        </div>
        <div className="mt-4 text-center">
            <p>Don't have an account?</p>
            <Link  to="/signup" className="hover:underline"> SignUp</Link>
        </div>
    </div>
</div>
  )
}

export default SignIn