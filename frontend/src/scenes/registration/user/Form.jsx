
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import axios from "axios"
import { useState } from "react";
import abi from "../../../contract/LandRecords";
import { useMetaMask } from "metamask-react";
import { useNavigate } from "react-router-dom";

let Web3 = require("web3");

const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    age: yup.string().required("required"),
    city: yup.string().required("required"),
    document: yup.string().required("required"),
    aadharcardno: yup.string().required("required"),
    pancardno: yup.string().required("required"),
  });


  const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    city: "",
    document: "",
    aadharcardno: "",
    pancardno: "",
  };


const Form = () => {
    const { palette } = useTheme();
    const [file, setFile] = useState()
    const [myipfsHash, setIPFSHASH] = useState('');
    const { status, connect, account, chainId, ethereum } = useMetaMask();
    const navigate = useNavigate();
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    //console.log(web3)
    //console.log(abi.abi)
    let contract = new web3.eth.Contract(abi.abi,"0x91864Dfa6b9Aeee350E5cc6b4226272b6cFD4569");
    console.log(account)
    const handleFile=async (fileToHandle) =>{

    

      console.log('starting')
  
      // initialize the form data
      const formData = new FormData()
  
      // append the file form data to 
      formData.append("file", fileToHandle)
  
      // call the keys from .env
  
      const API_KEY = "7d9a7ff16c2d035d32d4";
      const API_SECRET = "96fcf1ec6ddde4206ceed8f8c7eccfe287889aeb33aa94594c93b780581c0ec1";
  
      // the endpoint needed to upload the file
      const url =  `https://api.pinata.cloud/pinning/pinFileToIPFS`
  
      const response = await axios.post(
        url,
        formData,
        {
            maxContentLength: "Infinity",
            headers: {
                "Content-Type": `multipart/form-data;boundary=${formData._boundary}`, 
                'pinata_api_key': API_KEY,
                'pinata_secret_api_key': API_SECRET
  
            }
        }
    )

    setIPFSHASH(response.data.IpfsHash)
    console.log(myipfsHash);
    }
    
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleSubmit =(e)=>{
      e.preventDefault();
    }

    return (
        <Formik 
            initialValues={initialValuesRegister} 
            validationSchema={registerSchema}
        >
        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            setFieldValue,
        }) => (
        <form onSubmit={handleSubmit}>
        <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
            <TextField
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={
                  Boolean(touched.lastName) && Boolean(errors.lastName)
                }
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
            
            <TextField
                  label="Age"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.age}
                  name="age"
                  error={
                    Boolean(touched.age) && Boolean(errors.age)
                  }
                  helperText={touched.age && errors.age}
                  sx={{ gridColumn: "span 2" }}
                />
            <TextField
                  label="City"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.city}
                  name="city"
                  error={Boolean(touched.city) && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                  sx={{ gridColumn: "span 2" }}
                />
            <Box
                  gridColumn="span 4"
                  border={`1px solid ${palette.neutral.medium}`}
                  borderRadius="5px"
                  p="1rem"
                >
                <input type="file" onChange={(event)=>setFile(event.target.files[0])}/>Add document
                  <Button onClick={()=>handleFile(file)} > Upload </Button>
            </Box>
            <TextField
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
                />
            <TextField
                  label="Aadhar card number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.aadharcardno}
                  name="aadharcardno"
                  error={
                    Boolean(touched.aadharcardno) && Boolean(errors.aadharcardno)
                  }
                  helperText={touched.aadharcardno && errors.aadharcardno}
                  sx={{ gridColumn: "span 4" }}
                />
            <TextField
                  label="Pan card number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.pancardno}
                  name="pancardno"
                  error={
                    Boolean(touched.aadharcardno) && Boolean(errors.pancardno)
                  }
                  helperText={touched.aadharcardno && errors.pancardno}
                  sx={{ gridColumn: "span 4" }}
                />

          </Box>
          
          <Box>
          <Button
              onClick={()=>{
                console.log(values)
                const docUrl = `https://gateway.pinata.cloud/ipfs/${myipfsHash}`
                //const reg = contract.methods.registerNewUser();
                //const res = await contract.methods.registerNewUser(values.fullName,values.email,values.age,values.city,values.aadharcardno,values.pancardno,docUrl).send({from:account});
                contract.methods.registerNewUser(
                  values.firstName + values.lastName,
                  values.email,
                  values.age,
                  values.city,
                  values.aadharcardno,
                  values.pancardno,
                  docUrl).send({from:account,gas:3000000}).then(console.log);
                  navigate("/user");
                }
                
              }
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              {"REGISTOR"}
            </Button>
            <Typography
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              {"Already have an account? Login here."}
            </Typography>
          </Box>

        </form>
      )}
        
        </Formik>
    )

}


export default Form;