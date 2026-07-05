import { Link } from "react-router-dom";

const destinations = [
    {
        country: "United Kingdom",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        detail: "World-class universities, strong research culture, and flexible study options for undergraduate and postgraduate students.",
    },
    {
        country: "Ireland",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        detail: "A welcoming study destination known for innovation, excellent teaching quality, and a growing international student community.",
    },
    {
        country: "Canada",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
        detail: "High-quality education, multicultural campuses, and practical post-study opportunities make Canada a top choice.",
    },
    {
        country: "Australia",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
        detail: "Vibrant student life, globally respected institutions, and strong career pathways across many industries.",
    },
];

export default function Destinations() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <Link to="/" className="mb-6 inline-flex items-center text-sm font-semibold text-blue-700 transition hover:text-blue-800">
                    ← Back to home
                </Link>

                <div className="mb-8 max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Popular destinations</p>
                    <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Explore where your future can begin.</h1>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        Discover top study locations with trusted guidance, great academic opportunities, and support from application to arrival.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {destinations.map((item) => (
                        <div key={item.country} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                            <img src={item.image} alt={item.country} className="h-44 w-full object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-slate-900">{item.country}</h2>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
                                <button className="mt-5 inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                                    View programs
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
