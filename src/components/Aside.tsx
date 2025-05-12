import Link from "next/link";

export default function Aside() {
  const items = [
    { name: "Início", path: "/admin" },
    { name: "Cadastrar curso", path: "/register" },
    { name: "Listar cursos", path: "/" },
    { name: "Faturamento", path: "/" },
  ];
  return (
    <aside className="border-b border-r border-gray-800 w-1/6 h-full flex flex-col ">
      <span className="text-center text-xl p-1 bg-gradient-to-b from-emerald-500">
        Menu
      </span>
      {items.map((item, index) => (
        <div className="hover:scale-110 transition-all" key={index}>
          <Link
            className="flex w-full border-t border-gray-600 justify-center hover:bg-gray-500 hover:scale"
            href={item.path}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </aside>
  );
}
