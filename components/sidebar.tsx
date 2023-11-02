import { Logo } from "@/components/logo"

export function Sidebar() {
  return (
    <div className="h-full p-6 overflow-y-auto border-r shadow-sm">
      <div>
        <Logo />
        <nav className="pt-12">
          <ul className="space-y-10 text-3xl">
            <li>Home</li>
            <li>Blog</li>
            <li>Products</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
