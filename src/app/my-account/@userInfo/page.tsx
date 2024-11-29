import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export default async function MyAccount() {
    const customer = await validateAccessToken();

    return (
        <div>
            <section>
                <h2>Your info</h2>
                <h1>Bienvenido {customer.name}</h1>
                <p>email: {customer.email}</p>
            </section>
        </div>
    )
}