import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-lg font-medium">
              Select
            </Link>

            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/hotel/dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Hotel Dashboard
              </Link>
              <Link
                to="/creator/$id"
                params={{ id: "1" }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Creator Profile
              </Link>
              <Link
                to="/hotel/$id"
                params={{ id: "1" }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Hotel Profile
              </Link>
            </div>
          </div>

        </nav>
      </div>
    </header>
  )
}
