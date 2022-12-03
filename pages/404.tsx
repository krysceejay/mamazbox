import type { NextPage } from "next"
import Layout from '../components/layouts/Main'

const Custom404: NextPage = () => {
    return (
        <Layout title="Not Found">
            <section>
                <div className="container">
                    <h1>Page not found</h1>
                </div>
            </section>
        </Layout>
        )
}

export default Custom404