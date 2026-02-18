export const dynamic = "force-dynamic";
export const revalidate = 0;

import { PLAYERS } from "@/data/players";
import { generateSlug } from "@/lib/gameLogic";
import Link from "next/link";
import { notFound } from "next/navigation";
import SecureImage from "@/components/SecureImage";

export const dynamicParams = true;

// Definição da interface de Props para Next.js 15+ (Params como Promise)
interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PlayerPost({ params }: Props) {
  // Await nos parâmetros antes de usar
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);

  console.log(`🔎 Procurando jogador com slug: "${decodedSlug}"`);

  // Busca o jogador pelo slug
  const player = PLAYERS.find((p) => {
    const generated = generateSlug(p.name);
    return generated === decodedSlug;
  });

  if (!player) {
    console.error("❌ Jogador não encontrado! Retornando 404.");
    return notFound();
  }

  console.log(`✅ Jogador encontrado: ${player.name}`);

  // --- EXTRAÇÃO DE DADOS ---
  const position = player.hints[0];
  const nationality = player.hints[1];
  const characteristic = player.hints[2];
  const stats = player.stats; // Dados ricos opcionais

  // --- GERADOR DE NARRATIVA INTELIGENTE ---
  // Gera texto baseado nos números (se existirem) ou usa fallback genérico
  const generatePerformanceText = () => {
    if (!stats) {
      return `Currently playing in the ${player.leagueName || "top leagues"}, ${player.name} continues to be a key player for his squad, demonstrating consistence and skill throughout the season.`;
    }

    let text = `In the current campaign, ${player.name} has maintained an impressive average rating of **${stats.rating}**. `;

    if (stats.goals > 10) {
      text += `Proving to be a lethal threat in front of goal, he has already found the net **${stats.goals} times** and provided ${stats.assists} assists. `;
    } else if (
      stats.assists > 5 ||
      (stats.passAccuracy && stats.passAccuracy > 85)
    ) {
      text += `Acting as the engine of the team, he boasts a passing accuracy of **${stats.passAccuracy || "high"}%**, orchestrating plays and creating multiple goal-scoring opportunities. `;
    } else if (stats.tackles && stats.tackles > 20) {
      text += `A rock at the back, he has completed over **${stats.tackles} successful tackles**, proving to be a nightmare for opposition attackers. `;
    } else {
      text += `His tactical discipline and work rate have been vital, contributing in ${stats.matches} matches this season.`;
    }

    return text;
  };

  const generateIntro = () => {
    return `In the world of football, few players capture the attention of fans like ${player.name}. 
    As a dedicated ${position} representing ${nationality}, ${player.name} has become a recurring 
    figure in our daily Footly challenges due to an impressive career and unique style of play.`;
  };

  const generateStyle = () => {
    return `Known for ${characteristic}, this athlete brings a specific set of skills to the pitch. 
    Playing as a ${position} requires not only physical stamina but also a deep tactical understanding of the game, 
    something that ${player.name} has demonstrated consistently across various competitions.`;
  };

  return (
    <main className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="text-sm text-slate-400 mb-8 flex gap-2">
          <Link href="/" className="hover:text-[#008F66]">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#008F66]">
            Archive
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">{player.name}</span>
        </nav>

        <article className="prose prose-slate max-w-none">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 relative group">
              <SecureImage
                src={player.image}
                alt={player.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Logo do Clube (Se existir) */}
              {player.clubLogo && (
                <div className="absolute bottom-2 right-2 w-12 h-12 bg-white rounded-full p-1 shadow-md">
                  <img
                    src={player.clubLogo}
                    alt="Club Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic text-slate-900 mb-4 tracking-tighter uppercase">
              {player.name}
            </h1>
            <div className="flex justify-center gap-3 flex-wrap">
              <span className="bg-[#006B52]/10 text-[#006B52] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-[#006B52]/20">
                {nationality}
              </span>
              <span className="bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-slate-200">
                {position}
              </span>
              {player.leagueName && (
                <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
                  {player.leagueName}
                </span>
              )}
            </div>
          </header>

          {/* --- SEÇÃO DE ESTATÍSTICAS (SÓ APARECE SE TIVER DADOS) --- */}
          {stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100 hover:border-[#00D44E] transition-colors">
                <span className="block text-3xl font-black text-[#008F66]">
                  {stats.matches}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Matches
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100 hover:border-[#00D44E] transition-colors">
                <span className="block text-3xl font-black text-[#008F66]">
                  {stats.goals}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Goals
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100 hover:border-[#00D44E] transition-colors">
                <span className="block text-3xl font-black text-[#008F66]">
                  {stats.rating}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Avg Rating
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100 hover:border-[#00D44E] transition-colors">
                <span className="block text-3xl font-black text-[#008F66]">
                  {stats.passAccuracy ? stats.passAccuracy + "%" : "-"}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Precision
                </span>
              </div>
            </div>
          )}

          {/* Conteúdo Textual */}
          <section className="mt-12 space-y-8 text-lg leading-relaxed text-slate-700">
            <div>
              <h2 className="text-2xl font-black text-slate-900 italic uppercase mb-4 border-b-4 border-[#00D44E] inline-block pr-8">
                Player Profile
              </h2>
              <p>{generateIntro()}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Performance Analysis
              </h3>
              <p>{generatePerformanceText()}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Skills and Playing Style
              </h3>
              <p>{generateStyle()}</p>
            </div>

            <div className="bg-slate-50 border-l-4 border-[#00D44E] p-6 my-8 italic rounded-r-2xl text-slate-600">
              {player.funFact
                ? `"${player.funFact}"`
                : `"Whether you are a casual fan or a football expert, identifying ${player.name} in our daily challenge is a true test of your knowledge about the world's most popular sport."`}
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Footly Challenges Facts
              </h3>
              <p>
                This {nationality} star has been featured multiple times in
                Footly. Statistical data shows that players who focus on the{" "}
                <strong>{characteristic}</strong> hint usually identify{" "}
                {player.name} within the first two attempts.
              </p>
            </div>
          </section>

          {/* Footer CTA */}
          <footer className="mt-16 p-8 bg-slate-900 rounded-3xl text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[#00D44E]/10"></div>
            <div className="relative z-10">
              <h3 className="text-white text-2xl font-black mb-4 uppercase italic">
                Can you guess today&apos;s player?
              </h3>
              <p className="mb-6 opacity-80 text-slate-300">
                Test your skills now and build your daily streak!
              </p>
              <Link
                href="/"
                className="inline-block bg-[#00D44E] text-[#1D1B20] px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 hover:bg-white hover:text-[#008F66] transition-all no-underline shadow-lg"
              >
                Play Footly Now
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}

// Pré-renderização das rotas
export async function generateStaticParams() {
  return PLAYERS.map((player) => ({
    slug: generateSlug(player.name),
  }));
}
