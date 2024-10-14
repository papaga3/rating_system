import { AspectRatio, Card, Typography } from "@mui/joy";
import StarIcon from '@mui/icons-material/Star';

import { Service } from "@/types/types";

interface Props {
    service: Service;
}

const ServiceComponent: React.FC<Props> = ( { service } ) => {
    return (
        <Card sx={{ display: "inline-block", width: "300px", height: "300px" }}>
            <div>
                <Typography level="title-lg" sx={ {height: "50px"} }> {service.name} </Typography>
            </div>
            <AspectRatio>

            </AspectRatio>
            <Typography> Average rating: { service.avgRating } <StarIcon sx={ {verticalAlign: "text-bottom"} } htmlColor="#ffbe33"/> </Typography>
        </Card>
    );
}

export default ServiceComponent;