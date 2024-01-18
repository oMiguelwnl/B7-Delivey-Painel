import { Product } from "@/types/Product";
import { Delete, Edit } from "@mui/icons-material";
import { Box, Button, TableCell, TableRow, Typography } from "@mui/material";

type Props = {
  item: Product;
  onEdit: (item: Product) => void;
  onDelete: (item: Product) => void;
};
export const ProductTableItem = ({ item, onEdit, onDelete }: Props) => {
  return (
    <TableRow hover>
      <TableCell sx={{ width: 50, display: { xs: "none", md: "table-cell" } }}>
        {item.id}
      </TableCell>
      <TableCell sx={{ width: { xs: 50, md: 100 } }}>
        <img src={item.image} alt="Product Image" width="100%" />
      </TableCell>
      <TableCell>
        <Typography component="strong">{item.name}</Typography>
        <Box sx={{ display: { md: "none" } }}>R$ {item.price.toFixed(2)}</Box>
      </TableCell>
      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
        R$ {item.price.toFixed(2)}
      </TableCell>
      <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
        {item.category.name}
      </TableCell>
      <TableCell sx={{ width: { xs: 50, md: 130 } }}>
        <Button size="small" onClick={() => onEdit(item)}>
          <Edit />
        </Button>
        <Button size="small" onClick={() => onDelete(item)}>
          <Delete />
        </Button>
      </TableCell>
    </TableRow>
  );
};
