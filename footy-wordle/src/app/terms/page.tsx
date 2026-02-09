import Link from "next/link";

export default function TermsOfUse() {
  return (
    <main className="h-dvh w-full bg-white p-6 md:p-12 overflow-y-auto">
      <div className="max-w-3xl mx-auto pb-20">
        <Link
          href="/"
          className="text-[#008F66] font-bold mb-8 inline-block hover:underline"
        >
          &larr; Back to Game
        </Link>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-black text-[#1D1B20]">Terms of Use</h1>
          <p className="text-sm text-gray-500">Last updated: February 2026</p>

          <h3>1. Terms</h3>
          <p>
            By accessing this Website, accessible from footlygame.com, you are
            agreeing to be bound by these Website Terms and Conditions of Use
            and agree that you are responsible for the agreement with any
            applicable local laws. If you disagree with any of these terms, you
            are prohibited from accessing this site.
          </p>

          <h3>2. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the
            materials on Footly's Website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose or for any public
              display;
            </li>
            <li>
              attempt to reverse engineer any software contained on Footly's
              Website;
            </li>
          </ul>

          <h3>3. Disclaimer</h3>
          <p>
            The materials on Footly's Website are provided on an 'as is' basis.
            Footly makes no warranties, may it be expressed or implied, and
            hereby disclaims and negates all other warranties. Furthermore,
            Footly does not make any representations concerning the accuracy or
            reliability of the use of the materials on its Website or otherwise
            relating to such materials or on any sites linked to this site.
          </p>

          <h3>4. Fair Use & Content</h3>
          <p>
            <strong>Player Images & Names:</strong> All player names, team
            names, and images used in this game are for identification and
            educational purposes only (Trivia/Quiz). They remain the property of
            their respective owners. Footly is an independent project and is not
            affiliated with FIFA, UEFA, or any specific football club.
          </p>

          <h3>5. Limitations</h3>
          <p>
            In no event shall Footly or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on Footly's Website.
          </p>
        </article>
      </div>
    </main>
  );
}
