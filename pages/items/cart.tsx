import type { NextPage } from "next"
import Layout from '../../components/layouts/Main'

const Cart: NextPage = () => {
    return (
        <Layout title="Cart">
            <section>
                <div className="container">
                    <h1>View Cart</h1>
                </div>
            </section>
        </Layout>
        )
}

export default Cart