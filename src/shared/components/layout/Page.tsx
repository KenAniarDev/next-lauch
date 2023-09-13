import Head from "next/head";

interface PageProps {
    title: string;
    children: React.ReactNode;
}

/// Place your layout definitions here
const Page: React.FC<PageProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    );
};
export default Page;
