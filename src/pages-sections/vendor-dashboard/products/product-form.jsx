"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "@mui/lab/LoadingButton";

// GLOBAL CUSTOM COMPONENTS
import DropZone from "components/DropZone";
import FlexBox from "components/flex-box/flex-box";
import { FormProvider, TextField } from "components/form-hook";

// STYLED COMPONENTS
import { UploadImageBox, StyledClear } from "../styles";

// CUSTOM DATA MODEL


// FORM FIELDS VALIDATION SCHEMA
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  category: yup.array(yup.string()).min(1, "Category must have at least 1 items").required("Category is required!"),
  description: yup.string().required("Description is required!"),
  stock: yup.string().required("Stock is required!"),
  price: yup.string().required("Price is required!"),
  sale_price: yup.string().optional(),
  tags: yup.string().required("Tags is required!")
});


// ================================================================


// ================================================================

export default function ProductForm(props) {
  const [files, setFiles] = useState([]);
  const initialValues = {
    name: "",
    tags: "",
    stock: "",
    price: "",
    sale_price: "",
    description: "",
    category: []
  };
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema)
  });

  
// HANDLE UPDATE NEW IMAGE VIA DROP ZONE
  const handleChangeDropZone = files => {
    files.forEach(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setFiles(files);
  };

  
// HANDLE DELETE UPLOAD IMAGE
  const handleFileDelete = file => () => {
    setFiles(files => files.filter(item => item.name !== file.name));
  };
  const {
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = methods;

  
// FORM SUBMIT HANDLER
  const handleSubmitForm = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
  });
  return <Card className="p-3">
      <FormProvider methods={methods} onSubmit={handleSubmitForm}>
        <Grid container spacing={3}>
          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth name="name" label="Name" color="info" size="medium" placeholder="Name" />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField select fullWidth color="info" size="medium" name="category" placeholder="Category" label="Select Category" slotProps={{
            select: {
              multiple: true
            }
          }}>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="fashion">Fashion</MenuItem>
            </TextField>
          </Grid>

          <Grid size={12}>
            <DropZone onChange={files => handleChangeDropZone(files)} />

            <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
              {files.map((file, index) => {
              return <UploadImageBox key={index}>
                    <Box component="img" src={file.preview} width="100%" />
                    <StyledClear onClick={handleFileDelete(file)} />
                  </UploadImageBox>;
            })}
            </FlexBox>
          </Grid>

          <Grid size={12}>
            <TextField rows={6} multiline fullWidth color="info" size="medium" name="description" label="Description" placeholder="Description" />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth name="stock" color="info" size="medium" label="Stock" placeholder="Stock" />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth name="tags" label="Tags" color="info" size="medium" placeholder="Tags" />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth name="price" color="info" size="medium" type="number" label="Regular Price" placeholder="Regular Price" />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <TextField fullWidth color="info" size="medium" type="number" name="sale_price" label="Sale Price" placeholder="Sale Price" />
          </Grid>

          <Grid size={{
          sm: 6,
          xs: 12
        }}>
            <LoadingButton loading={isSubmitting} variant="contained" color="info" type="submit">
              Save product
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>;
}