import { styled, theme } from "..";

export const ProductContainer = styled("main",{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "stretch",
    gap: "4rem",
    maxWidth: 1180,
    margin: "0 auto",
    padding: "4rem",
    "@media (max-width: 1200px)":{
        gridTemplateColumns: "1fr"
    }
});

export const ImageContainer = styled("div",{
    width: "100%",
    maxWidth: 576,
    height: 656,
    
    background: "linear-gradient(120deg, #1ea483 0%, #7465d4 100% )",
    borderRadius: 8,
    padding: "0.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    img:{
        objectFit: "cover"
    }  ,
    "@media (max-width: 1200px)":{
        height: 456,
        maxWidth: 976,
    }
});

export const ProductDetails = styled("div",{
    display: "flex",
    flexDirection: "column",
    h1:{
        fontSize: theme.fontSizes["2xl"],
        color: theme.colors.gray300
    },
    span:{
        marginTop: "1rem",
        display: "block", 
        fontSize: theme.fontSizes["2xl"],
        color: theme.colors.green300
    },

    p:{
        marginTop: "2.5rem",
        fontSize: theme.fontSizes.md,
        color: theme.colors.gray300,
        lineHeight: 1.6,
    },

    button:{
        marginTop: "auto",
        backgroundColor: theme.colors.green500,
        color: theme.colors.white,
        padding: "1.25rem",
        border: 0,
        borderRadius: 8,
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: theme.fontSizes.md,
        transition: "0.2s",

        "&:not(:disabled):hover":{
            backgroundColor: theme.colors.green300,
        },

        "&:disabled":{
            cursor: "not-allowed",
            opacity: 0.6
        }
    }
});