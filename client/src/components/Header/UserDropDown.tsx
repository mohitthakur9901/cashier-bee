import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ClickOutside from '../ClickOutSide';
import {LogOut  , UserRoundPen} from "lucide-react"
import { useSelector , useDispatch} from 'react-redux';
import { RootState , AppDispatch } from '@/store/index';
import { clearUser } from '@/store/userSlice';

const DropdownUser = () => {

  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  const dispatch: AppDispatch = useDispatch();



  const handleLogout = () => {
    dispatch(clearUser());
    navigate('/');
  };
  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        

        <span className="h-14 w-14 rounded-full">
          <img src={user.profileImg} alt="User" className="h-14 w-14 rounded-full"/>
        </span>

      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">

            
            <li>
              <Link
                to="/auth/dashboard/account"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
             <UserRoundPen/>
                Account Settings
              </Link>
            </li>
          </ul>
          <button
          onClick={handleLogout}
           className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
           <LogOut/>
            Log Out
          </button>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
