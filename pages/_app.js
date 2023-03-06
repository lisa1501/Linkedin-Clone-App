import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import '../styles/globals.css';


export default function App({ Component, pageProps: { session, ...pageProps }  }) {
    return (
        <SessionProvider session={session}>
            <RecoilRoot>
                <ThemeProvider attribute="class">
                    <Component {...pageProps} />
                </ThemeProvider>
            </RecoilRoot>   
        </SessionProvider>
            
            
        
                
        )
}
