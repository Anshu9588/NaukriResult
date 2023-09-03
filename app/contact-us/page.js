import Contact from "@/components/contact";
import Script from "next/script";
export const metadata = {
  title: "NaukriResult.co: Latest Jobs, Results, Admit Cards & More",
  description:
    "Naukri Results: Latest Jobs, Results, Admit Cards & more. Get Job Notifications, Government & Private Jobs, and much more.",
  keywords:
    "Naukri Result,Naukri Result Contact us, Sarkari Job, Latest Job Notifications, Sarkari Naukri Alerts, Government Job Updates, Job Vacancies 2023, NaukriResult.com, Sarkari Result Updates, Government Job Opportunities in 2023, Naukri and Sarkari Result Information, Stay Updated with NaukriResult.co",
    metadataBase: new URL('https://www.naukriresult.co'),
    alternates: {
      canonical: '/contact-us',
      languages: {
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      },
    },
    openGraph: {
    title:
      "NaukriResult.co: Latest Jobs, Results, Admit Cards & More",
    images: ["/ognr.jpg"],
    description:
    "Naukri Result, Naukri Results: NaukriResult.com provides the latest Naukri Result Jobs, Online Form, Naukri Naukri Result in Naukri Result 2023 various sectors such as Railway, Bank, SSC, Navy, Police, UPPSC, UPSSSC, UPTET, UP Scholarship, and other Naukri Result Com alerts at one place. नौकरी रिजल्ट",
    type: "website",
    url: `https://www.naukriresult.co/contact-us`,
  },
};

export default async function Page() {
  return (
    <>
      <Contact />
      
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-V8RLC0G3FS" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-V8RLC0G3FS');
        `}
      </Script>
    </>
  );
}
