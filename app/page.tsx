import Navbar from "@components/navbar";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen w-full bg-[#0a0a0a] text-white selection:bg-white selection:text-black overflow-x-hidden">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-8 sm:px-20 min-h-[90vh] flex flex-col justify-center">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    
                    {/* Text Content */}
                    <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="flex items-center gap-3">
                            <i className="fa-brands fa-tiktok text-xl text-white/60"></i>
                            <span className="text-sm uppercase tracking-[0.3em] font-medium text-white/60">Nova pesma</span>
                        </div>
                        
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1] uppercase">
                            Petra <br />
                            <span className="text-white/40 italic text-5xl md:text-7xl block mt-2">Presidente</span>
                        </h1>
                        
                        <p className="max-w-md text-white/50 text-lg leading-relaxed font-light">
                            Internet senzacija osvaja muzičku scenu. Spremite se za ritam koji ne prašta i energiju koja pomera granice.
                        </p>
                        
                        <div className="flex flex-wrap gap-6 pt-4">
                            <button className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#d1d1d1] transition-all transform hover:scale-105 shadow-xl shadow-white/5">
                                Dolazi uskoro
                            </button>
                            <button className="flex items-center gap-4 px-6 py-2 border border-white/10 rounded-full font-bold uppercase tracking-widest text-xs hover:border-white/40 transition-all group">
                                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <i className="fa-solid fa-play ml-1"></i>
                                </span>
                                Pogledaj spot
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full max-w-[550px] group animate-in fade-in slide-in-from-right duration-1000">
                        <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/5 bg-[#111]">
                            <img 
                                src="/images/petric_background.png" 
                                alt="Petra"
                                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000"
                            />
                            {/* Decorative Play Button with Rotating Text */}
                            <Link href="https://www.tiktok.com/@petra.stto" target="_blank" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <div className="relative w-24 h-24 md:w-32 md:h-32 group/play cursor-pointer">
                                    <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                                        <defs>
                                            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0 " />
                                        </defs>
                                        <text className="text-[9px] uppercase tracking-[0.12em] fill-white/40 font-bold">
                                            <textPath xlinkHref="#circlePath">
                                                PLAY VIDEO • PLAY VIDEO • PLAY VIDEO • 
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className="absolute inset-6 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover/play:bg-white group-hover/play:text-black transition-all duration-500">
                                        <i className="fa-solid fa-play ml-1 text-lg group-hover/play:scale-110 transition-transform"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none"></div>
            </section>

            {/* Statistics Section (Retained) */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-8 sm:px-20">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20 text-center">
                        <div className="space-y-3 group">
                            <p className="text-5xl md:text-6xl font-black tracking-tighter group-hover:text-white/80 transition-colors">120K+</p>
                            <p className="text-white/30 uppercase tracking-[0.2em] text-[11px] font-bold">Pratioca</p>
                        </div>
                        <div className="space-y-3 group">
                            <p className="text-5xl md:text-6xl font-black tracking-tighter group-hover:text-white/80 transition-colors">5.2M+</p>
                            <p className="text-white/30 uppercase tracking-[0.2em] text-[11px] font-bold">Lajkova</p>
                        </div>
                        <div className="space-y-3 group">
                            <p className="text-5xl md:text-6xl font-black tracking-tighter group-hover:text-white/80 transition-colors">2.2K+</p>
                            <p className="text-white/30 uppercase tracking-[0.2em] text-[11px] font-bold">Youtube pratioca</p>
                        </div>
                        <div className="space-y-3 group">
                            <p className="text-5xl md:text-6xl font-black tracking-tighter group-hover:text-white/80 transition-colors">soon</p>
                            <p className="text-white/30 uppercase tracking-[0.2em] text-[11px] font-bold">Spotify mesecnih slusalaca</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section (Updated) */}
            <section className="py-24 bg-[#0a0a0a] border-t border-white/5" id="about">
                <div className="max-w-7xl mx-auto px-8 sm:px-20 flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2 relative aspect-square">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5 grayscale">
                            <img src="images/petric_background2.png" alt="O meni" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="w-12 h-[2px] bg-white/40"></div>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-tight">
                            Moja nova <br /> muzička priča
                        </h2>
                        <p className="text-white/50 text-base leading-relaxed">
                            Iako sam svoju karijeru započela i gradila na društvenim mrežama, muzika je oduvijek bila moja skrivena želja. Sada je trenutak da tu strast podijelim sa vama. "Presidente" je samo početak mog puta u svijetu muzike, kojem želim da se posvetim u potpunosti.
                        </p>
                        <p className="text-white/50 text-base leading-relaxed">
                            Ovo je novi list koji okrećem i jedva čekam da čujete šta sam sve pripremila.
                        </p>
                        <div className="pt-4">
                            <a href="https://www.tiktok.com/@petra.stto" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                TikTok
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Music/Songs Section (Replaced Genres) */}
            <section className="py-24 bg-[#0a0a0a] border-t border-white/5" id="music">
                <div className="max-w-7xl mx-auto px-8 sm:px-20">
                    <div className="text-center mb-20 space-y-4">
                        <div className="w-10 h-[2px] bg-white/40 mx-auto"></div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Moje pesme</h2>
                    </div>
                    
                    <div className="space-y-2">
                        {[
                            { name: 'Presidente', type: 'Official Single', link: 'https://youtube.com', status: 'Premijera uskoro' },
                            { name: 'TBA', type: 'Nova pesma', link: '#', status: 'U pripremi' },
                            { name: 'TBA', type: 'Special Track', link: '#', status: 'Coming Soon' }
                        ].map((song, idx) => (
                            <div key={idx} className="group flex items-center justify-between py-10 border-b border-white/10 hover:px-6 transition-all duration-500 cursor-pointer">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-20">
                                    <div className="flex items-center gap-6">
                                        <span className="text-white/20 font-black text-2xl group-hover:text-white transition-colors">0{idx + 1}</span>
                                        <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:italic transition-all">{song.name}</h3>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-white/40 text-xs uppercase tracking-widest font-bold group-hover:text-white/60 transition-colors">{song.type}</p>
                                        <p className="text-[10px] text-white/20 italic uppercase tracking-widest">{song.status}</p>
                                    </div>
                                </div>
                                <a 
                                    href={song.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all transform group-hover:scale-110"
                                >
                                    <i className="fa-brands fa-youtube text-xl"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Marquee Divider - FIX: Structural adjustment for smoother animation */}
            <section className="py-20 border-y border-white/5 overflow-hidden flex items-center relative h-32 md:h-48">
                <div className="animate-marquee flex items-center w-max">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <div key={i} className="flex items-center gap-10 sm:gap-20 shrink-0 px-5 sm:px-10">
                            <span className="text-3xl md:text-6xl font-black uppercase tracking-tighter opacity-80 italic">Presidente</span>
                            <i className="fa-solid fa-star text-white/20 text-2xl"></i>
                            <span className="text-3xl md:text-6xl font-black uppercase tracking-tighter opacity-80">PETRA</span>
                            <i className="fa-solid fa-circle text-white/20 text-xs"></i>
                            <span className="text-3xl md:text-6xl font-black uppercase tracking-tighter opacity-80 italic">2026</span>
                            <i className="fa-solid fa-bolt-lightning text-white/20 text-2xl"></i>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-10 sm:gap-20 shrink-0 px-5 sm:px-10">
                            <span className="text-3xl md:text-6xl font-black uppercase tracking-tighter opacity-80 italic">Presidente</span>
                            <i className="fa-solid fa-star text-white/20 text-2xl"></i>
                            <span className="text-3xl md:text-6xl font-black uppercase tracking-tighter opacity-80">PETRA</span>
                            <i className="fa-solid fa-circle text-white/20 text-xs"></i>
                            <span className="text-3xl md:text-6xl font-black uppercase tracking-tighter opacity-80 italic">2026</span>
                            <i className="fa-solid fa-bolt-lightning text-white/20 text-2xl"></i>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-8 sm:px-20 grid lg:grid-cols-2 gap-20">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="w-10 h-[2px] bg-white/40"></div>
                            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">Budimo u <br /> kontaktu</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <p className="text-sm font-medium text-white/60">@petra.stto</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                    <i className="fa-solid fa-envelope text-xs"></i>
                                </div>
                                <p className="text-sm font-medium text-white/60">booking@petramusic.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/[0.03] p-10 rounded-3xl border border-white/10 space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-1">Ime</label>
                                <input type="text" placeholder="Vaše ime" className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-1">Email</label>
                                <input type="email" placeholder="Vaš email" className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-1">Poruka</label>
                            <textarea rows={4} placeholder="Pišite više..." className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all resize-none"></textarea>
                        </div>
                        <button className="w-full py-4 bg-white text-black rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#d1d1d1] transition-all">
                            Pošalji poruku
                        </button>
                    </div>
                </div>
            </section>

            {/* Comprehensive Footer */}
            <footer className="pt-24 pb-12 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto px-8 sm:px-20">
                    <div className="grid md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
                        <div className="space-y-6">
                            <h4 className="text-2xl font-black uppercase tracking-tighter">Petra</h4>
                            <p className="text-white/30 text-xs leading-relaxed max-w-[200px] mx-auto md:mx-0">
                                Presidente - doživite novi talas moderne pop muzike.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">Meni</p>
                            <ul className="space-y-3 text-xs font-medium text-white/60">
                                <li><a href="#" className="hover:text-white transition-colors">Početna</a></li>
                                <li><a href="#about" className="hover:text-white transition-colors">O meni</a></li>
                                <li><a href="#music" className="hover:text-white transition-colors">Music</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">Social</p>
                            <ul className="space-y-3 text-xs font-medium text-white/60">
                                <li><a href="https://www.instagram.com/petra.stto" className="hover:text-white transition-colors">Instagram</a></li>
                                <li><a href="https://www.tiktok.com/@petra.stto" className="hover:text-white transition-colors">TikTok</a></li>
                                <li><a href="https://www.youtube.com/@petrastto" className="hover:text-white transition-colors">YouTube</a></li>
                                <li><a href="https://open.spotify.com/user/313ly5nzamth72rvymy3oygitxui?si=bec4b4d26f6c4543" className="hover:text-white transition-colors">Spotify</a></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">Spotify</p>
                            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                                <p className="text-[9px] font-bold uppercase text-white/20 mb-2">Latest Release</p>
                                <p className="text-sm font-bold truncate">Presidente</p>
                                <p className="text-[10px] text-white/40">Petra</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                        <p className="text-[9px] uppercase tracking-widest font-bold text-white/20">
                            &copy; 2026 Petra. Sva prava zadržana.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}