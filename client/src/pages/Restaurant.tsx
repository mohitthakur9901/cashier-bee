import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
// import { Button } from '@/components/ui/button';
import RestaurantForm from '@/components/RestarantForm';
import { RestaurantProps ,AddressProps } from '@/Types/Restaurant';
import { toast } from 'sonner';
import { setRestaurant } from '@/store/restaurantSlice';

const Restaurant = () => {
    const { restaurant, user, token } = useSelector((state: RootState) => state);
    const [address , setAddress] = useState<typeof AddressProps>()
    const dispatch: AppDispatch = useDispatch();

    const [createRestaurant, setCreateRestaurant] = useState<RestaurantProps>({
        restaurantName: "",
        city: "",
        country: "",
        pinCode: "",
        state: "",
        street: ""
    });

    const [loading, setLoading] = useState<boolean>(false);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCreateRestaurant(prev => ({ ...prev, [name]: value }));
    };

    const handleCityChange = (city: string) => {
        setCreateRestaurant(prev => ({ ...prev, city }));
    };

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`/api/v1/restaurant/create-restaurant/${user.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token.token}` // Use Bearer scheme for tokens
                },
                body: JSON.stringify(createRestaurant)
            });

            const data = await response.json();

            if (response.status === 201) {
                toast.success(data.message);

            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error creating restaurant:', error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const handleGetRestaurant = async () => {
            try {
                const res = await fetch(`/api/v1/restaurant/get-restaurant/${user.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `${token.token}` // Use Bearer scheme for tokens
                    }
                });
                const data = await res.json();
                console.log(data.data);
                
                dispatch(setRestaurant(data.data.restaurant));
                setAddress(data.data.address);
            } catch (error) {
                console.error('Error fetching restaurant:', error);
            }
        };

        if (user.id) {
            handleGetRestaurant();
        }
    }, [dispatch, token.token, user.id]);



    return restaurant.id ? (
        <div className=" flex flex-col justify-center bg-blue-700 rounded-lg p-4 text-white">
            <h1>Your Restaurant</h1>
            <h2>{restaurant.name}</h2>
            {/* Add other restaurant details */}
            <h2>{address?.street}</h2>
            <h2>{address?.city}</h2>
            <h2>{address?.state}</h2>
            <h2>{address?.country}</h2>
            <h2>{address?.pinCode}</h2>
        </div>
    ) : (
        <RestaurantForm
            {...createRestaurant}
            handleChange={handleOnChange}
            handleSubmit={handleSubmitForm}
            loading={loading}
            handleCityChange={handleCityChange}
        />
    )
};

export default Restaurant;
