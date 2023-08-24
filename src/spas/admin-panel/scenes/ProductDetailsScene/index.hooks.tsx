import { useParams } from "react-router";
import { actions, selectors } from "@/spas/admin-panel/redux-store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const useProductDetailsScene = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(selectors.getCurrentProduct);
  const isLoadingProduct = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.getProductsByProductId.api),
  );

  useEffect(() => {
    dispatch(actions.getProductsByProductId.request({ productId }));
  }, [dispatch, productId]);

  return { product, isLoadingProduct };
};
