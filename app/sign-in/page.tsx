import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="flex justify-center items-center mt-10 mb-10 h-screen">
            <SignIn routing="hash" />
        </div>
    );
}
