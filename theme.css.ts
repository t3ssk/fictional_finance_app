import { createTheme, globalFontFace } from '@vanilla-extract/css';
import * as tokens from "./tokens.json"
const publicSans = "publicSans"

 globalFontFace(publicSans,[
    {
        src: 'url("../../assets/fonts/static/PublicSans-Bold.ttf")',
        fontWeight: "bold",
    }, {
        src: 'url("../../assets/fonts/static/PublicSans-Regular.ttf")',
        fontWeight: "regular",
    }
 ])

export const [themeClass, vars] = createTheme({
  ...tokens,
  font: publicSans,
});
