import { Rating, Service } from "@/types/types";
import { Star, StarBorder } from "@mui/icons-material";
import { 
    Divider,
    Modal,
    ModalClose,
    Sheet,
    Typography
} from "@mui/joy";

interface Props {
    service: Service;
    ratings: Rating[];
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RateServiceComponent: React.FC<Props> = ( { service, ratings, open, setOpen } ) => {
    console.log(ratings);
    const roundScore = Math.round(service.avgRating);
    let starArray = [0, 0, 0, 0, 0];
    for(let i = 0; i < roundScore; i++) {
        starArray[i] = 1;
    }

    return(
        <Modal
            open={open}
            onClose={ () => setOpen(false) }
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'top' }}
            aria-labelledby={`modal-title-${service.id}`}
            aria-describedby={`modal-desc-${service.id}`}
        >
            <Sheet
                variant="outlined"
                sx={{ 
                    minWidth: 300,
                    maxWidth: 500,
                    minHeight: 300,
                    maxHeight: 500,
                    borderRadius: 'md',
                    p: 3,
                    boxShadow: 'lg'
                }}
            >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography level="title-md" textAlign="left"> {service.name} </Typography> 
                <Divider sx={ { margin: "10px" } }/>
                <Typography level="body-md">
                    Average Rating: 
                    {
                        starArray.map((item, index) => {
                            if(item === 0) {
                                return (<StarBorder key={`rating-star-${index}`} htmlColor="#ffbe33" sx={ {verticalAlign: "text-bottom"} } />);
                            }
                            if(item === 1) {
                                return (<Star key={`rating-star-${index}`} htmlColor="#ffbe33" sx={ {verticalAlign: "text-bottom"} } />);
                            }
                        })
                    }
                    { service.avgRating } 
                </Typography>
            </Sheet>
        </Modal>
    );
}

export default RateServiceComponent;