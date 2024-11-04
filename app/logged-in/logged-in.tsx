import React from 'react';
import { signOut } from "@/app/auth";

type User = {
    name: string;
};

interface MainPageProps {
    user: User;
}

export default function MainPage({ user }: MainPageProps) {
    return (
        <div className="bg-zinc-500 h-screen w-screen fixed">
            <div className="login-box-name">
                <h1 className="text-white">&gt; Witaj {user.name}</h1>
            </div>
            <hr />
            <div className="login-box-content">
                <form action={async () => { "use server"; await signOut(); }}>
                    <button className="button">Wyloguj się</button>
                </form>
            </div>
        </div>
    );
};