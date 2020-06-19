import React from "react";
import {
    Button,
    Container,
    Typography,
    TextField,
    FormControl,
    Link,
    Grid,
    styled,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    root: {
        fontSize: "14px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    },
    logo: {
        paddingTop: "32px",
        paddingBottom: "24px",
    },
    text: {
        fontSize: "14px",
        fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
        marginBottom: "7px",
        fontWeight: "600",
    },
    link: {
        fontSize: "12px",
        fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
        marginBottom: "7px",
        fontWeight: "600",
    },
    header: {
        fontSize: "24px",
        fontWeight: "300",
        letterSpacing: "-0.5px",
        color: "#333",
        fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    },
    block1: {
        width: "266px",
        border: "1px solid #d8dee2",
        padding: "20px",
        borderRadius: "5px",
        backgroundColor: "#fff",
        marginTop: "16px",
    },
    input: {
        marginTop: "5px",
        marginBottom: "15px",
    },
    block2: {
        width: "266px",
        padding: "15px 20px",
        border: "1px solid #d8dee2",
        marginTop: "16px",
        borderRadius: "5px",
        fontSize: "14px",
        textAlign: "center",
        fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    },
    block3: {
        width: "300px",
        fontSize: "12px",
        fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
        padding: "40px 16px",
        marginTop: "40px",
    },
    link2: {
        fontSize: "12px",
        fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    },
    link3: {
        fontSize: "12px",
        color: "#586069",
        fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    },
});

const MyButton = styled(Button)({
    backgroundColor: "#269f42",
    backgroundImage: "linear-gradient(-180deg,#2fcb53,#269f42 90%)",
    backgroundPosition: "-.5em",
    borderColor: "rgba(27,31,35,.5)",
    padding: "6px 12px",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    textTransform: "capitalize",
    fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
});

export default function Login() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="xl">
            <GitHubIcon style={{ fontSize: 48 }} className={classes.logo} />
            <Typography variant="h1" className={classes.header}>
                Sign in to GitHub
            </Typography>
            <FormControl className={classes.block1}>
                <Typography className={classes.text}>
                    Username or email address
                </Typography>
                <TextField
                    variant="outlined"
                    size="small"
                    className={classes.input}
                />
                <Grid container>
                    <Grid item xs>
                        <Typography className={classes.text}>
                            Password
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Link className={classes.link}>
                            {"Forgot password?"}
                        </Link>
                    </Grid>
                </Grid>
                <TextField
                    variant="outlined"
                    size="small"
                    className={classes.input}
                />
                <MyButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign in
                </MyButton>
            </FormControl>
            <Typography className={classes.block2}>
                New to GitHub?
                <Link> Create an account.</Link>
            </Typography>
            <Grid container className={classes.block3}>
                <Grid item sm>
                    <Link className={classes.link2}>{"Terms"}</Link>
                </Grid>
                <Grid item sm>
                    <Link className={classes.link2}>{"Privacy"}</Link>
                </Grid>
                <Grid item sm>
                    <Link className={classes.link2}>{"Security"}</Link>
                </Grid>
                <Grid item>
                    <Link className={classes.link3}>{"Contact GitHub"}</Link>
                </Grid>
            </Grid>
        </Container>
    );
}
