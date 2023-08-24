import { useCallback, useEffect, useMemo, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/admin-panel/redux-store";
import { IProductFe } from "@/models/client/ProductFe";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

export const useProductsScene = () => {
  const dispatch = useDispatch();
  const productsList = useSelector(selectors.getProductsList);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const navigate = useNavigate();

  const handleDeleteProduct = useCallback(
    (productId: string) => {
      dispatch(actions.deleteProductsByProductId.request({ productId }));
    },
    [dispatch],
  );

  const columns = useMemo<GridColDef<IProductFe>[]>(
    () => [
      {
        field: "id",
      },
      {
        field: "name",
        flex: 1,
      },
      {
        field: "description",
        flex: 2,
      },
      {
        field: "price",
      },
      {
        field: "delete",
        headerName: "",
        renderCell: (params) => {
          return (
            <IconButton onClick={() => handleDeleteProduct(params.row._id)}>
              <DeleteIcon />
            </IconButton>
          );
        },
      },
      {
        field: "details",
        headerName: "",
        renderCell: (params) => {
          return (
            <IconButton onClick={() => navigate(params.row._id)}>
              <VisibilityIcon />
            </IconButton>
          );
        },
      },
    ],
    [handleDeleteProduct, navigate],
  );

  const rows = useMemo(() => {
    return productsList.map((product) => ({
      ...product,
      id: product._id,
    }));
  }, [productsList]);

  const handleNewProduct = useCallback(() => {
    setShowAddProductForm((prev) => !prev);
  }, []);

  useEffect(() => {
    dispatch(actions.getProducts.request({}));
  }, [dispatch]);

  return {
    handleNewProduct,
    rows,
    columns,
    showAddProductForm,
  };
};
