import Link from "next/link";

export default function Contact() {
  return (
    <main className="h-dvh w-full bg-white p-6 md:p-12 overflow-y-auto">
      <div className="max-w-2xl mx-auto w-full pb-20">
        <Link
          href="/"
          className="text-[#008F66] font-bold mb-8 inline-block hover:underline"
        >
          &larr; Back to Game
        </Link>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center shadow-sm">
          <h1 className="text-3xl font-black text-[#1D1B20] mb-4">
            Contact Us
          </h1>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Have a suggestion, found a bug, or just want to say hello? We are
            constantly working to improve Footly and would love to hear from
            you.
          </p>

          <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm inline-block w-full overflow-hidden">
            <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-2">
              Support Email
            </p>
            <a
              href="mailto:contact@footlygame.com"
              className="text-lg md:text-2xl font-bold text-[#008F66] hover:underline wrap-break-word"
            >
              contact@footlygame.com
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-8">
            We usually respond within 24-48 hours.
          </p>
        </div>
      </div>
    </main>
  );
}
