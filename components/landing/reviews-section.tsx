const reviews = [
  {
    scenario: "USDT to cash",
    text: "The operator sent me clear pickup instructions with a code. I received USD cash within an hour of creating the request.",
    author: "Alex K.",
    location: "Kyiv, UA",
    rating: 5,
    color: "#10b981",
  },
  {
    scenario: "Crypto to card",
    text: "I saw the exact rate before submitting. UAH arrived to Privat24 the same day. Clean process.",
    author: "Maria S.",
    location: "Lviv, UA",
    rating: 5,
    color: "#3b82f6",
  },
  {
    scenario: "Repeat exchange",
    text: "My usual direction was saved, so repeating the exchange took seconds. Support answered quickly when I had questions.",
    author: "Dmytro P.",
    location: "Odesa, UA",
    rating: 5,
    color: "#8b5cf6",
  },
]

export function ReviewsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28 lg:py-40">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 grid items-end gap-8 lg:mb-24 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#64748b] shadow-sm">
              Testimonials
            </span>
            <h2 className="text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#0f172a] sm:text-[3.5rem]">
              Real
              <br />
              <span className="text-[#94a3b8]">exchanges.</span>
            </h2>
          </div>
          <div className="flex items-center gap-8 lg:justify-end">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#0f172a]">4.9</p>
              <div className="mt-1 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-[#facc15]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-[#e2e8f0]" />
            <div>
              <p className="text-3xl font-bold text-[#0f172a]">50K+</p>
              <p className="text-sm text-[#64748b]">Exchanges</p>
            </div>
          </div>
        </div>

        {/* Reviews - asymmetric grid */}
        <div className="grid gap-5 lg:grid-cols-12">
          {/* First review - large */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white p-8 lg:col-span-5 lg:p-10">
            {/* Quote mark */}
            <div className="absolute -right-4 -top-4 text-[120px] font-serif leading-none text-[#f1f5f9]">&ldquo;</div>
            
            {/* Stars */}
            <div className="relative mb-6 flex gap-0.5">
              {[...Array(reviews[0].rating)].map((_, i) => (
                <svg key={i} className="h-5 w-5 text-[#facc15]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <p className="relative mb-8 text-lg leading-relaxed text-[#334155]">&ldquo;{reviews[0].text}&rdquo;</p>

            {/* Badge */}
            <div 
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{ backgroundColor: `${reviews[0].color}15` }}
            >
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: reviews[0].color }} />
              <span className="text-sm font-semibold" style={{ color: reviews[0].color }}>
                {reviews[0].scenario}
              </span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 border-t border-[#f1f5f9] pt-6">
              <div 
                className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
                style={{ backgroundColor: reviews[0].color }}
              >
                {reviews[0].author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">{reviews[0].author}</p>
                <p className="text-sm text-[#64748b]">{reviews[0].location}</p>
              </div>
            </div>
          </div>

          {/* Stacked reviews */}
          <div className="flex flex-col gap-5 lg:col-span-7">
            {reviews.slice(1).map((review, index) => (
              <div
                key={index}
                className="relative flex-1 overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4 flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-[#facc15]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[#334155]">&ldquo;{review.text}&rdquo;</p>
                  </div>
                  
                  {/* Author + badge */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:gap-3">
                    <div 
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                      style={{ backgroundColor: `${review.color}15` }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: review.color }} />
                      <span className="text-xs font-semibold" style={{ color: review.color }}>
                        {review.scenario}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div 
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
                        style={{ backgroundColor: review.color }}
                      >
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0f172a]">{review.author}</p>
                        <p className="text-xs text-[#64748b]">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
