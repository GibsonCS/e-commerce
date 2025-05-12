import { Footer } from '@/components/Footer'
import {Roboto} from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight :"400",
    
})

export default function AdminLayout ({children}: {children: React.ReactNode}) {
    return (<>
        <header>dsds</header>
        <section className={`min-h-screen flex flex-col bg-gradient-to-br from-gray-950 to-gray-800 ${roboto.className} ` } >{children}</section>
        <Footer />
        </>
    )
}