import Head from 'next/head'
import Image from 'next/image'
import WalletConnect from '../components/walletConects';
import styles from '../styles/Home.module.css'
import Lottery from '../components/lottery';

export default function Home() {
  return (
    <>
      <WalletConnect />
      <Lottery />
    </>
  )
}
