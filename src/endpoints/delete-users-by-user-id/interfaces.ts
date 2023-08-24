import { ErrorResponse, RequestI } from "@/lib/response-handler";
import { ObjectId } from "mongodb";

export namespace DeleteUsersByUserIdApi {
  export type QueryStringParameters = {
    userId: ObjectId;
  };

  export type SuccessResponse = {
    message?: string;
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;

  export interface Request extends RequestI<QueryStringParameters, null> {}
}
