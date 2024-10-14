import { RatingType } from "@/types/types";
import { Button, Input, Typography } from "@mui/joy";
import { Rating } from "@mui/material";
import { SetStateAction, useState } from "react";

interface Props {
    serviceID: string;
    ratings: RatingType[];
    setRatings: React.Dispatch<SetStateAction<RatingType[]>>
}

const AddRating: React.FC<Props> = ({ serviceID, ratings, setRatings }) => {
    const [rating, setRating] = useState<number | null>(2);
    const [comment, setComment] = useState("");

    const saveRating = () => {
        const newRating: RatingType = { 
            service_id: serviceID,
            id: `comment_${ratings.length}_${serviceID}`,
            comment: comment,
            rating: rating === null ? 0 : rating,
        }
        const newRatings = [...ratings, newRating]
        setRatings(newRatings);
    }

    return (
        <div>
            <Typography level="title-md"> Add your own rating </Typography>
            <Rating
                name="add-rating"
                value={rating}
                //@ts-ignore
                onChange={(event, newRating) => {
                    setRating(newRating)
                }}
            />
            <Input
                value={comment}
                onChange={(event) => { setComment(event.target.value) }}
                sx={ { marginBottom: "10px" } }
            />
            <Button onClick={saveRating} sx={{ width: "100%" }}> Rate now! </Button>
        </div>
    );
}

export default AddRating;