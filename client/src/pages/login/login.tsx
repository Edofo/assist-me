import axios from "axios";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Login: FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                password,
            });
            const token = response.data.token;
            localStorage.setItem("access_token", token);
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center bg-gray-100 p-10">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Login
                </h2>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john.doe@email.com"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Mot de passe
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Se connecter
                    </button>
                </div>
                <div className="mt-4 text-center">
                    Vous n'êtes pas encore membre ?{" "}
                    <Link
                        to="/inscription"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        Inscrivez-vous
                    </Link>
                </div>
            </form>
        </div>
    );
};

Login.displayName = "Login";

export { Login };