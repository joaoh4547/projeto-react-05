
import Head from "next/head";
import { useRouter } from "next/router";
import {
    ImageContainer,
    ProductContainer,
    ProductDetails
} from "../../styles/pages/product";

export default function Product(){
    const {query} = useRouter();
    return (
        <>
            <Head>
                <title>Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                </ImageContainer>
                <ProductDetails>
                    <h1>Camiseta X</h1>
                    <span>R$ 75,90</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, incidunt doloribus? Laudantium aut voluptatum quo tenetur doloribus dicta alias fugit distinctio totam eveniet architecto placeat voluptate aperiam amet, possimus maiores.</p>
                    <button>
                        Comprar agora
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    );
}