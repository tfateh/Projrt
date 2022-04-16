import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
// import ProductForm from "../ProductForm/ProductForm";
import { deleteProduct } from "../../JS/actions/productsActions";
import ProductForm from "./ProductForm";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ product }) {
  const [expanded, setExpanded] = React.useState(false);

  const user = useSelector((state) => state.productsReducer.user);

  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "20px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // title={user.firstName}
        subheader={product.dateOfCreactionProduct}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://img.freepik.com/photos-gratuite/conception-appartement-studio-moderne-chambre-espace-vie_1262-12375.jpg?w=2000"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.Description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {product.userId === user.id ? (
          <>
            <ProductForm
              idProduct={product._id}
              idUser = {user.id}
              edit={true}
              product={product}
            />
            <IconButton aria-label="share">
              <DeleteIcon
                onClick={() => dispatch(deleteProduct(product._id, user.id))}
              />
            </IconButton>
          </>
        ) : null}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Characteristic :</Typography>
          <Typography paragraph>typeOfTransaction : {product.typeOfTransaction}</Typography>
          <Typography paragraph>description : {product.description}</Typography>
          <Typography paragraph>price : {product.price} $</Typography>
          <Typography paragraph>area : {product.area} m²</Typography>
          <Typography paragraph>adresseProduct : {product.adresseProduct}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}