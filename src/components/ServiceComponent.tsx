import { Card } from "@mui/joy";

import { Service } from "@/types/types";

interface Props {
    service: Service;
}

const ServiceComponent: React.FC<Props> = ( { service } ) => {
    return (
        <Card sx={{ orientation:"horizontal", width: "10rem" }}>
            name: {service.name}
            rating: { service.avgRating }
        </Card>
    );
}

export default ServiceComponent;