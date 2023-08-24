import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProductFe } from "@/models/client/ProductFe";

export interface GetProductsByProductIdParams {
  productId: string;
}
export interface GetProductsByProductIdResponseData {
  product: IProductFe;
}
export default apiActionBuilder<
  GetProductsByProductIdParams,
  ApiSuccessAction<
    GetProductsByProductIdResponseData,
    GetProductsByProductIdParams
  >,
  ApiFailAction<GetProductsByProductIdParams>
>(
  "apis/products/{productId}/get",
  (
    params: GetProductsByProductIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<GetProductsByProductIdParams>(
      {
        path: `/products/${params.productId}`,
        method: HttpMethod.GET,
      },
      options,
      params,
    ),
  }),
);
