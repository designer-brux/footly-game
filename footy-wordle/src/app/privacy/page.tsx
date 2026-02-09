import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    // 'h-dvh' e 'overflow-y-auto' forçam a barra de rolagem aparecer
    <main className="h-dvh w-full bg-white p-6 md:p-12 overflow-y-auto">
      <div className="max-w-3xl mx-auto pb-20">
        {" "}
        {/* pb-20 dá um respiro no final da rolagem */}
        <Link
          href="/"
          className="text-[#008F66] font-bold mb-8 inline-block hover:underline"
        >
          &larr; Back to Game
        </Link>
        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-black text-[#1D1B20]">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: February 2026</p>

          <h3>1. Log Files</h3>
          <p>
            Footly follows a standard procedure of using log files. These files
            log visitors when they visit websites. The information collected by
            log files includes internet protocol (IP) addresses, browser type,
            Internet Service Provider (ISP), date and time stamp, referring/exit
            pages, and possibly the number of clicks. These are not linked to
            any information that is personally identifiable.
          </p>

          <h3>2. Cookies and Web Beacons</h3>
          <p>
            Like any other website, Footly uses "cookies". These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited.
          </p>
          <ul>
            <li>
              <strong>Google DoubleClick DART Cookie:</strong> Google is a
              third-party vendor on our site. It also uses cookies, known as
              DART cookies, to serve ads to our site visitors based upon their
              visit to www.website.com and other sites on the internet.
            </li>
            <li>
              <strong>Game State:</strong> We use your browser's LocalStorage to
              save your daily progress (wins, streaks, and stats). This data
              remains on your device and is not sent to our servers.
            </li>
          </ul>

          <h3>3. Google AdSense</h3>
          <p>
            Some of advertisers on our site may use cookies and web beacons. Our
            advertising partners include Google. Each of our advertising
            partners has their own Privacy Policy for their policies on user
            data.
          </p>

          <h3>4. GDPR Data Protection Rights</h3>
          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following: The
            right to access, rectify, erase, restrict processing, object to
            processing, and data portability.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us at:
            <strong>contact@footlygame.com</strong>
          </p>
        </article>
      </div>
    </main>
  );
}
