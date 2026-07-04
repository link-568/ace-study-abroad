import { FaArrowRightLong } from "react-icons/fa6";
import { LuArrowRight, LuMenu, LuSearch } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/effect-coverflow'

export default function Home() {
    const choice = [
        'Personalized Counselling',
        'High Visa Success Support',
        'Scholarship Opportunities',
        'Trusted International Partners',
        'Fast Application Processing',
        'Affordable Study Options',
        'End-to-End Student Support',
        'Experienced Education Consultants',
        'Transparent Process',
        'Continuous Student Support'
    ]

    const destinations = [
        {
            country: 'United Kingdom',
            image: 'https://flagcdn.com/w320/gb.png'
        },
        {
            country: 'Ireland',
            image: 'https://flagcdn.com/w320/ie.png'
        },
        {
            country: 'Europe',
            image: 'https://flagcdn.com/w320/ie.png'
        },
        {
            country: 'North America',
            image: 'https://unsplash.com/s/photos/north-america?orientation=portrait'
        },
        {
            country: 'Asia',
            image: 'https://unsplash.com/s/photos/asia?orientation=portrait'
        },
    ]

    const highlights = [
        { title: '20+ Countries', subtitle: 'Study options across top destinations' },
        { title: '95% Guidance', subtitle: 'Support from application to arrival' },
        { title: '1000+ Students', subtitle: 'Trusted by ambitious learners' }
    ]

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <header className="sticky top-0 z-40 border-b border-b-gray-200 border-slate-200/80 bg-white/90 backdrop-blur-sm mx-auto flex max-w-7xl items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
                    <img src="/ace-icon.png" className="h-14 w-14" alt="ACE Study Abroad logo" />

                    <div className="flex items-center gap-4 sm:gap-6">
                        <button className="rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:bg-slate-100">
                            <LuSearch className="text-lg" />
                        </button>
                        <button className="rounded-full border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:bg-slate-100">
                            <LuMenu className="text-lg" />
                        </button>
                    </div>
            </header>
            {/* HEADER END */}

            <section className="relative overflow-hidden">
                <img src="/hero-image.jpg" className="absolute inset-0 h-full w-full object-cover" alt="Students studying abroad" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/30" />

                <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                    <div className="max-w-2xl space-y-6">
                        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur">
                            Global education, expertly guided
                        </span>
                        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Discover programs that make an impact.
                        </h1>
                        <p className="max-w-xl text-lg text-slate-200 sm:text-xl">
                            Explore universities, compare programs, and study abroad with confidence through a trusted advisory team.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <button className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-800">
                                Start your journey
                                <LuArrowRight className="" />
                            </button>
                            <button className="rounded-full border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
                                Explore destinations
                            </button>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/20 bg-white/10 p-4 backdrop-blur md:grid-cols-3">
                        {highlights.map((item) => (
                            <div key={item.title} className="rounded-2xl bg-white/90 p-4 shadow-sm">
                                <p className="text-2xl font-semibold text-slate-900">{item.title}</p>
                                <p className="mt-1 text-sm text-slate-600">{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-blue-900 to-sky-700 p-8 text-white shadow-2xl sm:p-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">Your study abroad partner</p>
                        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                            From your first enquiry to your first day on campus.
                        </h2>
                        <p className="mt-4 max-w-xl text-base text-slate-200 sm:text-lg">
                            We simplify the journey with personalized guidance, trusted university connections, and step-by-step support that keeps your goals moving forward.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">Visa support</span>
                            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">Scholarship guidance</span>
                            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">Arrival planning</span>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Trusted network</p>
                            <h3 className="mt-3 text-xl font-semibold text-slate-900">Reputable institutions worldwide</h3>
                            <p className="mt-2 text-sm text-slate-600">Work with recognized universities and colleges across the world.</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Personalized care</p>
                            <h3 className="mt-3 text-xl font-semibold text-slate-900">Tailored to your ambitions</h3>
                            <p className="mt-2 text-sm text-slate-600">We match you to programs that suit your academic and career goals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Popular destinations</p>
                        <h2 className="text-3xl font-semibold text-slate-900">Explore destinations</h2>
                    </div>
                    <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                        View all
                        <FaArrowRightLong />
                    </button>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <Swiper
                        effect="coverflow"
                        loop={false}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        initialSlide={2}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 0,
                            depth: 100,
                            modifier: 3,
                            scale: 1,
                            slideShadows: false
                        }}
                        modules={[EffectCoverflow]}
                    >
                        {destinations?.map(dest => (
                            <SwiperSlide>
                                <div className="flex flex-col items-center">
                                    <img src={dest.image} className="h-64 rounded-xl" />
                                    <p>{dest.country}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">About ACE Study Abroad</p>
                        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Trusted guidance for ambitious students.</h2>
                        <p className="mt-4 text-base leading-7 text-slate-600">
                            ACE Study Abroad is a trusted international education consultancy committed to helping students achieve their dreams of studying abroad. We provide expert guidance from university selection to admissions, visa support, and pre-departure preparation.
                        </p>
                        <p className="mt-3 text-base leading-7 text-slate-600">
                            Whether you are seeking scholarships, affordable tuition, or world-class academic pathways, our experienced team makes every step clearer and more confident.
                        </p>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Why choose us</p>
                        <div className="mt-5 space-y-3">
                            {choice?.map((c) => (
                                <div key={c} className="flex items-start gap-3 rounded-2xl bg-white p-3 shadow-sm">
                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900"></span>
                                    <p className="text-slate-700">{c}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-slate-200 bg-white/80">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <img src="/ace-icon.png" className="h-10 w-10" alt="ACE Study Abroad icon" />
                        <div>
                            <p className="font-semibold text-slate-800">ACE Study Abroad</p>
                            <p>Shaping futures across borders</p>
                        </div>
                    </div>
                    <p>© 2026 ACE Study Abroad. All rights reserved.</p>
                </div>
            </footer>
        </main>
    )
}