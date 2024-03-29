/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_signin_signin_post } from '../models/Body_signin_signin_post';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Jwks
     * @returns any Successful Response
     * @throws ApiError
     */
    public getJwksWellKnownJwksJsonGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/.well-known/jwks.json',
        });
    }
    /**
     * Register
     * @returns any Successful Response
     * @throws ApiError
     */
    public registerRegisterPost({
        requestBody,
    }: {
        requestBody: User,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Signin
     * @returns any Successful Response
     * @throws ApiError
     */
    public signinSigninPost({
        formData,
    }: {
        formData: Body_signin_signin_post,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/signin',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete User
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteUserUserDelete(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user',
        });
    }
}
