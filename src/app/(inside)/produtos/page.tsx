"use client";

import { OrderItem } from "@/components/OrderItem";
import { ProductTableItem } from "@/components/ProductTableItem";
import { ProductTableSkeleton } from "@/components/ProductTableSkeleton";
import { api } from "@/libs/api";
import { dateFormat } from "@/libs/dateFormat";
import { Category } from "@/types/Category";
import { Order } from "@/types/Order";
import { OrderStatus } from "@/types/OrderStatus";
import { Product } from "@/types/Product";
import { Refresh, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    setProducts(await api.getProducts());
    setCategories(await api.getCategories());
    setLoading(false);
  };

  const handleNewProduct = () => {};

  const handleEditProduct = (product: Product) => {};

  const handleDeleteProduct = (product: Product) => {};
  return (
    <>
      <Box sx={{ my: 3 }}>
        <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}>
          <Typography component="h5" variant="h5" sx={{ color: "#555", mr: 2 }}>
            Produtos
          </Typography>
          <Button onClick={handleNewProduct}>Novo Produto</Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ width: 50, display: { xs: "none", md: "table-cell" } }}
              >
                ID
              </TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                Preço
              </TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                Categoria
              </TableCell>
              <TableCell sx={{ width: { xs: 50, md: 130 } }}>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {loading && (
              <>
                <ProductTableSkeleton />
                <ProductTableSkeleton />
                <ProductTableSkeleton />
              </>
            )}
            {!loading &&
              products.map((item) => (
                <ProductTableItem
                  key={item.id}
                  item={item}
                  onEdit={handleEditProduct}
                  onDelete={handleDeleteProduct}
                />
              ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default Page;
