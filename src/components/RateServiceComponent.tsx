import { Star, StarBorder } from "@mui/icons-material";
import { 
    Divider,
    Grid,
    Modal,
    ModalClose,
    Sheet,
    Typography
} from "@mui/joy";
import { BarChart } from "@mui/x-charts";

import Comment from "./Comment";
import { Service } from "@/types/types";
import { dataset_service_01 } from "../dummy_data/rating_data_set";
import AddRating from "./AddRating";
import { useState } from "react";

interface Props {
    service: Service;
    // ratings: Rating[];
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const chartSetting = {
    xAxis: [
      {
        label: 'Number Of Comments',
      },
    ],
    width: 500,
    height: 200,
    categoryGapRatio: 0.3
};

const RateServiceComponent: React.FC<Props> = ( { service, open, setOpen } ) => {
    const dataset = [
        { "star": 1, "amount": 10 },
        { "star": 2, "amount": 10 },
        { "star": 3, "amount": 20 },
        { "star": 4, "amount": 40 },
        { "star": 5, "amount": 20 }
    ];

    const [ ratings, setRatings ] = useState(dataset_service_01);

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
                    minWidth: 500,
                    maxWidth: 500,
                    minHeight: 500,
                    maxHeight: 500,
                    borderRadius: 'md',
                    p: 3,
                    boxShadow: 'lg',
                    overflow: 'scroll'
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

                <Divider sx={ { margin: "10px" } }/>
                
                <Typography level="title-md" textAlign="left"> Breakdown </Typography>
                <BarChart
                    dataset={dataset}
                    yAxis={[{label: "rating", scaleType: 'band', dataKey: 'star' }]}
                    series={[{ dataKey: 'amount', label: 'amount' }]}
                    layout="horizontal"
                    {...chartSetting}
                >

                </BarChart>

                <Divider sx={ { margin: "10px" } } />

                <Typography level="title-md" textAlign="left"> Top Reviews </Typography>
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                {
                    ratings.map((item, index) => {
                        return(
                            <Grid key={`comment-${item.id}-${index}`}>
                                <Comment rating={item} />
                            </Grid>
                        )
                    })
                }
                </Grid>
                
                <Divider sx={ { margin: "10px" } } />
                <AddRating serviceID={service.id} ratings={ratings} setRatings={setRatings} />
              
            </Sheet>
        </Modal>
    );
}

export default RateServiceComponent;