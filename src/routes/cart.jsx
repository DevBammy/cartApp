import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);
  const dispatch = useDispatch();
  return (
    <section className="cart">
      <div className="header">
        <h1>Home Page</h1>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </div>
      <p>Items in Cart: {cartCount}</p>
      <div className="btn">
        <button onClick={() => dispatch(increment())}>Add to Cart</button>
        <button onClick={() => dispatch(decrement())}>Remove from Cart</button>
        <button onClick={() => dispatch(reset())}>Reset Cart</button>
      </div>
    </section>
  );
};

export default Cart;
