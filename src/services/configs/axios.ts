import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import queryString from "query-string";

interface IOptions {
  timeout: number;
  language: "en" | "vi";
}

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  constructor(baseURL?: string, options = {} as IOptions) {
    this.instance = axios.create({
      baseURL: baseURL ?? process.env.NEXT_PUBLIC_ENDPOINT_API,
      paramsSerializer: this.getRequestParams,
      timeout: options.timeout || 20000,
      headers: {
        "Content-type": "application/json",
        "X-Appwrite-Project": process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
      },
    });

    this.requestInterceptor();
    this.responseInterceptor();
  }

  private getRequestParams(params = {}) {
    return queryString.stringify(params);
  }

  private requestInterceptor() {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError
    );
  }

  private responseInterceptor() {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  }

  private _handleResponse(response: AxiosResponse) {
    return response;
  }

  private _handleError({ response, message }: AxiosError) {
    return Promise.reject(response?.data || message);
  }

  private _handleRequest(
    config: InternalAxiosRequestConfig<AxiosRequestConfig>
  ) {
    // const token = getCookieValue({
    //   name: LocalKey.TOKEN,
    // });
    // if (token) {
    //   (config.headers as AxiosRequestHeaders).Authorization = "Bearer " + token;
    // }
    return config;
  }
}
