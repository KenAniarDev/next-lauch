import { Layout, Page } from "@/shared/components";
import Link from "next/link";

// Define a type for the social link data
type SocialLinkData = {
  url: string;
  imgSrc: string;
};

const socialLinkStyle = {
  margin: "1px",
  textDecoration: "none",
};

function SocialLink({ url, imgSrc }: SocialLinkData) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={socialLinkStyle}
    >
      <img src={imgSrc} alt="Social Link" />
    </a>
  );
}

export default function Home() {
  return (
    <Page title="Welcome to NextLaunch">
      <Layout>
        <div style={mainStyle}>
          <div style={containerStyle}>
            <h1>
              Welcome to{" "}
              <strong style={{ color: "#4834d4" }}>NextLaunch</strong> 🚀🚀🚀 🤘
            </h1>
          </div>
          <div style={containerStyle}>
            <div style={socialLinksStyle}>
              <SocialLink
                url="https://www.linkedin.com/in/kmavillanosa"
                imgSrc="/assets/linkedin.png"
              />
              <SocialLink
                url="https://github.com/kmavillanosa"
                imgSrc="/assets/github.png"
              />
              <img
                style={{ padding: 1 }}
                width={25}
                height={25}
                id="installButton"
                src="/assets/install.png"
                alt="Install Button"
              />
              <a href="sms:09452873791">Send SMS</a>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  );
}

const mainStyle: React.CSSProperties = {
  height: "100vh",
  margin: "0",
  padding: "0",
  background:
    "linear-gradient(199deg, rgba(206,214,224,1) 0%, rgba(241,242,246,1) 100%)",
  backgroundColor: "rgb(206,214,224)",
};

const containerStyle: React.CSSProperties = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const socialLinksStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "8px",
};
