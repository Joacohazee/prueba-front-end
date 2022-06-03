import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const Cards = ({ data }) => {
  // console.log(data);
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="194"
          image={`https://www.themoviedb.org/t/p/w220_and_h330_bestv2${data.poster_path}`}
          alt="Movie image"
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {data.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {data.overview}
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;
