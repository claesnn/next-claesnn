export function AuthorInfo() {
  return (
    <aside className="surface grid gap-6 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-8">
      <img
        src="/profile-pic-200.webp"
        width={96}
        height={96}
        className="size-24 rounded-full object-cover ring-4 ring-secondary"
        alt="Claes Nymand Nilsson"
      />
      <div>
        <p className="eyebrow">About the author</p>
        <h2 className="mt-2 font-serif text-2xl">Claes Nymand Nilsson</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
          Danish biotech engineer and software developer with 10+ years in the
          biotech industry, working across bioreactors, perfusion cultivation,
          recovery, TFF optimization, software, and data analysis.
        </p>
      </div>
    </aside>
  )
}
