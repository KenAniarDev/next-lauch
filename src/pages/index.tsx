import { Inter } from "next/font/google";
import { Layout, Page } from "@/shared/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page title="Welcome to NextLaunch">
      <Layout>
        <h1>Welcome to NextLaunch 🚀</h1>
        <p>Made by @kmavillanosa</p>
      </Layout>
    </Page>
  );
}
