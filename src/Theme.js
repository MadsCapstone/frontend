import { createTheme } from '@material-ui/core/styles';

const outer_theme = createTheme({
    palette:{
        type: "dark",
        primary: {light:"#489a9f", main:"#027d8d", dark:"#08606a"},
        secondary:{light:"#a1176b", main:"#9e196a"},
        error:{main:"#6eb8b8"},
        warning:{main:"#499aa3"}

    }
})
export default outer_theme