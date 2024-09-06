import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RestaurantAdminSignIn } from '@/Types/User'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/index'
import { toast } from 'sonner'
import { setUser } from '@/store/userSlice'
import { setToken } from '@/store/Token'
// import {Cookie} from 'js-cookie'



const SignIn = () => {
    const [restaurantAdmin, setRestaurantAdmin] = useState<RestaurantAdminSignIn>({
        password: "",
        email: ""
    });
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRestaurantAdmin({ ...restaurantAdmin, [name]: value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const RestaurantAdminSignIn = await fetch('/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(restaurantAdmin)
            })
            const data = await RestaurantAdminSignIn.json();
            if (RestaurantAdminSignIn.status == 200) {
                setLoading(false);
                toast.success(data.message);
                dispatch(setUser(data.data.userDetail))
                dispatch(setToken(data.data.token))
                navigate('/auth/dashboard')
                
            
            }
            toast.error("Error While Signin")
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
            
        }
    };
  return (
    <div className="flex items-center justify-center min-h-screen ">
    <div className="p-8 rounded-lg shadow-lg w-full max-w-md border-4">
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-6">SignIn</h1>

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
         
           
            <Button type="submit" className="w-full  font-bold py-2 rounded">
               {
                loading ? "Loading..." : "SignIn"
               }
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