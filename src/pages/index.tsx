import "keen-slider/keen-slider.min.css";
import Head from "next/head";
import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from "keen-slider/react";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Image from "next/future/image";
import Link from "next/link";


interface HomeProps{
    products: {
        id: number;
        name: string;
        imageUrl: string;
        price: string;
    }[]
}



export default function Home({products}: HomeProps) {

    const [sliderRef]  = useKeenSlider({slides: {
        perView: 2.25,
        spacing: 48,
        
    }});
    return (
        <>
            <Head>
                <title>Home | Ignite Shop</title>
            </Head>
            <HomeContainer ref={sliderRef} className="keen-slider">
                {products.map((p) =>{
                    return (
                        <Link  key={p.id}   href={`product/${p.id}`} prefetch={false} >
                            <Product 
                                className="keen-slider__slide"
                            >
                                <Image src={p.imageUrl} alt={`Imagem camiseta: ${p.name}`} width={520} height={480}/>
                                <footer>
                                    <strong>{p.name}</strong>
                                    <span>{p.price}</span>
                                </footer>
                            </Product>
                        </Link>
                    );
                })}
            </HomeContainer>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({expand: ["data.default_price"] });

    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price;
        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat("pt-BR",{style: "currency", currency: "BRL"}).format(price.unit_amount / 100)
        };
    });

    return {
        props: {
            products
        },
        revalidate: 60 * 60 * 2
    };
};