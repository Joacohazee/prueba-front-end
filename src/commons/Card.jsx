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
import { useSelector } from "react-redux";

const Cards = ({ data }) => {
  const isDark = useSelector(state => state.mode.isDark)

  const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

  return (
    <Box width="300px" >
      <Card sx={{bgcolor: 'secondary.main'}}>
        <CardMedia
          component="img"
          height="194"
          image={`https://www.themoviedb.org/t/p/w220_and_h330_bestv2${data.poster_path}`}
          alt="Movie image"
        />
        <CardContent>
          <Typography variant="body1" sx={{color: `${isDark ? 'white' : ''}`}}>
            {data.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{color: `${isDark ? 'white' : ''}`}} onClick={handleToggle} size="small">
            <Typography variant="body1" color="primary">share</Typography>
          </Button>
          <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <SingleMovie  movie={data} mode={isDark}/>
        </Backdrop>
      </div>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;
