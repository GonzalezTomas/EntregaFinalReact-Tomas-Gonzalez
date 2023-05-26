
import { CartWidget } from '../../common/CartWidget/CartWidget';
import './Navbar.css';



export const Navbar = () => {
  return (
    <div className='columns'>
      <h1>Bombones Artesanales</h1>
      <button className='color-botones-productos'>Todos Los productos</button>
      <button className='color-botones-productos'>Bombones</button>
      <button className='color-botones-productos'>Chocolates</button>
      <CartWidget/>
    </div>
  );
};
