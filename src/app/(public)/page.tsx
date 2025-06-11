import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductList from "@/components/product-list";

export default async function Home() {
  return (
        <>
        <Header />
          <ProductList />
        <Footer />
        </>
  )
}
