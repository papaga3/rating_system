import { AspectRatio, Button, Card, CardActions, Typography } from "@mui/joy";
import StarIcon from '@mui/icons-material/Star';

import { Service } from "@/types/types";
import { useState } from "react";
import RateServiceComponent from "./RateServiceComponent";

interface Props {
    service: Service;
}

const ServiceComponent: React.FC<Props> = ( { service } ) => {
    // Dummy Data
    const [openRating, setOpenRating] = useState(false);

    return (
        <div>
            <Card sx={{ display: "inline-block", width: "300px", height: "300px" }}>
                <div>
                    <Typography level="title-lg" sx={ {height: "50px"} }> {service.name} </Typography>
                </div>
                <AspectRatio>

                </AspectRatio>
                <Typography> Average rating: { service.avgRating } <StarIcon sx={ {verticalAlign: "text-bottom"} } htmlColor="#ffbe33"/> </Typography>
                <CardActions>
                    <Button variant="solid" onClick={() => setOpenRating(true)} >
                        Detailed Rating
                    </Button>
                </CardActions>
            </Card>
            <RateServiceComponent service={service} open={openRating} setOpen={setOpenRating} />
        </div>
    );
}

export default ServiceComponent;