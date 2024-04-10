import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { DefaultData } from './models';

export class DefaultService {

	/**
	 * Get Jwks
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getJwks(): CancelablePromise<DefaultData['responses']['GetJwks']> {
		
		return __request(OpenAPI, {
			method: 'GET',
			url: '/.well-known/jwks.json',
		});
	}

	/**
	 * Register
	 * @returns User Successful Response
	 * @throws ApiError
	 */
	public static register(data: DefaultData['payloads']['Register']): CancelablePromise<DefaultData['responses']['Register']> {
		const {
                    
                    requestBody
                } = data;
		return __request(OpenAPI, {
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
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static signin(data: DefaultData['payloads']['Signin']): CancelablePromise<DefaultData['responses']['Signin']> {
		const {
                    
                    formData
                } = data;
		return __request(OpenAPI, {
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
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static deleteUser(): CancelablePromise<DefaultData['responses']['DeleteUser']> {
		
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/user',
		});
	}

}