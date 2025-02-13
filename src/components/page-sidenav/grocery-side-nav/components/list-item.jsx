import Typography from "@mui/material/Typography";
import FlexBox from "components/flex-box/flex-box";
import IconComponent from "components/IconComponent";


// ==============================================================


// ==============================================================

export default function ListItem({
  title,
  icon
}) {
  return <FlexBox py={1} gap={1.5} alignItems="center">
      <IconComponent icon={icon} fontSize="small" />
      <Typography variant="h6">{title}</Typography>
    </FlexBox>;
}