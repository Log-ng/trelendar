import {signIn} from "next-auth/react";
import React from "react";

type Props = {
    provider: string;
    icon: React.ReactNode
};
const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const BtnLogin = ({provider, icon}: Props) => {
    return <button
        className="flex justify-center bg-slate-50 mb-4  w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow-md"
        onClick={async () => {
            await signIn(provider);
        }}
    >
        {icon}
        <span className="justify-between ml-1">Continue to {capitalizeFirstLetter(provider)}</span>
    </button>
}
export default BtnLogin;