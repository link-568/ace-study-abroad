import { useState } from "react";
import { Link } from "react-router-dom";

export default function Appointment() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        highestDegree: "",
        preferredDestination: "United Kingdom",
        courseOfStudy: "STEM (Science, Technology, Engineering & Mathematics)",
        purpose: ""
    });
    const [acknowledged, setAcknowledged] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!acknowledged) {
            setErrorMessage("Please acknowledge the consultancy fee before continuing.");
            return;
        }

        setErrorMessage("");

        const message = [
            `Hello, my name is ${formData.fullName || "___"}.`,
            `My email address is ${formData.email || "___"}.`,
            `My phone number is ${formData.phone || "___"}.`,
            `My highest degree completed is ${formData.highestDegree || "___"}.`,
            `My preferred destination is ${formData.preferredDestination}.`,
            `My intended course of study is ${formData.courseOfStudy}.`,
            `My purpose of using your service is: ${formData.purpose || "___"}.`
        ].join("\n");

        const whatsappUrl = `https://wa.me/2347070218070?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="w-full min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
            <div className="mx-auto flex min-h-screen w-full flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-8 max-w-2xl">
                    <Link to="/" className="mb-5 inline-flex items-center text-sm font-semibold text-blue-700 transition hover:text-blue-800">
                        ← Back to home
                    </Link>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Book an appointment</p>
                    <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
                        Let’s plan your study abroad journey.
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        Share a few details and our team will reach out to help you choose the right program, university, and next steps.
                    </p>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
                            <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" placeholder="Your full name" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Phone number</label>
                            <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+1 234 567 890" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Highest degree completed</label>
                            <input name="highestDegree" value={formData.highestDegree} onChange={handleChange} type="text" placeholder="e.g. Bachelor's, Master's, PhD" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Preferred destination</label>
                            <select name="preferredDestination" value={formData.preferredDestination} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-[10px] outline-none transition focus:border-blue-500 focus:bg-white">
                                <option>United Kingdom</option>
                                <option>Ireland</option>
                                <option>Canada</option>
                                <option>Australia</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Intended course of study</label>
                            <select name="courseOfStudy" value={formData.courseOfStudy} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-[10px] outline-none transition focus:border-blue-500 focus:bg-white">
                                <option>STEM (Science, Technology, Engineering & Mathematics)</option>
                                <option>Social Sciences</option>
                                <option>Business, Management & Entrepreneurship</option>
                                <option>Health & Medical Sciences</option>
                                <option>Arts, Design & Creative Industries</option>
                                <option>Humanities & Languages</option>
                                <option>Education & Teacher Training</option>
                                <option>Law & Legal Studies</option>
                                <option>Agriculture & Food Sciences</option>
                                <option>Environmental & Earth Sciences</option>
                                <option>Computer Science & Information Technology</option>
                                <option>Artificial Intelligence & Data Science</option>
                                <option>Engineering & Built Environment</option>
                                <option>Nursing & Allied Health Professions</option>
                                <option>Medicine, Dentistry & Pharmacy</option>
                                <option>Psychology & Behavioural Sciences</option>
                                <option>Public Health</option>
                                <option>Hospitality, Tourism & Culinary Arts</option>
                                <option>Media, Communication & Journalism</option>
                                <option>Architecture & Urban Planning</option>
                                <option>Finance, Accounting & Economics</option>
                                <option>Aviation & Aerospace</option>
                                <option>Maritime & Logistics</option>
                                <option>Sports & Exercise Sciences</option>
                                <option>Veterinary & Animal Sciences</option>
                                <option>Biotechnology & Life Sciences</option>
                                <option>Fashion, Beauty & Creative Arts</option>
                                <option>International Relations & Political Science</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm font-medium text-slate-700">Purpose of using our service</label>
                            <textarea name="purpose" value={formData.purpose} onChange={handleChange} rows="5" placeholder="Share your academic interests, budget, timeline, or any questions for us." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
                        </div>

                        <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <label className="flex items-start gap-3 text-sm text-slate-700">
                                <input
                                    type="checkbox"
                                    checked={acknowledged}
                                    onChange={(event) => {
                                        setAcknowledged(event.target.checked);
                                        if (event.target.checked) setErrorMessage("");
                                    }}
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-900 focus:ring-blue-500"
                                />
                                <span className="text-base">
                                    Before continuing, I acknowledge that there will be a consultancy payment of <span className="font-semibold text-slate-900">₦5,000</span> before any procedures begin.
                                </span>
                            </label>
                            {errorMessage ? <p className="mt-3 text-sm font-medium text-red-600">{errorMessage}</p> : null}
                        </div>

                        <div className="md:col-span-2">
                            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
                                Submit appointment request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
