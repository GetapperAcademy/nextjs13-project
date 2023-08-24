import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse, NextApiRequest } from "next";
import { DeleteUsersByUserIdApi } from "./interfaces";
import { User } from "@/models/server/User";

export default async function handler(
  req: DeleteUsersByUserIdApi.Request,
  res: NextApiResponse<DeleteUsersByUserIdApi.EndpointResponse>,
  originalReq: NextApiRequest,
) {
  try {
    const { validationResult, queryStringParameters } = req;

    if (!originalReq.session.admin) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        {
          message: "Unauthorized",
        },
        StatusCodes.Unauthorized,
      );
    }

    const adminSession = originalReq.session.admin;
    if (!adminSession.isLoggedIn || adminSession._id !== "admin-id") {
      return ResponseHandler.json<ErrorResponse>(
        res,
        {
          message: "Unauthorized",
        },
        StatusCodes.Unauthorized,
      );
    }

    if (!validationResult.isValid) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: validationResult.message! },
        StatusCodes.BadRequest,
      );
    }

    const { userId } = queryStringParameters;
    const user = await User.getById(userId);
    if (!user) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: "User not found" },
        StatusCodes.NotFound,
      );
    }

    await User.delete(user._id);

    return ResponseHandler.json<DeleteUsersByUserIdApi.SuccessResponse>(
      res,
      {},
    );
  } catch (e) {
    console.error(e);
    return ResponseHandler.json<ErrorResponse>(
      res,
      { message: "Internal error" },
      StatusCodes.InternalServerError,
    );
  }
}
