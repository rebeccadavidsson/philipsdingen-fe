import Link from 'next/link';

const Custom404Page = () => {
    return (
        <div className={"container text-center mt-8"}>
            <h1 className={"text-3xl mb-8"}>404</h1>
            <p>Sorry, deze pagina is niet gevonden</p>
            <h2>
                <Link href="/">
                    <a style={{ color: 'gold', textDecoration: 'underline' }}>
                        Ga terug
                    </a>
                </Link>
            </h2>
        </div>
    );
};

export default Custom404Page;