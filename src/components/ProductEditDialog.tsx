import { Category } from "@/types/Category";
import { Product } from "@/types/Product";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FormEvent } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (event: FormEvent<HTMLFormElement>) => void;
  categories: Category[];
  product?: Product;
  disabled?: boolean;
};

export const ProductEditDialog = ({
  open,
  onClose,
  onSave,
  categories,
  product,
  disabled,
}: Props) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Novo Produto</DialogTitle>
      <DialogContent></DialogContent>
    </Dialog>
  );
};
