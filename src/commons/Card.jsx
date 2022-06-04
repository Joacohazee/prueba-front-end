import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import SingleMovie from "./SingleMovie";

const Cards = ({ data, language }) => {

  const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

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
          <Button onClick={handleToggle} size="small">{language === 'en-US' ? 'Share' : 'mostrar'}</Button>
          <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <SingleMovie  movie={data} />
        </Backdrop>
      </div>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;
