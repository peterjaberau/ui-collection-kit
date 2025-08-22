import {
  actionRuntimeAxios,
  authInterceptor,
  errorHandlerInterceptor,
  needAuthAxios,
} from "@/public/net"

needAuthAxios.interceptors.request.use(authInterceptor)
needAuthAxios.interceptors.response.use(undefined, errorHandlerInterceptor)

actionRuntimeAxios.interceptors.request.use(authInterceptor)
