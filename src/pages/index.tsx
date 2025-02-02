import { styled } from "../styles";

const Button = styled("button",{
    display: "flex",
    backgroundColor: "$green500",
    borderRadius: 8,
    border: 0,
    padding: "4px 8px",
    span:{
        fontWeight: "bold"
    },
    transition: "0.2s",
    gap: 5,
    "&:hover":{
        filter: "brightness(0.8)"
    }

});

export default function Home() {
    return (
        <>
            <Button>
            Enviar 
                <span>teste</span>
            </Button>
            <h1>teste</h1>
        </>
    );
}
