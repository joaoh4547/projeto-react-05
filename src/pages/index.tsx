import "keen-slider/keen-slider.min.css";
import Head from "next/head";
import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from "keen-slider/react";
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";
import Image from "next/future/image";


interface HomeProps{
    products: {
        id: number;
        name: string;
        imageUrl: string;
        price: number;
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
                <title>Ignite Shop</title>
            </Head>
            <HomeContainer ref={sliderRef} className="keen-slider">
                {products.map((p) =>{
                    return (
                        <Product key={p.id} href={`product/${p.id}`} className="keen-slider__slide">
                            <Image src={p.imageUrl} alt={`Imagem camiseta: ${p.name}`} width={520} height={480}/>
                            <footer>
                                <strong>{p.name}</strong>
                                <span>{p.price.toLocaleString("pt-BR", {style: "currency", currency:"BRL"})}</span>
                            </footer>
                        </Product>
                    );
                })}
            </HomeContainer>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await stripe.products.list({expand: ["data.default_price"] });

    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price;
        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: price.unit_amount / 100
        };
    });

    return {
        props: {
            products
        },
    };
};