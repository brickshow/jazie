export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="w-full px-6 lg:px-10 xl:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-foreground">
              MC.<span className="text-primary">JAZIE</span>
            </span>
          </div>

          <br></br>
          <p className="mt-4 text-center text-sm text-muted-foreground">
          Powered By:{" "}
          <a
            href="https://studiolaunchweb.vercel.app"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Studio Launch Web
          </a>
        </p>

          <p className="text-sm text-muted-foreground">
            {"\u00A9 2026 MC. Jazie Yabut. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
