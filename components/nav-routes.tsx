import Link from "next/link";

export function NavRoutes() {
  return (
    <nav>
      <ul className="flex gap-x-6">
        <li >
          <Link href="/products">
            Products
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
