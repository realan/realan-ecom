import Link from "next/link";
import Typography from "@mui/material/Typography";


// ==============================================================


// ==============================================================

export default function NavLink2({
  url,
  color,
  title = "SHOP NOW",
  borderColor = "primary.600"
}) {
  return <Link href={url}>
      <Typography variant="body1" sx={{
      borderBottom: "2px solid",
      display: "inline",
      fontWeight: 600,
      borderColor,
      color
    }}>
        {title}
      </Typography>
    </Link>;
}