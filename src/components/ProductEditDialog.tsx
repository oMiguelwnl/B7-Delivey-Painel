import { Category } from "@/types/Category";
import { Product } from "@/types/Product";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
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
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(event);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{product ? "Editar Produto" : "Novo Produto"}</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
        >
          <Box sx={{ mb: 2 }}>
            <InputLabel variant="standard" htmlFor="imageField">
              Imagem
            </InputLabel>
            <Input
              id="imgField"
              name="image"
              type="file"
              fullWidth
              disabled={disabled}
              inputProps={{ accept: "image/*" }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <InputLabel variant="standard" htmlFor="nameField">
              Nome
            </InputLabel>
            <TextField
              id="nameField"
              variant="standard"
              name="name"
              defaultValue={product?.name}
              required
              fullWidth
              disabled={disabled}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <InputLabel variant="standard" htmlFor="priceField">
              Preço (em R$)
            </InputLabel>
            <TextField
              id="priceField"
              variant="standard"
              type="number"
              name="price"
              defaultValue={product?.price}
              required
              fullWidth
              disabled={disabled}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <InputLabel variant="standard" htmlFor="priceField">
              Descrição
            </InputLabel>
            <TextField
              id="descField"
              variant="standard"
              name="description"
              multiline
              rows={4}
              defaultValue={product?.description}
              required
              fullWidth
              disabled={disabled}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <InputLabel variant="standard" htmlFor="catField">
              Categoria
            </InputLabel>
            <Select
              id="catField"
              variant="standard"
              name="category"
              defaultValue={product?.category.id || categories[0]?.id}
              required
              fullWidth
            >
              {categories.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button disabled={disabled} onClick={onClose}>
              Cancelar
            </Button>
            <Button disabled={disabled} type="submit">
              Salvar
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
