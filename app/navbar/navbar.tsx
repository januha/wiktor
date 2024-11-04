import Image from "next/image";
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="text-zinc-700 bg-zinc-200 text-3xl font-poppins p-3 flex justify-center space-x-20">
                    <p className="inline">
                        <Image className="inline mr-5"
                            src={'/favicon.ico'}
                            alt={'icon'}
                            width={'30'}
                            height={'30'}
                        />
                        Projekt Strony</p>
                    <div className="inline space-x-20">
                        <p className="inline">
                            <a href="/">Strona główna</a>
                        </p>
                        <p className="inline">
                            <a href="/login">Logowanie</a>
                        </p>
                        <p className="inline">
                            <a href="/about">O nas</a>
                        </p>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
