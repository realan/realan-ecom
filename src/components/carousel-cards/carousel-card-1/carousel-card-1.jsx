import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";

// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";

// STYLED COMPONENT
import { StyledRoot } from "./styles";


// ==================================================


// ==================================================

export default function CarouselCard1({
  title,
  imgUrl,
  buttonLink,
  buttonText,
  description,
  buttonColor = "primary"
}) {
  return <StyledRoot>
      <Grid container spacing={3} alignItems="center">
        <Grid className="grid-item" size={{
        xl: 4,
        md: 5,
        sm: 6,
        xs: 12
      }}>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>

          <Button size="large" disableElevation href={buttonLink} color={buttonColor} variant="contained" className="button-link">
            {buttonText}
          </Button>
        </Grid>

        <Grid size={{
        xl: 8,
        md: 7,
        sm: 6,
        xs: 12
      }}>
          <div className="img-wrapper">
            <LazyImage fill src={imgUrl} alt={title} sizes="(max-width: 768px) 100vw, 100vw" />
          </div>
        </Grid>
      </Grid>
    </StyledRoot>;
}