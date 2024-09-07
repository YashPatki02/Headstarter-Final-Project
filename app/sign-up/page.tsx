import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex justify-center items-center mt-20 mb-10">
            <SignUp routing="hash" />
        </div>
    );
}
