import React from "react";
import { Skeleton, TableCell, TableRow } from "@mui/material";

export const ProductTableSkeleton = () => {
  return (
    <TableRow>
      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell sx={{ width: { xs: 50 , md: 100 }}}>
        <Skeleton variant="circular" width={50} height={50} />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
    </TableRow>
  );
};
