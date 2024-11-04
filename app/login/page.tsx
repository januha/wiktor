import { auth, signIn } from "@/app/auth";
import MainPage from '../logged-in/logged-in';

export default async function Login() {
    const session = await auth();
    const user = session?.user
        ? { ...session.user, name: session.user.name ?? "Nieznany użytkownik" }
        : null;

    return user ? (
        <div>
            <MainPage user={user} />
        </div>
    ) : (
        <main>
            <div className="login-box">
                <div className="login-box-name">
                    <h1>&gt; Logowanie.</h1>
                </div>
                <hr />
                <div className="login-box-content">
                    <span className="google">
                        <form action={async () => { "use server"; await signIn("google"); }}>
                            <div className="float-left">
                                &gt; Nie masz konta?&nbsp;
                                <button type="submit" className="button">Zarejestruj się</button>
                            </div>
                        </form>
                    </span>
                </div>
            </div>
        </main>
    );
}
