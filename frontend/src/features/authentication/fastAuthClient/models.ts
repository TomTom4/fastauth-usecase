

export type Body_signin_signin_post = {
        grant_type?: string | null
username: string
password: string
scope?: string
client_id?: string | null
client_secret?: string | null
    };

export type HTTPValidationError = {
        detail?: Array<ValidationError>
    };

export type User = {
        id?: number | null
username: string
password_hash: string
    };

export type ValidationError = {
        loc: Array<string | number>
msg: string
type: string
    };

export type DefaultData = {
        
        payloads: {
            Register: {
                        requestBody: User
                        
                    };
Signin: {
                        formData: Body_signin_signin_post
                        
                    };
        }
        
        
        responses: {
            GetJwks: unknown
                ,Register: User
                ,Signin: unknown
                ,DeleteUser: unknown
                
        }
        
    }