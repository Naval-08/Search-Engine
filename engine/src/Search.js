import InputBase from "@mui/material/InputBase";
import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@material-ui/core/Card";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import { purple } from "@mui/material/colors";

export default function SearchBar(props) {
    const classes = useStyles();
    const [change, setChange] = useState("");

    const handleChange = (event) => {
        setChange(event.target.value);
    };
    const compress = (s) => {
        s = s.toString();
        return s.slice(0, 9) + "..." + s.slice(s.length - 8, s.length);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setOnChainSearch(change.trim());
        setChange("");
    };

    const ColorButton = styled(Button)(({ theme }) => ({
        marginLeft: "10px",
        color: theme.palette.getContrastText(purple[500]),
        // backgroundColor: "rgb(21, 27, 36) ",
        "&:hover": {
            // backgroundColor: "rgb(15, 20, 30) ",
        },
    }));

    return (
        <>
            <Card className={classes.root}>
                <div className={classes.div1}>
                    <SearchIcon className={classes.icon1} />

                    <form onSubmit={handleSubmit}>
                        <InputBase
                            value={change}
                            onChange={handleChange}
                            placeholder="Search"
                            inputProps={{ min: "0" }}
                            required="True"
                            className={classes.input}
                        />
                    </form>
                </div>
            </Card>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "337px",
        margin: theme.spacing(1),
        // background: "",
        borderRadius: "10px",
        border: '1px black solid'
    },
    div1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "5px",
    },
    input: {
        width: "220px",
        borderRadius: "5px",
        background: "",
        color: "white",
        marginTop1: "3px",
        fontFamily: "poppins",
        alignItems: "center",
        paddingLeft: "4px",
    },

    icon1: { height: "45px", width: "30px", color: "grey" },
    icon2: { height: "20px", width: "25px", color: "grey" },
}));
