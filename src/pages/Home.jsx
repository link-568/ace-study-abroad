import { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { LuArrowRight, LuMenu, LuSearch, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import introVideo from '../assets/intro.mp4'
import introVideo2 from '../assets/intro2.mp4'
import proof1 from '../assets/IMG_0175.jpeg'
import proof2 from '../assets/IMG_0176.jpeg'
import proof3 from '../assets/image3.jpg'
import proof4 from '../assets/image4.jpg'
import proof5 from '../assets/image5.jpg'

export default function Home() {
    const [selectedProof, setSelectedProof] = useState(null);

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
            description: 'World-class universities, strong academic reputation, and vibrant student life.',
            image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80'
        },
        {
            country: 'Ireland',
            description: 'A welcoming destination known for quality education and warm multicultural communities.',
            image: 'https://images.unsplash.com/photo-1520962880247-cfaf541c8724?auto=format&fit=crop&w=800&q=80'
        },
        {
            country: 'Europe',
            description: 'A mix of historic cities, modern campuses, and strong global career opportunities.',
            image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80'
        },
        {
            country: 'North America',
            description: 'Popular for diverse programs, research excellence, and excellent post-study prospects.',
            image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80'
        },
        {
            country: 'Asia',
            description: 'A fast-growing education hub with innovation, affordability, and global networking.',
            image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80'
        },
    ]

    const highlights = [
        { title: '20+ Countries', subtitle: 'Study options across top destinations' },
        { title: '95% Guidance', subtitle: 'Support from application to arrival' },
        { title: '1000+ Students', subtitle: 'Trusted by ambitious learners' }
    ]

    const consultantVideos = [
        {
            name: '',
            role: 'Senior Education Consultant',
            bio: 'Aisha helps students choose the right universities and creates tailored application strategies for long-term success.',
            videoUrl: introVideo
        },
        {
            name: '',
            role: 'Visa & Admissions Advisor',
            bio: 'Daniel specializes in visa preparation, admissions documentation, and making complex processes feel simple.',
            videoUrl: introVideo2
        },
    ]

    const admissionsProof = [
        {
            title: 'University Admission Letter',
            subtitle: 'Accepted into a top-ranked Canada institution with full support from our team.',
            image: proof1
        },
        {
            title: 'University Admission Letter',
            subtitle: 'Accepted into a top-ranked California institution with full support from our team.',
            image: proof2
        },
        {
            title: 'University Admission Letter',
            subtitle: 'Accepted into a top-ranked Canada institution with full support from our team.',
            image: proof3
        },
        {
            title: 'University Admission Letter',
            subtitle: 'Accepted into a top-ranked U.S.A institution with full support from our team.',
            image: proof4
        },
        {
            title: 'University Admission Letter',
            subtitle: 'Accepted into a top-ranked France institution with full support from our team.',
            image: proof5
        },
        /** {
            title: 'Visa Approval Success',
            subtitle: 'Guided through the application process to secure a successful visa outcome.',
            image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80'
        } */
    ]

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <header className="sticky w-full top-0 z-40 border-b border-b-gray-200 border-slate-200/80 bg-white/90 backdrop-blur-sm mx-auto flex items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
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
                            <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-800">
                                Book your consultation
                                <LuArrowRight className="" />
                            </Link>
                            <Link to="/destinations" className="rounded-full border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
                                Explore destinations
                            </Link>
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

            <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Certified excellence</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Recognized and trusted by leading education bodies.</h2>
                            <p className="mt-4 text-base leading-7 text-slate-600">
                                ACE Study Abroad is committed to maintaining the highest standards of professionalism and student care. Our certified credentials reflect our dedication to delivering reliable guidance and ethical support.
                            </p>
                        </div>
                        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3 shadow-sm">
                            <img src="/ace-cac.png" alt="ACE Study Abroad certification" className="h-full w-full rounded-[1rem] object-cover" />
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
                                <div className="flex flex-col items-center rounded-xl bg-slate-50/50 p-3">
                                    <img src={dest.image} className="h-64 rounded-xl object-cover" />
                                    <p className="mt-3 text-lg font-semibold text-slate-900">{dest.country}</p>
                                    <p className="mt-1 text-center text-sm text-slate-600">{dest.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
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
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                <div className="mb-8 max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Understand our service</p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-900">A clear, supportive path to your study abroad goals.</h2>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                        Our consultants bring deep knowledge, personal attention, and practical support at every stage of your study abroad journey.
                    </p>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <Swiper
                        effect="coverflow"
                        loop={false}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 0,
                            depth: 100,
                            modifier: 3,
                            scale: 1,
                            slideShadows: false
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1.2 },
                            1024: { slidesPerView: 2.2 }
                        }}
                        modules={[EffectCoverflow]}
                    >
                        {consultantVideos?.map((consultant) => (
                            <SwiperSlide key={consultant.name}>
                                <div className="mx-2 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                                    <video
                                        controls
                                        playsInline
                                        preload="metadata"
                                        className="h-80 w-full rounded-[1rem] object-cover"
                                        src={consultant.videoUrl}
                                    />
                                    {/* <div className="mt-4">
                                        <h3 className="text-xl font-semibold text-slate-900">{consultant.name}</h3>
                                        <p className="mt-1 text-sm font-medium text-blue-700">{consultant.role}</p>
                                        <p className="mt-3 text-sm leading-6 text-slate-600">{consultant.bio}</p>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                <div className="mb-8 max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Proof of admissions</p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-900">Accepted, supported, and moving forward.</h2>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                        These success stories reflect the confidence and support our students receive as they secure admissions and begin their international education journey.
                    </p>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <Swiper
                        effect="coverflow"
                        loop={false}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 0,
                            depth: 100,
                            modifier: 3,
                            scale: 1,
                            slideShadows: false
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1.2 },
                            1024: { slidesPerView: 2.2 }
                        }}
                        modules={[EffectCoverflow]}
                    >
                        {admissionsProof?.map((item) => (
                            <SwiperSlide key={item.title}>
                                <button
                                    type="button"
                                    onClick={() => setSelectedProof(item)}
                                    className="mx-2 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 text-left"
                                >
                                    <img src={item.image} alt={item.title} className="h-80 w-full object-cover" />
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>


            <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Why choose us</p>
                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                        {choice?.map((c) => (
                            <div key={c} className="flex items-start gap-3 rounded-2xl bg-white p-3 shadow-sm">
                                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-900"></span>
                                <p className="text-slate-700">{c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProof ? (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 px-4 py-6">
                    <div className="relative w-full max-w-4xl rounded-[2rem] bg-white p-3 shadow-2xl">
                        <button
                            type="button"
                            onClick={() => setSelectedProof(null)}
                            className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-slate-700 shadow-sm"
                        >
                            <LuX className="text-xl" />
                        </button>
                        <img src={selectedProof.image} alt={selectedProof.title} className="max-h-[80vh] w-full rounded-[1.5rem] object-contain" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-slate-900">{selectedProof.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{selectedProof.subtitle}</p>
                        </div>
                    </div>
                </div>
            ) : null}

            <footer className="border-t border-slate-200 bg-white/80">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
                    <div className="flex items-center gap-3">
                        <img src="/ace-icon.png" className="h-10 w-10" alt="ACE Study Abroad icon" />
                        <div>
                            <p className="font-semibold text-slate-800">ACE Study Abroad</p>
                            <p>Shaping futures across borders</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold text-slate-800">Contact us</p>
                        <p>Email: acestudyabroad@outlook.com</p>
                        <p>Phone: +234 7070 218 070</p>
                    </div>

                    <p className="text-sm">© 2026 ACE Study Abroad. All rights reserved.</p>
                </div>
            </footer>
        </main>
    )
}