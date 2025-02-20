import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImage from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import Image from "next/future/image";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
    
    return (
        <Container>
            <Header>
                <Image priority  src={logoImage}   alt="logo"/>
            </Header>
            <Component {...pageProps} />
        </Container>
    );
}
