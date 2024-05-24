import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <div className="mt-3 d-flex justify-content-between">
        
        <div className="">
        <span className='h3 border-3 rounded-start-2  py-1 px-1 bg-black text-white'>Dummy</span>
        <span className='h3 border-1 rounded-end-2 p-1 bg-warning text-black '>App</span>
        <div className=' mt-2'>Mern Crud App</div>
        </div>

        <div className="">
            
            <Link to="/view-books" className="btn btn-warning me-1">View List</Link>
            <Link to="/create-book" className='btn btn-primary'>Create Books</Link>
        </div>
      </div>
    </>
    
  )
}

export default Header