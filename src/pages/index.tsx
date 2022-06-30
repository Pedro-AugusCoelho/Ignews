import { GetStaticProps } from 'next';
import Head from '../../node_modules/next/head';
import { MenuMobileFooter } from '../components/MenuMobileFooter';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';


interface HomeProps {
  product:{
    priceId:string,
    amount:number,
  }
}


export default function Home({product}:HomeProps) {

  return (
    <>
      
      <Head><title>Home | ig.news</title></Head>
      
      <main className={styles.ContentConatiner}>
       
        <section className={styles.hero}>
          
          <span>Seja Bem Vindo!!</span>
          
          <h1>
           Novidades do mundo da <span>Tecnologia</span> e <span>Games</span> 
          </h1>
          
          <p>
            Tenha acesso a todas as publicações<br /> 
            <span>Por {product.amount}/Mês </span>
          </p>


          <SubscribeButton priceId={product.priceId} />
        
        </section>
        
        <div className={styles.ContainerImg}>
          <span>Seja Bem Vindo!!</span>
          <img src='/images/avatar.svg' alt='Avatar'/>
        </div>
      
      </main>

      <MenuMobileFooter />
    
    </>
  )
}

export const getStaticProps:GetStaticProps = async() => {
  
  const price = await stripe.prices.retrieve('price_1L5HJrIuyBLFQtfOmoEJ7y37');

  const product = {
    priceId:price.id,
    amount:new Intl.NumberFormat('en-US',{
      style:'currency',
      currency:'USD',
    }).format(price.unit_amount / 100),
  };
  
  return{
    props:{
      product,
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
