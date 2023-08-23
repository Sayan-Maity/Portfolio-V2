import { Helmet } from "react-helmet";
import { ISeoProps } from "../types/PropTypes";

const SEO = ({ dynamicTitle }: ISeoProps) => {
  return (
    <Helmet>
      <title>{dynamicTitle}</title>
      <meta name="author" content="Sayan Maity" />
      <meta
        name="description"
        content="One Stop platform for women to excel their career in tech"
      />
      <meta
        name="keywords"
        content="Women, Career, Tech, AI-Assistance, Passwordless Authentication, One-2-One mentorship, Job Listings"
      />
      {/* Open Graph (Facebook) : */}
      <meta property="og:title" content="Sayan Maity" />
      <meta
        property="og:description"
        content="Sayn Maity's Portfolio Website"
      />
      <meta
        property="og:image"
        content="https://ik.imagekit.io/sayancr777/tr:w-400/Portfolio/portfolio_Banner.jpg?updatedAt=1692765968938"
      />
      <meta property="og:url" content="https://sayan-maity.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sayan Maity" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter : */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sayan-maity.vercel.app/" />
      <meta property="twitter:title" content="Sayan Maity" />
      <meta
        property="twitter:description"
        content="Sayan Maity's Portfolio Website"
      />
      <meta
        property="twitter:image"
        content="https://ik.imagekit.io/sayancr777/tr:w-400/Portfolio/portfolio_Banner.jpg?updatedAt=1692765968938"
      />
      <meta name="robots" content="Index" />
      <link rel="manifest" href="/manifest.json" />

      {/* Favicon : */}
      <link rel="apple-touch-icon" sizes="120x120" href="https://ik.imagekit.io/sayancr777/Portfolio/sayanLogo.jpg?updatedAt=1691434937632" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://ik.imagekit.io/sayancr777/Portfolio/sayanLogo.jpg?updatedAt=1691434937632" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://ik.imagekit.io/sayancr777/Portfolio/sayanLogo.jpg?updatedAt=1691434937632" />
    </Helmet>
  );
};

export default SEO;
