"use client";

import { Fragment, useState } from "react";
import Collapse from "@mui/material/Collapse";

// GLOBAL CUSTOM COMPONENTS
import AccordionHeader from "components/accordion";

// LOCAL CUSTOM COMPONENT
import ListItem from "./list-item";
import { renderChild } from "./render-child";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default function NavAccordion({
  item
}) {
  const {
    icon,
    title,
    child
  } = item;
  const [open, setOpen] = useState(true);
  return <Fragment>
      <AccordionHeader open={open} className="accordion" onClick={() => setOpen(state => !state)}>
        <ListItem icon={icon} title={title} />
      </AccordionHeader>

      {/* RENDER NESTED ITEMS */}
      {child ? <Collapse in={open}>{renderChild(child)}</Collapse> : null}
    </Fragment>;
}