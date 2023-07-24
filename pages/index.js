import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

import { useCart } from '../hooks/use-cart.js';

import products from '../products.json';

export default function Home() {

  const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Next App para Universidades</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Productos de aprendizaje de programación para Universidades!
        </p>
          <p>Valencia, Salamanca, UCAM, UOC.. </p>

        <ul className={styles.grid}>
          {products.map(product => {
            const { id, title, image, description, price } = product;
            return (
              <li key={id} className={styles.card}>
                <Link href={`/products/${id}`}>

                    <img src={image} alt={title} />
                    <h3>{ title }</h3>
                    <p>{ price } Días</p>
                    <p>{ description }</p>

                </Link>
                <p>
                  <button className={styles.button} onClick={() => addToCart({ id })}>
                    Solicitar
                  </button>
                </p>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
          <Link href='
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"'
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </Link>
      </footer>
    </div>
  )
}
