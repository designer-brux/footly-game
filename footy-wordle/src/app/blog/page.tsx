import Link from "next/link";
import {
  getDailyPlayersByOffset,
  generateSlug,
  getDayIndex,
} from "@/lib/gameLogic";

export default function BlogList() {
  // 1. Hora UTC atual
  const now = new Date();
  const currentHourUTC = now.getUTCHours();

  // 2. Verifica se estamos na "Zona de Perigo" (00:00 até 12:00 UTC)
  // Se for antes do meio-dia em Londres, o dia anterior AINDA NÃO ACABOU em Baker Island.
  // Então precisamos adicionar um atraso extra de -1 dia.
  const needsDelay = currentHourUTC < 12;

  // Se precisa de delay, o "hoje do blog" é ontem (-1). Se não, é hoje (0).
  const blogBaseOffset = needsDelay ? -1 : 0;

  // 3. Agora calculamos o índice baseado nesse "hoje ajustado"
  const blogCurrentIndex = getDayIndex(blogBaseOffset);

  // 4. "Destaque de Ontem": É o dia anterior ao base do blog
  // Se blogBaseOffset for 0 (depois do meio dia), yesterdayOffset = -1.
  // Se blogBaseOffset for -1 (antes do meio dia), yesterdayOffset = -2.
  const yesterdayOffset = blogBaseOffset - 1;

  // Só mostramos se o jogo já tiver histórico suficiente
  const yesterday =
    blogCurrentIndex >= 1 ? getDailyPlayersByOffset(yesterdayOffset) : null;

  // 5. Arquivo: Do dia anterior ao destaque até o início
  const archiveDays = [];

  // Começamos de yesterdayOffset - 1 e vamos voltando
  // Exemplo: Se yesterdayOffset é -1, começamos do -2.
  // Vamos até cobrir todo o histórico desde o GAME_EPOCH

  // Para saber quantos dias voltar, usamos o blogCurrentIndex.
  // Se estamos no dia 9 (index 8), yesterday é index 7.
  // O loop deve pegar index 6, 5, 4, 3, 2, 1, 0.
  // Total de itens = blogCurrentIndex - 1 (o yesterday já foi pego).

  for (let i = 2; i <= blogCurrentIndex; i++) {
    // Se blogBaseOffset é 0, pegamos -2, -3...
    // Se blogBaseOffset é -1, pegamos -3, -4...
    archiveDays.push(getDailyPlayersByOffset(blogBaseOffset - i));
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-[#008F66] font-bold mb-8 inline-block hover:underline"
        >
          &larr; Back to Game
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 italic tracking-tighter uppercase">
            Footly <span className="text-[#008F66]">Daily Archive</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Explore the complete history of players featured in Footly. From Day
            1 to the present. The archive updates daily at{" "}
            <strong>12:00 UTC</strong> to avoid spoilers worldwide.
          </p>
        </header>

        {/* --- SEÇÃO: ONTEM (DESTAQUE) --- */}
        {yesterday && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-2 bg-[#00D44E] rounded-full"></div>
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
                Latest Revealed{" "}
                <span className="text-slate-400 font-medium lowercase">
                  — {yesterday.formattedDate}
                </span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {yesterday.players.map((player) => (
                <Link
                  key={player.id}
                  href={`/blog/${generateSlug(player.name)}`}
                  className="group bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#00D44E] transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-black text-xl text-slate-900 group-hover:text-[#008F66] transition-colors">
                    {player.name}
                  </h3>
                  <p className="text-sm text-slate-400 font-bold uppercase mt-1">
                    {player.hints[0]} • {player.hints[1]}
                  </p>
                  <div className="mt-auto pt-4">
                    <p className="text-xs text-[#008F66] font-bold flex items-center gap-1 uppercase tracking-widest">
                      Read Stats{" "}
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* --- SEÇÃO: ARQUIVO COMPLETO --- */}
        {archiveDays.length > 0 && (
          <section className="pb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-2 bg-slate-300 rounded-full"></div>
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
                Past Challenges ({archiveDays.length})
              </h2>
            </div>

            <div className="space-y-6">
              {archiveDays.map((day, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  {/* Cabeçalho do Card */}
                  <div className="mb-6 border-b border-slate-100 pb-4">
                    <p className="text-xs font-bold text-[#008F66] mb-1 uppercase tracking-widest">
                      Edition #{day.gameNumber}
                    </p>
                    <h3 className="text-2xl font-black text-slate-900 italic">
                      {day.formattedDate}
                    </h3>
                  </div>

                  {/* Lista de Jogadores (Cada um é um botão agora) */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {day.players.map((p) => (
                      <Link
                        key={p.id}
                        href={`/blog/${generateSlug(p.name)}`}
                        className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-transparent hover:border-[#00D44E] hover:bg-white transition-all group"
                      >
                        <img
                          src={p.image}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-700 text-sm group-hover:text-[#008F66] transition-colors leading-tight">
                            {p.name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                            Read Bio &rarr;
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
