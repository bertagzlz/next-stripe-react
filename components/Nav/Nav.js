import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import styles from './Nav.module.css';

import { useCart } from '../../hooks/use-cart.js';

const Nav = () => {
  const { subtotal } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        <Link href="/">
     JRP (Valencia)
        </Link>
      </p>
      <p className={styles.navCart}>
        <Link href="/cart">

            <FaShoppingCart /> {subtotal.toFixed(2)}€

        </Link>
      </p>
    </nav>
  )
}

export default Nav;
