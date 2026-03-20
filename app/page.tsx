import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import BrandedMediaBlock from "@/components/BrandedMediaBlock";
import { Calendar } from "lucide-react";

const categoryTiles = [
  {
    href: "/shop/edibles",
    emoji: "🍪",
    title: "Edibles",
    desc: "Explore our cannabis edibles range",
    cta: "Shop Edibles →",
    gradient: "from-budz-orange to-budz-yellow",
  },
  {
    href: "/shop/canna-bar?type=disposable",
    emoji: "💨",
    title: "Vapes",
    desc: "Disposables, pods & cartridges",
    cta: "Shop Vapes →",
    gradient: "from-budz-green to-budz-blue",
  },
  {
    href: "/shop/canna-bar?type=feco",
    emoji: "💧",
    title: "Oils",
    desc: "FECO, tinctures & concentrates",
    cta: "Shop Oils →",
    gradient: "from-budz-blue to-budz-green",
  },
  {
    href: "/shop/canna-bar?type=flower",
    emoji: "🌸",
    title: "Pre-Rolls + Flower",
    desc: "Premium flower & pre-rolls",
    cta: "Shop Flower →",
    gradient: "from-budz-red to-budz-orange",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative flex min-h-[520px] items-center overflow-hidden text-white md:min-h-[600px]">
          <div
            className="absolute inset-0 bg-gradient-to-br from-budz-green via-budz-blue to-budz-orange"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-budz-dark-blue/40"
            aria-hidden
          />
          <div
            className="budz-grid-overlay absolute inset-0 opacity-[0.22] mix-blend-overlay"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_75%_0%,rgba(250,204,21,0.22),transparent)]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl py-16 md:py-0">
              <p className="section-eyebrow text-budz-yellow">
                Soweto • Marshalltown • Fourways
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
                Culture, flavor &amp; good vibes.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/90 md:text-xl">
                Premium flower, edibles, infused meals, art, fashion and
                experiences — your plug for modern canna lifestyle.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/shop" className="btn-hero-solid">
                  Shop Now
                </Link>
                <Link href="/shop/events" className="btn-hero-ghost">
                  View Events
                </Link>
                <Link href="/#visit-fourways" className="btn-hero-ghost">
                  Visit a Branch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Categories */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="section-eyebrow text-center">Browse</p>
            <h2 className="mt-2 text-center font-display text-3xl font-bold text-stone-800 md:text-4xl">
              Shop categories
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
              Quick lanes into our drops — tap a tile and explore.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {categoryTiles.map((cat, i) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group animate-fade-up opacity-0"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <div
                    className={`card-hover rounded-2xl bg-gradient-to-br ${cat.gradient} p-6 text-center text-white shadow-lg md:p-8`}
                  >
                    <div className="mb-3 text-4xl md:mb-4 md:text-5xl">
                      {cat.emoji}
                    </div>
                    <h3 className="font-display text-lg font-bold md:text-xl">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/90">{cat.desc}</p>
                    <span className="mt-4 inline-block font-semibold transition group-hover:translate-x-1">
                      {cat.cta}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Visit */}
        <section
          id="visit-fourways"
          className="scroll-mt-28 bg-stone-100 py-16 md:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-bold text-stone-900 md:text-4xl">
              Visit our branch
            </h2>
            <div className="mx-auto mt-12 max-w-2xl">
              <div className="rounded-2xl border border-stone-200/80 bg-white p-8 shadow-md ring-1 ring-black/5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-budz-green/15 px-2 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-budz-dark-blue">
                    Flagship
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-budz-green">
                  Fourways
                </h3>
                <p className="mt-2 text-lg text-stone-600">
                  Pineslopes Shopping Centre, Fourways
                </p>
                <div className="mt-6 space-y-2 text-stone-700">
                  <p>
                    <span className="font-semibold">Hours:</span> Mon–Sat
                    9:00–18:00, Sun 10:00–16:00
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> +27 11 234
                    5678
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    fourways@budzrus.com
                  </p>
                </div>
                <a
                  href="https://wa.me/27602958320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Shop spotlight */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <p className="section-eyebrow">Retail</p>
                <h2 className="mt-2 font-display text-4xl font-bold text-stone-900">
                  Shop
                </h2>
                <p className="mt-4 text-lg text-stone-600">
                  Flower • Pre-rolls • Moonsticks • Edibles • Fashion
                </p>
                <Link
                  href="/shop"
                  className="mt-6 inline-flex font-semibold text-budz-green transition hover:text-budz-orange"
                >
                  Explore the shop →
                </Link>
              </div>
              <BrandedMediaBlock label="In-store & online" variant="shop" />
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="bg-stone-100 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
              <BrandedMediaBlock
                label="Live & loud"
                variant="events"
                className="order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <p className="section-eyebrow">Experiences</p>
                <h2 className="mt-2 font-display text-4xl font-bold text-stone-900">
                  Events &amp; experiences
                </h2>
                <p className="mt-4 text-lg text-stone-600">
                  First Thursdays • Puff &amp; Paint • Jazz &amp; Poetry
                </p>
                <Link
                  href="/shop/events"
                  className="mt-6 inline-flex font-semibold text-budz-blue transition hover:text-budz-orange"
                >
                  See what&apos;s on →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 420 Market */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <p className="section-eyebrow">Monthly</p>
                <h2 className="mt-2 font-display text-4xl font-bold text-stone-900">
                  4:20 Sunday Market
                </h2>
                <p className="mt-4 text-stone-600">
                  A monthly cannabis &amp; lifestyle marketplace for
                  cannapreneurs, creatives, food, coffee, cocktails, vinyl, art,
                  fashion and accessories.
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-stone-800">Key details</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
                    <li>Last Sunday monthly</li>
                    <li>09:00–18:00</li>
                    <li>Stall fee: R500</li>
                  </ul>
                </div>
                <Link
                  href="/420-sunday-market"
                  className="btn-primary mt-8 inline-flex"
                >
                  Apply for a stall
                </Link>
              </div>
              <BrandedMediaBlock label="Market day" variant="market" />
            </div>
          </div>
        </section>

        {/* Kitchen */}
        <section className="bg-stone-100 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
              <BrandedMediaBlock
                label="Munchies HQ"
                variant="kitchen"
                className="order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <p className="section-eyebrow">Eat &amp; drink</p>
                <h2 className="mt-2 font-display text-4xl font-bold text-stone-900">
                  Kitchen
                </h2>
                <p className="mt-4 text-lg text-stone-600">
                  Signature meals (standard or infused) • Drinks &amp; spirits
                </p>
                <Link
                  href="/shop/munchies-kitchen"
                  className="mt-6 inline-flex font-semibold text-budz-red transition hover:text-budz-orange"
                >
                  View the menu →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Event cards */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="section-eyebrow text-center">Calendar</p>
            <h2 className="mt-2 text-center font-display text-3xl font-bold uppercase tracking-wide text-stone-900 md:text-4xl">
              Experiences
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-stone-600">
              Step into the heart of the action — live music, art, Puff
              &amp; Paint, and culture built for the community.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "90's Music",
                  date: "Sat, 24 Jan",
                  location: "BudzRus Fourways",
                },
                {
                  title: "4:20 Sunday Market",
                  date: "Sun, 25 Jan",
                  location: "Sandton",
                },
                {
                  title: "Sundays are for Weed Lovers",
                  date: "Sun, 25 Jan",
                  location: "BudzRus Marshalltown",
                },
                {
                  title: "To Jazz or Not To Jazz",
                  date: "Sun, 01 Feb",
                  location: "BudzRus Fourways",
                },
                {
                  title: "What the Funk?",
                  date: "Sat, 07 Feb",
                  location: "BudzRus Fourways",
                },
                {
                  title: "Frgmntd Space",
                  date: "Sat, 28 Mar",
                  location: "BudzRus Marshalltown",
                  ticket: true,
                },
              ].map((event, index) => (
                <div
                  key={`${event.title}-${index}`}
                  className="card-hover overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-md"
                >
                  <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-budz-dark-blue via-budz-blue/90 to-budz-green/80">
                    <div className="budz-grid-overlay absolute inset-0 opacity-30" />
                    <Calendar
                      className="relative z-10 h-14 w-14 text-white/50"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-budz-blue">
                      {event.date}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-stone-900">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-stone-600">{event.location}</p>
                    {event.ticket ? (
                      <button
                        type="button"
                        className="btn-primary mt-5 w-full py-2.5 text-sm"
                      >
                        Buy tickets
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="mt-5 w-full rounded-xl bg-budz-blue py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-budz-yellow hover:text-budz-dark-blue"
                      >
                        RSVP
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Edibles market */}
        <section className="bg-stone-100 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wide text-stone-900 md:text-4xl">
              Edibles market
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-stone-600">
              Flavor-forward infusions — sweet, savory, and always on point.
            </p>
            <div className="mt-10 text-center">
              <Link href="/shop/edibles" className="btn-primary inline-flex">
                Shop edibles
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
              {[
                { name: "Brownies", price: "R100,00", bestSeller: true },
                { name: "Chocolates", price: "R120,00", bestSeller: true },
                { name: "Hard Candy", price: "R90,00", bestSeller: true },
                { name: "Chocolate Chip Cookies", price: "R110,00" },
                { name: "Lollipos", price: "R60,00", bestSeller: true },
              ].map((product, index) => (
                <ProductCard
                  key={`${product.name}-${index}`}
                  name={product.name}
                  price={product.price}
                  bestSeller={product.bestSeller}
                  productType="edibles"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Canna market */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="section-eyebrow">Canna bar</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-stone-900 md:text-4xl">
              Canna market
            </h2>
            <p className="mt-4 max-w-3xl text-stone-600">
              Where cannabis meets creativity — curated pre-rolls, chill
              energy, and premium experiences in one space.
            </p>
            <Link
              href="/shop/canna-bar"
              className="btn-primary mt-8 inline-flex bg-budz-blue hover:bg-budz-green"
            >
              Shop canna bar
            </Link>
          </div>
        </section>

        {/* Fashion collab */}
        <section className="bg-stone-100 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-stone-900 md:text-4xl">
              SID Studio × WLM
            </h2>
            <p className="mt-4 max-w-3xl text-stone-600">
              Wearable art for the 420 lifestyle — street, comfort, and
              identity in every piece.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
              {[
                {
                  name: "Crew neck Sweater WLMxSID.25",
                  price: "R900,00",
                  newArrival: true,
                },
                {
                  name: "Classic WLMxSID.25",
                  price: "R1 500,00",
                  newArrival: true,
                },
                { name: "Pentagon", price: "R550,00", newArrival: true },
                {
                  name: "Every Day 420.25",
                  price: "R550,00",
                  newArrival: true,
                },
                { name: "Haze 420.25", price: "R550,00", newArrival: true },
                { name: "Blaze", price: "R550,00", newArrival: true },
              ].map((product, index) => (
                <ProductCard
                  key={`${product.name}-${index}`}
                  name={product.name}
                  price={product.price}
                  newArrival={product.newArrival}
                  productType="fashion"
                />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/shop/fashion"
                className="inline-flex font-semibold text-budz-blue transition hover:text-budz-orange"
              >
                Shop fashion →
              </Link>
            </div>
          </div>
        </section>

        {/* Latest creations */}
        <section className="bg-gradient-to-br from-budz-green/12 via-white to-budz-blue/12 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="section-eyebrow">Fresh drops</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-stone-800 md:text-4xl">
                Our latest creations
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-stone-600">
                New additions to the collection — curated for quality and good
                times.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
              {[
                {
                  name: "Premium Pre-Roll Pack",
                  price: "R150,00",
                  newArrival: true,
                },
                {
                  name: "Infused Brownie Deluxe",
                  price: "R120,00",
                  newArrival: true,
                },
                {
                  name: "Cannabis Chocolate Bar",
                  price: "R110,00",
                  newArrival: true,
                },
                {
                  name: "Moonstick Collection",
                  price: "R200,00",
                  newArrival: true,
                },
                {
                  name: "CBD Oil Premium",
                  price: "R180,00",
                  newArrival: true,
                },
                {
                  name: "Vape Cartridge Set",
                  price: "R250,00",
                  newArrival: true,
                },
              ].map((product, index) => (
                <ProductCard
                  key={`${product.name}-${index}`}
                  name={product.name}
                  price={product.price}
                  newArrival={product.newArrival}
                  productType="edibles"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Best sellers */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-3xl font-bold text-stone-900 md:text-4xl">
              Best sellers
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {[
                { name: "Brownies", price: "R100,00", bestSeller: true },
                { name: "Chocolates", price: "R120,00", bestSeller: true },
                { name: "Hard Candy", price: "R90,00", bestSeller: true },
                { name: "Lollipos", price: "R60,00", bestSeller: true },
              ].map((product, index) => (
                <ProductCard
                  key={`bs-${product.name}-${index}`}
                  name={product.name}
                  price={product.price}
                  bestSeller={product.bestSeller}
                  productType="edibles"
                />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/shop"
                className="inline-flex font-semibold text-budz-green transition hover:text-budz-orange"
              >
                Shop more products →
              </Link>
            </div>
          </div>
        </section>

        {/* Membership — signature dark band */}
        <section className="relative overflow-hidden bg-budz-dark-blue py-16 text-white md:py-24">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(34,197,94,0.35),transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(59,130,246,0.2),transparent_50%)]"
            aria-hidden
          />
          <div className="budz-grid-overlay absolute inset-0 opacity-[0.12]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-budz-yellow">
                Collective
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                Embrace the collective
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg text-stone-300 md:text-xl">
                Privileged access to flowers, pre-rolls, vapes, edibles, oils and
                member-only perks.
              </p>
              <p className="mt-6 font-display text-2xl font-bold text-budz-yellow">
                Membership is free
              </p>
              <Link
                href="/become-member"
                className="btn-primary mt-8 inline-flex px-10 py-4 text-base"
              >
                Join the Canna Collective
              </Link>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-sm">
                <div className="mb-4 text-4xl">🎁</div>
                <h3 className="font-display text-xl font-bold">
                  Member products
                </h3>
                <p className="mt-2 text-stone-300">
                  THC drops &amp; exclusives for members
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-sm">
                <div className="mb-4 text-4xl">💚</div>
                <h3 className="font-display text-xl font-bold">
                  Member care
                </h3>
                <p className="mt-2 text-stone-300">
                  Rewards, offers &amp; real human support
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-sm">
                <div className="mb-4 text-4xl">✨</div>
                <h3 className="font-display text-xl font-bold">
                  Thoughtful gifts
                </h3>
                <p className="mt-2 text-stone-300">
                  Personalised gifts &amp; exclusive givebacks
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wellbeing */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="section-eyebrow">Wellbeing</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-stone-800 md:text-4xl">
                Essential wellbeing
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-stone-600">
                Sleep, calm, and relief — shop by what you need.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-gradient-to-br from-budz-blue to-budz-green p-8 text-white shadow-lg">
                <h3 className="font-display text-2xl font-bold">Sleep aid</h3>
                <p className="mt-3 text-white/90">
                  Formulations built for deep, restful sleep.
                </p>
                <Link
                  href="/shop?benefit=sleep"
                  className="btn-hero-solid mt-6 inline-flex !text-budz-blue"
                >
                  Shop now
                </Link>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-budz-green to-budz-orange p-8 text-white shadow-lg">
                <h3 className="font-display text-2xl font-bold">Relax</h3>
                <p className="mt-3 text-white/90">
                  Ease tension and find your calm.
                </p>
                <Link
                  href="/shop?benefit=relax"
                  className="btn-hero-solid mt-6 inline-flex !text-budz-green"
                >
                  Shop now
                </Link>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-budz-orange to-budz-red p-8 text-white shadow-lg">
                <h3 className="font-display text-2xl font-bold">Pain relief</h3>
                <p className="mt-3 text-white/90">
                  Natural support for discomfort &amp; recovery.
                </p>
                <Link
                  href="/shop?benefit=pain"
                  className="btn-hero-solid mt-6 inline-flex !text-budz-orange"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="relative overflow-hidden bg-gradient-to-r from-budz-green via-budz-blue to-budz-orange py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-budz-dark-blue/25" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Get R100 off
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-white/95">
              Subscribe and get R100 off your first order when you spend R500
              or more.
            </p>
            <p className="mt-2 text-sm text-white/75">Ts&amp;Cs apply.</p>
            <form
              className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row sm:gap-3"
              action="#"
              method="post"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="you@email.com"
                autoComplete="email"
                className="min-h-[48px] flex-1 rounded-xl border-0 px-4 py-3 text-stone-900 shadow-inner placeholder:text-stone-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              />
              <button type="submit" className="btn-accent min-h-[48px] px-8">
                Sign up
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
