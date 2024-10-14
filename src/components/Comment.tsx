import { RatingType } from "@/types/types";
import { Star } from "@mui/icons-material";
import { Card, Typography } from "@mui/joy";

interface Props {
    rating: RatingType;
}

const Comment: React.FC<Props> = ({ rating }) => {
    return(
        <Card sx={{ display: "inline-block", width: "200px", height: "100px" }}>
            <Typography level="title-sm"> { rating.rating } <Star sx={ {verticalAlign: "text-bottom"} } htmlColor="#ffbe33"/> </Typography>
            <Typography level="body-sm"> { rating.comment } </Typography>
        </Card>
    );
}

export default Comment;