import Image from "next/image"
import direitoImage from '../../../public/direito.jpg'


const products = [
  {
    id: 1,
    name: 'Curso de Direito Penal',
    href: '#',
    price: 'R$ 25,996',
    description: 'Get the full lineup of our Curso de Direito Penals. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc: direitoImage,
    imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'Curso de Direito Penal',
    href: '#',
    price: 'R$ 32,99',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: direitoImage,
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 3,
    name: 'Curso de Direito Penal',
    href: '#',
    price: 'R$ 32,99',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: direitoImage,
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 4,
    name: 'Curso de Direito Penal',
    href: '#',
    price: 'R$ 32,99',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: direitoImage,
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 5,
    name: 'Curso de Direito Penal',
    href: '#',
    price: 'R$ 32,99',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: direitoImage,
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 6,
    name: 'Curso de Direito Penal',
    href: '#',
    price: 'R$ 32,99',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: direitoImage,
    imageAlt: 'Front of plain black t-shirt.',
  },
  // More products...
]

export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <Image
                alt={product.imageAlt}
                src={product.imageSrc}
                // width={50}
                // height={50}
              />
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm text-gray-500 italic">{product.options}</p>
                  <p className="text-base font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
