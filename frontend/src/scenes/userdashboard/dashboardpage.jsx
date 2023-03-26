import * as React from 'react';
import {
    Box,
    TextField,
    useMediaQuery,
  } from "@mui/material";
import abi from "../../contract/LandRecords";
import { useMetaMask } from "metamask-react";
import { useNavigate } from "react-router-dom";

let Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
let contract = new web3.eth.Contract(abi.abi,"0x91864Dfa6b9Aeee350E5cc6b4226272b6cFD4569");

const Dashboardpage = async () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    
    const values = {
    fullname: "John Due",
    email: "johndue@gmail.com",
    age: "30",
    city: "Surat",
    document: "aadhar.png",
    aadharcardno: "3333-4444-5555-6666",
    pancardno: "NTDO9385",
    }

    return (
        <form>
            <Box
            component="form"
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
            >
                <TextField
                required
                id="filled-required"
                label="Full Name"
                value={values.fullname}
                defaultValue="fullname"
                variant="filled"
                sx={{ gridColumn: "span 4" }}
                />
                <TextField
                required
                id="filled-required"
                label="Email"
                value={values.email}
                defaultValue="email"
                variant="filled"
                sx={{ gridColumn: "span 2" }}
                />
                <TextField
                required
                id="filled-required"
                label="Age"
                value={values.age}
                defaultValue="age"
                variant="filled"
                sx={{ gridColumn: "span 2" }}
                />
                <TextField
                required
                id="filled-required"
                label="City"
                value={values.city}
                defaultValue="city"
                variant="filled"
                sx={{ gridColumn: "span 2" }}
                />
                <TextField
                required
                id="filled-required"
                label="Document"
                value={values.document}
                defaultValue="document"
                variant="filled"
                sx={{ gridColumn: "span 2" }}
                />
                <TextField
                required
                id="filled-required"
                label="Aadhar card no"
                value={values.aadharcardno}
                defaultValue="aadharcardno"
                variant="filled"
                sx={{ gridColumn: "span 2" }}
                />
                <TextField
                required
                id="filled-required"
                label="Pan card no"
                value={values.pancardno}
                defaultValue="pancardno"
                variant="filled"
                sx={{ gridColumn: "span 2" }}
                />
                
                
                
            </Box>

        </form>
    )
}

export default Dashboardpage;


