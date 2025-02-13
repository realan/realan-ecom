import { format } from "date-fns";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default function UserInfo({
  user
}) {
  return <Card sx={{
    marginTop: 3,
    display: "flex",
    flexWrap: "wrap",
    padding: "0.75rem 1.5rem",
    flexDirection: {
      md: "row",
      xs: "column"
    },
    alignItems: {
      md: "center",
      xs: "flex-start"
    },
    justifyContent: {
      md: "space-between",
      xs: "flex-start"
    }
  }}>
      <TableRowItem title="First Name" value={user.name.firstName} />
      <TableRowItem title="Last Name" value={user.name.lastName} />
      <TableRowItem title="Email" value={user.email} />
      <TableRowItem title="Phone" value={user.phone} />
      <TableRowItem title="Birth date" value={format(new Date(user.dateOfBirth), "dd MMM, yyyy")} />
    </Card>;
}
function TableRowItem({
  title,
  value
}) {
  return <FlexBox flexDirection="column" p={1}>
      <Typography variant="body1" sx={{
      color: "grey.600",
      mb: 0.5
    }}>
        {title}
      </Typography>

      <span>{value}</span>
    </FlexBox>;
}