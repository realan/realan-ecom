import NextImage from "next/image";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";

// MUI ICON COMPONENT
import Clear from "@mui/icons-material/Clear";

// GLOBAL CUSTOM COMPONENTS
import DropZone from "components/DropZone";
import FlexBox from "components/flex-box/flex-box";


// STYLED COMPONENTS
const UploadBox = styled("div")({
  width: 170,
  height: "auto",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative"
});
const StyledClear = styled(Clear)({
  top: 5,
  right: 5,
  fontSize: 14,
  color: "red",
  cursor: "pointer",
  position: "absolute"
});
export default function BannerSlider() {
  const [newFiles, setNewFiles] = useState([]);
  const handleFormSubmit = async e => {
    e.preventDefault();
    console.log(e);
  };
  const deleteNewImage = name => {
    setNewFiles(state => state.filter(item => item.name !== name));
  };
  return <form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <Grid container spacing={3}>
        <Grid size={12}>
          <DropZone onChange={files => console.log(files)} />

          {/* PREVIEW UPLOAD IMAGES */}
          {newFiles.length > 0 ? <FlexBox gap={1} mt={2}>
              {newFiles.map((file, index) => <UploadBox key={index}>
                  <NextImage width={240} height={100} objectFit="cover" src={file.preview} layout="responsive" alt="file" />
                  <StyledClear onClick={() => deleteNewImage(file.name)} />
                </UploadBox>)}
            </FlexBox> : null}
        </Grid>

        <Grid size={12}>
          <Button type="submit" color="info" variant="contained">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </form>;
}