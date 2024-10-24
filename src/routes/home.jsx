import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/cartSlice';
import { login, logOut } from '../redux/userSlice';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Home = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);
  const user = useSelector((state) => state.user.user);

  console.log(user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
    toast.success('user logged in succesfully');
  };

  const handleLogOut = () => {
    dispatch(logOut());
    toast.success('user logged out succesfully');
    toast.error('this is an error');
  };

  return (
    <section className="home">
      <div className="header">
        <h1>Home Page</h1>

        <div className="links">
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <>
        {!user ? (
          <h3 onClick={handleLogin}>Login</h3>
        ) : (
          <>
            <p>Items in Cart: {cartCount}</p>
            <div className="btn">
              <button onClick={() => dispatch(increment())}>Add to Cart</button>
              <button onClick={() => dispatch(decrement())}>
                Remove from Cart
              </button>
              <button onClick={() => dispatch(reset())}>Reset Cart</button>
            </div>

            <h3 onClick={handleLogOut}>Log Out</h3>
          </>
        )}
      </>
    </section>
  );
};

export default Home;
