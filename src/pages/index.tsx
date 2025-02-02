import "keen-slider/keen-slider.min.css";
import Head from "next/head";
import { HomeContainer, Product } from "../styles/pages/home";
import Image, { StaticImageData } from "next/future/image";
import image1 from "../assets/camisetas/1.png";
import image2 from "../assets/camisetas/2.png";
import image3 from "../assets/camisetas/3.png";
import image4 from "../assets/camisetas/4.png";

import { useKeenSlider } from "keen-slider/react";


interface Product{
    image: StaticImageData,
    price: number
}

const camisetas: Record<number, Product> = {
    1: {
        image: image1,
        price: 19.99,
    },
    2: {
        image: image2,
        price: 24.99,
    },
    3: {
        image: image3,
        price: 17.99,
    },
    4: {
        image: image4,
        price: 22.99,
    },
};

console.log();

export default function Home(props) {

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
                <pre>
                    {JSON.stringify(props)}
                </pre>
                {Array.from({length: Object.entries(camisetas).length}).map((_, i) =>{
                    return (
                        <Product key={i} href={`product/${i+1}`} className="keen-slider__slide">
                            <Image src={camisetas[i+1].image} alt={`camiseta-${i+1}`} width={520} height={480}/>
                            <footer>
                                <strong>Camiseta {i+1}</strong>
                                <span>{camisetas[i+1].price.toLocaleString("pt-BR", {style: "currency", currency:"BRL"})}</span>
                            </footer>
                        </Product>
                    );
                })}
            </HomeContainer>
        </>
    );
}

export const getServerSideProps = () =>{
    console.log("getServerSideProps");
    return {
        props: {
            list: [1,2,3]
        }
    };
};