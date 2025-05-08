import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../theme.css";



export const buttonStyles = style({
    minWidth: "113px",
    height: "53px",
    padding: "16px",
    borderRadius: "8px",
    fontSize: "14px",
    lineHeight: "150%",
    letterSpacing: "0px",
    transition: "0.2s ease-in-out",
    cursor: "pointer",
    fontFamily: vars.font,

})
export const buttonStylesVisualVariants = styleVariants({
    primary: {
        backgroundColor: vars.colors.grey[900],
        color: vars.colors.white.white,
        border: `1px solid rgba(0, 0, 0, 0)`,
        fontWeight: "bold",
        selectors: {
            "&:hover:not(:disabled)": {
                backgroundColor: vars.colors.grey[500],
            }
        }
    },
    secondary: {
        color: vars.colors.grey[900],
        backgroundColor: vars.colors.grey[100],
        fontWeight: "bold",
        border: `1px solid rgba(0, 0, 0, 0)`,
        selectors: {
            "&:hover:not(:disabled)": {
                backgroundColor: vars.colors.white.white,
                border: `1px solid ${vars.colors.grey[900]}`,
            }
        },
    },
    tertiary: {
        padding: "0px",
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: vars.colors.grey[500],
        fontWeight: "regular",
        selectors: {
            "&:hover:not(:disabled)": {
                color: vars.colors.grey[900],
            }
        }
    },
    destroy: {
        backgroundColor: vars.colors.secondary.red,
        color: vars.colors.white.white,
        fontWeight: "bold",
        opacity: "1",
        selectors: {
            "&:hover:not(:disabled)": {
                opacity: "0.8",
            }
        }
    },
})
export const buttonStylesFullWidthVariants = styleVariants({
    true: {
        width: "100%",
    },
    false: {
        width: "fit-content",
    }
})
