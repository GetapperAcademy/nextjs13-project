import { YupShapeByInterface } from "@/lib/response-handler";
import * as yup from "yup";
import { DeleteUsersByUserIdApi } from "./interfaces";
import { yupObjectId } from "@/lib/mongodb/mongo-dao";

const queryStringParametersValidations =
  (): YupShapeByInterface<DeleteUsersByUserIdApi.QueryStringParameters> => ({
    userId: yupObjectId().required(),
  });

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
});
