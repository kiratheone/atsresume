import Head from "next/head";

export default function Meta({ title, keywords, description }) {
    const homepage = "http://atsresume.arikachmad.com/";
    const logo = "http://atsresume.arikachmad.com/assets/logo.png";
    const fevicon = "http://atsresume.arikachmad.com/assets/favicon.ico";

    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+62 8574908***",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "Arik Achmad",
                "foundingDate": "2025",
                "foundingLocation": "ID",
                "email": "arikarik.ae@gmail.com",
                "telephone": "+62 8574908***",
                "areaServed": "ID",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "English",
                "memberOf": "Arik Achmad",
                "owns": "Arik Achmad",
                "publishingPrinciples": ${homepage},
                "slogan": "Get hired with an ATS-optimized resume"
            }`
        }
    }


    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href={fevicon} />
            <title>{title}</title>
            <meta type="copyright" content="ATSResume" />
            <meta type="author" content="Arik Achmad" />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homepage} />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={description} />
            <meta property="og:image" content={logo} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={homepage} />
            <meta property="twitter:title" content={title} />
            <meta
                property="twitter:description"
                content={description} />
            <meta property="twitter:image" content={logo} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={isiteJsonLd()}
                key="isiteJsonLd"
            />
        </Head>
    );
}