import SignInForm from "../forms/SignIn";
import Header from "../sections/Header";
import SocialSignIn from "../sections/SocialSignIn";

export default function SignIn() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Header title="Sign in to your account" />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <SignInForm />
            <SocialSignIn />
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/auth/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up !
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
