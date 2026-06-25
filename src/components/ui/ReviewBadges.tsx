export function ClutchLogo({ className = "h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Clutch"
      role="img"
    >
      <text
        x="0"
        y="24"
        fill="#17313B"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        C
      </text>
      <text
        x="18"
        y="24"
        fill="#17313B"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        lutch
      </text>
      <circle cx="52" cy="20" r="2.5" fill="#E62415" />
    </svg>
  );
}

export function ClutchStars({ className = "h-3.5" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-full w-auto" fill="#E62415">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function ClutchBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <span className="text-[10px] font-medium tracking-widest text-[#6B7280] uppercase">
        Reviewed on
      </span>
      <div className="mt-1 flex items-center gap-3">
        <ClutchLogo className="h-7 w-auto" />
        <div className="flex flex-col items-start gap-0.5">
          <ClutchStars className="h-3.5" />
          <span className="text-[10px] font-semibold tracking-wider text-[#6B7280] uppercase">
            31 Reviews
          </span>
        </div>
      </div>
    </div>
  );
}

export function GoogleReviewBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-10 w-10 shrink-0" aria-hidden>
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      <div>
        <div className="flex items-center gap-2">
          <span className="rounded border border-border bg-white px-1.5 py-0.5 text-xs font-semibold text-[#374151]">
            4.9
          </span>
          <div className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 4 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="#FBBF24">
                <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
              </svg>
            ))}
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5">
              <defs>
                <linearGradient id="halfStar">
                  <stop offset="50%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
              <path
                fill="url(#halfStar)"
                d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z"
              />
            </svg>
          </div>
        </div>
        <p className="mt-1 text-[10px] font-semibold tracking-wider text-[#374151] uppercase">
          Customer Reviews
        </p>
      </div>
    </div>
  );
}
