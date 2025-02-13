import { Fragment } from "react";
import { useFieldArray } from "react-hook-form";

// MUI
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// MUI ICON COMPONENT
import Delete from "@mui/icons-material/Delete";

// GLOBAL CUSTOM COMPONENTS
import { TextField } from "components/form-hook";
import FlexBetween from "components/flex-box/flex-between";
export default function ColumnTwoLinks() {
  const {
    fields,
    append,
    remove
  } = useFieldArray({
    name: "column_two_links"
  });
  return <Fragment>
      <Grid size={12}>
        <FlexBetween>
          <Typography variant="h4">Second Column Content</Typography>

          <Button color="info" variant="contained" onClick={() => {
          append({
            _id: Date.now(),
            name: "",
            link: ""
          });
        }}>
            Add Item
          </Button>
        </FlexBetween>
      </Grid>

      <Grid size={12}>
        <TextField fullWidth color="info" size="medium" label="Heading Name" name="column_two_heading" />
      </Grid>

      {fields.map((item, index) => <Grid container size={12} spacing={2} key={item.id}>
          <Grid size={5}>
            <TextField fullWidth label="Name" color="info" size="medium" name={`column_two_links.${index}.name`} />
          </Grid>

          <Grid size={5}>
            <TextField fullWidth label="Link" color="info" size="medium" name={`column_two_links.${index}.link`} />
          </Grid>

          <Grid size={2}>
            <IconButton onClick={() => remove(index)}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>)}
    </Fragment>;
}