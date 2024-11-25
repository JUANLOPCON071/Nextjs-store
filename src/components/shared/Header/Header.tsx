import Link from 'next/link'
import React from 'react'
import styles from './Header.module.sass'
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'
import  ShoppingCart  from '../ShoppingCart'
import dynamic from 'next/dynamic'

const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'),{ssr: false})

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
          <nav>
            <ul className={styles.Header__list}>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/store">
                <li>Store</li>
              </Link>
            </ul>
          </nav>
          <div className={styles.Header__user}>
            {customer?.firstName ?(<p>Hola! {customer.firstName}</p>) : (<Link href="/login">Login</Link>)}
            <NoSSRShoppingCart/>
          </div>
    </header>
  )
}
