import { Card, CardContent, List, Typography } from "@mui/material";
import VerifyUser from "./verifyuser";
import VerifyLandPage from "./verifylandpage";
import TransferOwnershipPage from "./transferownershippage";
import { useNavigate } from "react-router-dom";



const Dashboardpage = () => {
    const navigate = useNavigate();

    return (
        <List sx = {{ display: "flex" }}>
            <Card sx={{ 
                margin: "0 auto",
                height: "125px",
                width: "350px",
                bgcolor: "lightGreen",
                }}>
                    <CardContent>
                        <Typography>
                            Verify user requests
                        </Typography>
                        <Typography sx={{fontSize: "40px"}}>
                            1
                        </Typography>
                    </CardContent>
            </Card>
            <Card sx={{ 
                margin: "0 auto",
                height: "125px",
                width: "350px",
                bgcolor: "lightBlue",
                }}> 
                <CardContent>
                    <Typography>
                        Verify land requests
                    </Typography>
                    <Typography sx={{fontSize: "40px"}}>
                        1
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{
                margin: "0 auto",
                height: "125px",
                width: "350px",
                bgcolor: "yellow",
                }}>
                <CardContent>
                    <Typography>
                        Total Land Transfers
                    </Typography>
                    <Typography sx={{fontSize: "40px"}}>
                        1
                    </Typography>
                </CardContent>
            </Card>
        </List>
    )
}

export default Dashboardpage;