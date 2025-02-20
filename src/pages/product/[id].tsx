
import Head from "next/head";
import {
    ImageContainer,
    ProductContainer,
    ProductDetails
} from "../../styles/pages/product";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Image from "next/future/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

interface ProductProps{
    product:{
        id: number;
        name: string;
        imageUrl: string;
        price: string;
        defaultPriceId: string;
        description: string
    }
}


export default function Product({product}: ProductProps){

    const {isFallback} = useRouter();

    const [isCreatingCheckoutSession,setIsCreatingCheckoutSession] = useState(false);

    async function handleBuyProduct(){
        try{
            setIsCreatingCheckoutSession(true);
            const response = await axios.post("/api/checkout",{
                priceId: product.defaultPriceId
            });
            const {checkoutUrl} = response.data;
            window.location.href = checkoutUrl;
        }
        catch(err){
            setIsCreatingCheckoutSession(false);
            console.error(err);
            alert("Falha no checkout");
        }
    }



    if(isFallback){
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <Head>
                <title>{`${product.name} | Ignite Shop`}</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} alt={`Imagem camiseta: ${product.name}`} width={520} height={480}/>
                </ImageContainer>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>
                    <p>{product.description}</p>
                    <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>
                        Comprar agora
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    );
}


export const getStaticPaths : GetStaticPaths = async () =>{
    return {
        paths: [
            {
                params: {
                    id: "prod_RhXU7qbcozKHF5"
                }
            }
        ],
        fallback: true
    };
};

export const getStaticProps : GetStaticProps<any, {id: string}> = async ({params}) =>{
    const productId =params.id;

    const product = await stripe.products.retrieve(productId,{
        expand: ["default_price"]
    });

    const price = product.default_price as Stripe.Price;


    return {
        revalidate: 60 * 60 * 1,
        props:{
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat("pt-BR",{style: "currency", currency: "BRL"}).format(price.unit_amount / 100),
                defaultPriceId: price.id,
                description: product.description
            }
        }
    };
};