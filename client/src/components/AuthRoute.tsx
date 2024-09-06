
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthRoute = () => {
    const navigate = useNavigate()
    const user = useSelector((state: RootState) => state.user)
    return user.isVerified ? <Outlet /> : navigate('/signin')
}

export default AuthRoute