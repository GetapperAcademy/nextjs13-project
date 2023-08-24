import { ErrorResponse, RequestI } from "@/lib/response-handler";
import { IProductFe } from "@/models/client/ProductFe";

export namespace GetProductsApi {
  export type QueryStringParameters = {};

  export type SuccessResponse = {
    message?: string;
    products: IProductFe[];
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;

  export interface Request extends RequestI<QueryStringParameters, null> {}
}
