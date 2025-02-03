import { styled, theme } from "..";

export const SuccessContainer = styled("main", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    height: 656,
    h1:{
        fontSize: theme.fontSizes["2xl"],
        color: theme.colors.gray100,
    },

    p:{
        marginTop: "2rem",
        fontSize: theme.fontSizes.xl ,
        color: theme.colors.gray300,
        textAlign: "center",
        lineHeight: 1.4,
        maxWidth: 560
    },

    a:{
        marginTop: "5rem",
        display: "block",
        fontSize: theme.fontSizes.lg,
        color: theme.colors.green500,
        textDecoration: "none",
        fontWeight: "bold",
        transition: "0.2s",
        "&:hover":{
            color: theme.colors.green300,
        }
    }
});

export const ImageContainer = styled("div", {
    width: "100%",
    maxWidth: 130,
    height: 145,
    background: "linear-gradient(120deg, #1ea483 0%, #7465d4 100% )",
    borderRadius: 8,
    padding: "0.25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    img:{
        objectFit: "cover"
    },
    marginTop: "4rem",
    

    "@media (max-width: 768px)":{
        width: "100%",
        height: 120,
        img:{
            width: "100%"
        }
    }
});