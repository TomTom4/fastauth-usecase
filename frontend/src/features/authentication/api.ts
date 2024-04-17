import { emptySplitApi as api } from "../../emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getJwks: build.query<GetJwksApiResponse, GetJwksApiArg>({
      query: () => ({ url: `/.well-known/jwks.json` }),
    }),
    register: build.mutation<RegisterApiResponse, RegisterApiArg>({
      query: (queryArg) => ({
        url: `/register`,
        method: "POST",
        body: queryArg.inUser,
      }),
    }),
    signin: build.mutation<SigninApiResponse, SigninApiArg>({
      query: (queryArg) => ({
        url: `/signin`,
        method: "POST",
        body: queryArg.bodySigninSigninPost,
      }),
    }),
    deleteUser: build.mutation<DeleteUserApiResponse, DeleteUserApiArg>({
      query: () => ({ url: `/user`, method: "DELETE" }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as petApi };
export type GetJwksApiResponse = /** status 200 Successful Response */ any;
export type GetJwksApiArg = void;
export type RegisterApiResponse = /** status 200 Successful Response */ OutUser;
export type RegisterApiArg = {
  inUser: InUser;
};
export type SigninApiResponse = /** status 200 Successful Response */ any;
export type SigninApiArg = {
  bodySigninSigninPost: BodySigninSigninPost;
};
export type DeleteUserApiResponse = /** status 200 Successful Response */ any;
export type DeleteUserApiArg = void;
export type OutUser = {
  id: number;
  email: string;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type InUser = {
  email: string;
  password: string;
};
export type BodySigninSigninPost = {
  grant_type?: string | null;
  username: string;
  password: string;
  scope?: string;
  client_id?: string | null;
  client_secret?: string | null;
};
export const {
  useGetJwksQuery,
  useRegisterMutation,
  useSigninMutation,
  useDeleteUserMutation,
} = injectedRtkApi;
