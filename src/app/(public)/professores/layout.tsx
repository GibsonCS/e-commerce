import Footer from "@/components/footer"
import Header from "@/components/header"

export default function TeacherLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <Header />
        <section>
            {children}
        </section>
        <Footer />
        </>
    )
}