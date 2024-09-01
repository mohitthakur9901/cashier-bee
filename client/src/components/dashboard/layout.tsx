import Sidebar from './Sidebar'


const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 ml-16 mt-16 p-4'>
      
        <div className='mt-4'>
          dashboard
        </div>
      </div>
    </div>
  )
}

export default Dashboard
