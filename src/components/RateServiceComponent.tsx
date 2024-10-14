import { Rating, Service } from "@/types/types";
import { Modal } from "@mui/joy";

interface Props {
    service: Service;
    ratings: Rating[];
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RateServiceComponent: React.FC<Props> = ( { service, ratings, open, setOpen } ) => {
    console.log(ratings);
    return(
        <Modal
            open={open}
            onClose={ () => setOpen(false) }
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <div> {service.id} </div>
        </Modal>
    );
}

export default RateServiceComponent;