import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import { Shell } from '@/components/Site';
import { site } from '@/data/site';

const playfair = Playfair_Display({ variable: '--font-playfair', subsets: ['latin'], weight: ['500','600','700'] });
const poppins = Poppins({ variable: '--font-poppins', subsets: ['latin'], weight: ['400','500','600','700'] });
export const metadata = { metadataBase: new URL('https://weddingsvibe.com'), title: { default: 'weddingsvibe | Find your wedding venue and team', template: '%s | weddingsvibe' }, description: 'Discover beautiful wedding venues and trusted wedding services across India. One enquiry brings your celebration together.', openGraph: { siteName: 'weddingsvibe', type: 'website', locale: 'en_IN' } };
export default function RootLayout({ children }) { return <html lang="en" className={`${playfair.variable} ${poppins.variable}`}><body id="top"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:site.name,url:'https://weddingsvibe.com',email:site.email,telephone:site.phone,sameAs:Object.values(site.socials)})}}/><Shell>{children}</Shell></body></html>; }
