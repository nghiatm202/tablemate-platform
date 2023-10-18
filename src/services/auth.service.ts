import { Endpoints } from "@/constants";
import { HttpClient } from "./configs";

export class AuthServiceApi extends HttpClient {
  constructor() {
    super();
  }

  public async postSendOtpForOwner(body: TSendOtpForOwnerBody) {
    const { data } = await this.instance.post<
      TResponse<TSendOtpForOwnerResponse>
    >(Endpoints.Auth.OwnerSendOtp, {
      ...body,
    });
    return data;
  }

  public async postLoginForOwner(body: TLoginForOwnerBody) {
    const { data } = await this.instance.put<TResponse<TLoginForOwnerResponse>>(
      Endpoints.Auth.OwnerLogin,
      {
        ...body,
      }
    );
    return data;
  }
}

export const AuthService = new AuthServiceApi();
