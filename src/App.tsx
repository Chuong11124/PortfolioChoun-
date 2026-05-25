import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Facebook, Twitter, Instagram, Youtube, Linkedin, Music2, 
  Play, Pause, Sparkles, X, Volume2, Clock, Bookmark 
} from 'lucide-react';

// Components
const Step = ({ number, children }: { number: number, children: React.ReactNode }) => (
  <div className="flex items-start gap-5 mb-6 last:mb-0 group/step">
    <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#DCFF00] flex items-center justify-center text-[#0A0A0A] font-bold text-xs mt-1 transition-transform duration-300 group-hover/step:scale-110">
      {number}
    </div>
    <div className="text-[17px] leading-[1.55] text-[#E8E8E8] group-hover/step:text-white transition-colors duration-200">
      {children}
    </div>
  </div>
);

const Divider = () => (
  <div className="py-8 flex justify-center">
    <div className="h-px w-24 bg-white/20"></div>
  </div>
);

const PrimaryButton = ({ label, className = "", onClick }: { label: string, className?: string, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`inline-flex items-center gap-3 bg-[#DCFF00] text-[#0A0A0A] font-bold rounded-lg px-6 py-3 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200 ${className}`}
  >
    {label}
    <ArrowRight className="w-5 h-5 animate-pulse" strokeWidth={2.5} />
  </button>
);

const SolidButton = ({ label, onClick }: { label: string, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className="inline-block bg-white text-[#0A0A0A] font-bold rounded-lg px-8 py-3 hover:bg-[#E8E8E8] hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
  >
    {label}
  </button>
);

// Types
type GlowColor = 'green' | 'yellow' | 'blue' | 'none';

function App() {
  // Theme Glow State
  const [glowColor, setGlowColor] = useState<GlowColor>('none');
  
  // Music Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const playlist = [
    { title: "Late Night Overthinking", artist: "Chương Lofi" },
    { title: "Sunset Chaser", artist: "Golden Hour Vibes" },
    { title: "Pretending to Study", artist: "Caffeine Beats" },
    { title: "2AM Decisions", artist: "Midnight Thoughts" }
  ];

  // Dynamic Greeting State
  const [greeting, setGreeting] = useState({ text: "", emoji: "✨" });

  // Dialog Modals State
  const [diaryOpen, setDiaryOpen] = useState(false);
  const [factOpen, setFactOpen] = useState(false);
  const [activeFact, setActiveFact] = useState("");

  // Dialogue Clicker State (Persisted in localStorage)
  const phrases = [
    "để mai làm",
    "wait cái món đồ này oke hơn nè",
    "thôi ngủ sớm nha",
    "Yarshhh",
    "Hachimi Hachimi",
    "Mệt vãi chưởng"
  ];
  const [sayCounts, setSayCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    // Load local storage counts
    const saved = localStorage.getItem('chuong_say_counts');
    if (saved) {
      try {
        setSayCounts(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }

    // Determine Dynamic Greeting based on current hour
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) {
      setGreeting({ text: "Chào buổi sáng! Cà phê đã pha chưa? ☕", emoji: "☕" });
    } else if (hour >= 11 && hour < 17) {
      setGreeting({ text: "Chào buổi chiều! Sunset collector chuẩn bị hoạt động 🌆", emoji: "🌆" });
    } else if (hour >= 17 && hour < 22) {
      setGreeting({ text: "Buổi tối an lành! Music addicted mode đang bật 🎧", emoji: "🎧" });
    } else {
      setGreeting({ text: "Đã quá 2AM. Vui lòng dừng mọi suy nghĩ sâu xa và đi ngủ! 🌙", emoji: "⚠️" });
    }
  }, []);

  // Increment Phrase Count Handler
  const handlePhraseClick = (phrase: string) => {
    const updated = {
      ...sayCounts,
      [phrase]: (sayCounts[phrase] || 0) + 1
    };
    setSayCounts(updated);
    localStorage.setItem('chuong_say_counts', JSON.stringify(updated));

    // Show temporary glow impact
    setGlowColor('yellow');
    setTimeout(() => setGlowColor('none'), 300);
  };

  // Get Random Fact Handler
  const showRandomFact = () => {
    const facts = [
      "Chương có khả năng biến 5 phút xem YouTube thành 3 tiếng đồng hồ vô tri.",
      "Chương có niềm đam mê mãnh liệt với hoàng hôn, điện thoại chụp ảnh hoàng hôn nhiều hơn ảnh người.",
      "Workspace phải thật gọn gàng thì mới code được (nhưng chỉ giữ sạch được 2 ngày).",
      "Mỗi khi gặp bài toán khó, Chương hay nói 'Yarshhh' rồi... đi ngủ sớm (fake:D).",
      "Thực ra Chương rất dễ vui vẻ bởi những điều giản dị như chăn lạnh, phòng tối và một ly cà phê ngon."
    ];
    const randomIndex = Math.floor(Math.random() * facts.length);
    setActiveFact(facts[randomIndex]);
    setFactOpen(true);
  };

  // Glow classes mapper
  const getGlowClass = () => {
    switch (glowColor) {
      case 'green': return 'shadow-[0_0_50px_rgba(220,255,0,0.15)] ring-1 ring-[#DCFF00]/20';
      case 'yellow': return 'shadow-[0_0_50px_rgba(216,249,10,0.2)] ring-1 ring-[#D8F90A]/30';
      case 'blue': return 'shadow-[0_0_50px_rgba(59,130,246,0.2)] ring-1 ring-blue-500/20';
      default: return 'ring-1 ring-white/5';
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 font-sans text-[#F2F2F2] selection:bg-[#DCFF00] selection:text-[#0A0A0A] transition-all duration-700">
      
      {/* Time-based Banner */}
      <div className="max-w-[640px] mx-auto mb-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3.5 flex items-center justify-between gap-3 text-sm text-white/90 shadow-md">
        <div className="flex items-center gap-2.5">
          <span className="text-lg animate-bounce">{greeting.emoji}</span>
          <span className="font-medium tracking-wide">{greeting.text}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
          <Clock className="w-3.5 h-3.5" />
          <span>{new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      <div className={`max-w-[640px] mx-auto shadow-2xl overflow-hidden bg-[#111111] rounded-2xl transition-all duration-500 ${getGlowClass()}`}>
        
        {/* Section 1 — Hero */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '640 / 820' }}>
          <video 
            className="absolute inset-0 w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_064822_f120e48a-d545-45dd-a02d-facb07829888.mp4"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(17,17,17,0) 45%, rgba(17,17,17,0.45) 68%, rgba(17,17,17,0.9) 88%, rgba(17,17,17,1) 100%)' }}></div>
          
          <div className="relative z-10 h-full flex flex-col items-center text-center px-6 pt-12 pb-10">
            {/* Top Brand Block */}
            <div className="text-white flex flex-col items-center">
              <h1 className="text-[28px] leading-[0.95] tracking-tight hover:scale-105 transition-transform duration-300 cursor-default" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Góc nhỏ của Chương
              </h1>
              <div className="text-[13px] tracking-[0.22em] font-medium mt-1 text-white/70">
                STUDENT BY DAY. OVERTHINKER BY NIGHT.
              </div>
            </div>
            
            <div className="mt-28"></div>
            
            {/* Ambient Glow Interactive Badges */}
            <div className="flex flex-wrap gap-2 items-center justify-center text-xs p-1.5 rounded-2xl bg-[#000]/40 backdrop-blur-md border border-white/10 max-w-[90%]">
              <button 
                onClick={() => setGlowColor('green')}
                className={`px-3 py-1.5 rounded-xl transition-all duration-300 flex items-center gap-1 ${glowColor === 'green' ? 'bg-[#DCFF00] text-[#0A0A0A] font-bold shadow-md' : 'text-white/80 hover:bg-white/5'}`}
              >
                <span>🟢</span> alive
              </button>
              <button 
                onClick={() => setGlowColor('yellow')}
                className={`px-3 py-1.5 rounded-xl transition-all duration-300 flex items-center gap-1 ${glowColor === 'yellow' ? 'bg-[#D8F90A] text-[#0A0A0A] font-bold shadow-md' : 'text-white/80 hover:bg-white/5'}`}
              >
                <span>🟡</span> sleep deprived
              </button>
              <button 
                onClick={() => setGlowColor('blue')}
                className={`px-3 py-1.5 rounded-xl transition-all duration-300 flex items-center gap-1 ${glowColor === 'blue' ? 'bg-blue-500 text-white font-bold shadow-md' : 'text-white/80 hover:bg-white/5'}`}
              >
                <span>🔵</span> panic
              </button>
            </div>

            {/* Mini Music Vibe Player Widget */}
            <div className="mt-6 bg-[#000]/60 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 flex items-center gap-3.5 w-[280px] justify-between shadow-lg">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-full bg-white text-[#111] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-[#111]" /> : <Play className="w-3.5 h-3.5 fill-[#111] ml-0.5" />}
                </button>
                <div className="text-left w-[150px] overflow-hidden whitespace-nowrap">
                  <div className={`text-[12px] font-semibold text-white/95 truncate ${isPlaying ? 'animate-[pulse_2s_infinite]' : ''}`}>
                    {playlist[trackIndex].title}
                  </div>
                  <div className="text-[10px] text-white/60 truncate">{playlist[trackIndex].artist}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {isPlaying ? (
                  <div className="flex items-end gap-0.5 h-4 w-4">
                    <span className="w-[2px] bg-[#DCFF00] animate-[pulse_0.8s_infinite] h-full"></span>
                    <span className="w-[2px] bg-[#DCFF00] animate-[pulse_1.2s_infinite] h-2"></span>
                    <span className="w-[2px] bg-[#DCFF00] animate-[pulse_0.6s_infinite] h-3"></span>
                  </div>
                ) : (
                  <Music2 className="w-4 h-4 text-white/40" />
                )}
                <button 
                  onClick={() => setTrackIndex((trackIndex + 1) % playlist.length)}
                  className="text-white/40 hover:text-white/80 text-[10px] font-bold"
                >
                  NEXT
                </button>
              </div>
            </div>
            
            <div className="flex-1"></div>
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {['🎧 music addicted', '🌆 sunset collector', '🤖 AI enthusiast', '☕ caffeine fueled'].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/90 border border-white/5 hover:bg-white/20 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-white text-[58px] leading-[1.02] tracking-tight max-w-[560px] cursor-default" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Hi, mình là Chương 👋
            </h2>
            <p className="mt-4 max-w-[480px] text-[17px] text-white/80 leading-[1.5]">
              Chào bạn ghé thăm góc nhỏ của Chương! Nơi mình lưu giữ niềm vui từ những điều giản dị — từ việc say sưa vọc vạch những thứ mới mẻ cho đến những chuyến đi khám phá.
            </p>
            
            <button 
              onClick={() => {
                setGlowColor('green');
                setTimeout(() => setGlowColor('none'), 800);
              }}
              className="mt-10 inline-flex items-center gap-3 bg-[#D8F90A] text-[#1E1E1E] font-semibold rounded-full px-8 py-4 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#D8F90A]/10 active:scale-95"
            >
              Khám phá thế giới của mình
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Section 2 — Intro copy + CTA */}
        <div className="px-[78px] pb-8 pt-6 text-center">
          <p className="text-[18px] leading-[1.55] mb-8 text-[#E8E8E8]">
            Bản thân mình là một người nội – ngoại nửa mùa. Có thể vui rất nhiều nhưng cũng nhanh chóng buồn đi một chút. Cuộc sống không cần phải hoàn hảo mọi lúc. Chỉ cần mình vẫn đang sống thật với chính mình ở một phiên bản tốt đẹp hơn hôm qua là được 🌷.
          </p>
          <div className="mb-8 border-l-2 border-[#DCFF00] pl-6 text-left py-2 opacity-80 italic text-white/90 text-[15px] bg-white/5 rounded-r-lg pr-4">
            "Con người bị kết án là phải tự do. Bởi vì một khi bị ném vào thế giới này, anh ta phải chịu trách nhiệm cho mọi việc mình làm." — Jean-Paul Sartre
          </div>
          <div className="flex justify-center pb-14">
            <PrimaryButton 
              label="My Vibe / Philosophy" 
              onClick={() => {
                setGlowColor('blue');
                setTimeout(() => setGlowColor('none'), 1000);
              }} 
            />
          </div>
        </div>
        
        <Divider />

        {/* Section 3 — Things I love */}
        <div className="px-9 pb-8">
          <h2 className="text-center text-[46px] leading-[1.05] tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Things that make me unreasonably happy
          </h2>
        </div>
        
        <div className="px-[42px] pb-10">
          <div className="block overflow-hidden rounded-[14px] group relative cursor-pointer">
            <div className="absolute inset-0 bg-[#DCFF00]/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4"
            />
            <div className="absolute bottom-4 right-4 z-20 bg-[#000]/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-[#DCFF00] font-mono border border-[#DCFF00]/20">
              🌆 sunset & relax vibes
            </div>
          </div>
        </div>
        
        <div className="px-[76px] pb-10">
          <div className="max-w-[489px] mx-auto">
            <Step number={1}>Trời màu cam lúc chiều tà hoặc đang tắm biển ngắm Mặt Trời ló lên.</Step>
            <Step number={2}>Chăn lạnh + phòng tối =&gt; Ve ry naiii! Cảm giác vừa tắm xong lúc khuya ối tuyệt cú mèo.</Step>
            <Step number={3}>Mưa nhẹ lúc đang nghe nhạc, không gian chill, một workspace gọn gàng sạch sẽ hoặc một góc quán quen.</Step>
            <Step number={4}>Cảm giác nhẹ nhõm sau khi giải quyết xong một bài toán khó.</Step>
          </div>
        </div>
        
        <div className="flex justify-center pb-14">
          <SolidButton label="Random things about me" onClick={showRandomFact} />
        </div>
        
        <Divider />

        {/* Section 4 — Toxic Traits & Lore */}
        <div className="pb-7 px-9">
          <h2 className="text-center text-[46px] leading-[1.05] tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
            My Toxic Traits & Lore
          </h2>
        </div>
        
        <div className="px-[42px] pb-10">
          <div className="block overflow-hidden rounded-[14px] group relative cursor-pointer">
            <div className="absolute inset-0 bg-red-500/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_110451_9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4"
            />
            <div className="absolute bottom-4 right-4 z-20 bg-[#000]/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-red-400 font-mono border border-red-500/20">
              ⚠️ questionable midnight decisions
            </div>
          </div>
        </div>
        
        <div className="px-[78px] pb-8 text-center">
          <p className="text-[18px] leading-[1.55] text-[#E8E8E8]">
            Nghĩ rằng mình sẽ ngủ sớm hôm nay nhưng lại mở YouTube '5 phút thôi'. Đôi lúc đưa ra vài quyết định questionable sau 2AM và hay overanalyze tin nhắn đơn giản. Sở thích: tẻn tẻn part-time, đọc manga full-time, và romanticize cuộc sống vô lý.
          </p>
        </div>
        
        <div className="flex justify-center pb-14">
          <SolidButton label="Xem Mini Diary" onClick={() => setDiaryOpen(true)} />
        </div>

        {/* Section 5 — Lime CTA card */}
        <div className="px-14 pb-12">
          <div className="bg-[#D8F90A] rounded-2xl px-6 py-12 text-center shadow-lg relative overflow-hidden group">
            {/* Background design elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/20 rounded-full blur-xl transition-all duration-500 group-hover:scale-150"></div>
            
            <h2 className="text-[#1E1E1E] text-[52px] leading-[1.02] tracking-tight mb-2 flex items-center justify-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Things I Say Too Much
              <Sparkles className="w-7 h-7 text-[#1E1E1E]/80 animate-spin" style={{ animationDuration: '6s' }} />
            </h2>
            
            <p className="text-[#1E1E1E]/70 text-xs mb-6 font-semibold uppercase tracking-wider">
              👇 Nhấn thử để đếm số lần nói thực tế 👇
            </p>

            {/* Clicker counters grid */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-8 px-2">
              {phrases.map((phrase) => {
                const count = sayCounts[phrase] || 0;
                return (
                  <button
                    key={phrase}
                    onClick={() => handlePhraseClick(phrase)}
                    className="bg-[#1E1E1E] text-[#D8F90A] text-sm font-semibold rounded-xl px-4 py-2.5 hover:bg-[#000] hover:scale-105 transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-sm border border-white/5"
                  >
                    <span>“{phrase}”</span>
                    <span className="bg-[#D8F90A]/20 px-2 py-0.5 rounded-lg text-xs font-mono text-[#D8F90A]">
                      x{count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center">
              <PrimaryButton 
                label="Say Hi!" 
                className="bg-[#0A0A0A] text-[#D8F90A] hover:bg-[#000] shadow-md hover:shadow-[#000]/25" 
                onClick={() => alert("Chào bạn ghé thăm portfolio của Chương! Hãy giữ liên lạc nhé 👋")}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#080808] text-white pt-12 px-10 text-center border-t border-white/5">
          <div className="pb-8 flex justify-center">
            <a href="#" className="text-[30px] font-bold tracking-tight text-white hover:text-[#DCFF00] transition-colors" style={{ fontFamily: "'Instrument Serif', serif" }}>
              CHƯƠNG.
            </a>
          </div>
          
          <p className="text-[12px] text-[#83837D] leading-[1.5] pb-8 max-w-[400px] mx-auto italic">
            Đôi lúc nên mặc kệ đời, ngủ là thoải mái nhất. Sao mà làm tệ đến như vậy!!! Lười quá làm không nổi (fake:D).
          </p>

          <div className="flex justify-center pb-8">
            <div className="h-px w-24 bg-white/20"></div>
          </div>

          <div className="flex justify-center gap-5 pb-5">
            {[Facebook, Twitter, Instagram, Youtube, Linkedin, Music2].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-all duration-300 hover:scale-110">
                <Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>

          <p className="text-[10px] text-[#83837D] pb-4 leading-[1.6] max-w-[320px] mx-auto">
            made with poor sleep schedule & emotional attachment to aesthetics. 🌙
          </p>

          <div className="text-[12px] pb-3 space-x-2">
            <a href="#" className="hover:underline hover:text-white transition-colors">Support</a>
            <span className="text-[#8F8E88]">|</span>
            <a href="#" className="hover:underline hover:text-white transition-colors">Privacy</a>
            <span className="text-[#8F8E88]">|</span>
            <a href="#" className="hover:underline hover:text-white transition-colors">Terms</a>
            <span className="text-[#8F8E88]">|</span>
            <a href="#" className="hover:underline hover:text-white transition-colors">Unsubscribe</a>
          </div>

          <a href="#" className="text-[12px] text-white/80 hover:text-white inline-block mb-10 transition-colors">
            ©2026 Chương
          </a>
        </footer>

      </div>

      {/* DIARY MODAL */}
      {diaryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setDiaryOpen(false)}></div>
          <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-[500px] z-10 overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/20">
              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-[#DCFF00]" />
                <h3 className="font-semibold text-lg" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Chương's Mini Diary
                </h3>
              </div>
              <button onClick={() => setDiaryOpen(false)} className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 max-h-[350px] overflow-y-auto space-y-5 scrollbar-thin scrollbar-thumb-white/10">
              {[
                { date: "25/05/2026 - 02:15 AM", log: "Hứa ngủ sớm lúc 11h. Hiện tại đang nằm xem YouTube giải thích về cấu tạo của chiếc thìa ăn cơm. Khá là hợp lý." },
                { date: "24/05/2026 - 06:30 PM", log: "Sunset collector hoạt động. Chiều nay bầu trời màu cam cháy đỉnh thực sự, đứng ngắm một lúc quên cả việc cần làm..." },
                { date: "22/05/2026 - 03:00 AM", log: "Vừa fix xong bug code bài tập lớn. Cảm giác nhẹ nhõm vãi chưởng, tự thưởng cho mình một gói mì ăn liền." },
                { date: "20/05/2026 - 01:10 AM", log: "Nghe nhạc lofi và code một workspace siêu gọn gàng. Đây chính là đỉnh cao của sự thoải mái." }
              ].map((entry, index) => (
                <div key={index} className="border-l-2 border-white/10 pl-4 py-1 hover:border-[#DCFF00] transition-colors group/entry">
                  <div className="text-[11px] font-mono text-[#DCFF00] mb-1">{entry.date}</div>
                  <p className="text-sm text-[#E8E8E8] leading-relaxed group-hover/entry:text-white transition-colors">{entry.log}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-black/20 border-t border-white/10 text-center">
              <button 
                onClick={() => setDiaryOpen(false)}
                className="w-full py-2 bg-white text-black font-semibold rounded-lg text-sm hover:bg-[#E8E8E8] transition-colors"
              >
                Đóng Nhật Ký
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RANDOM FACT MODAL */}
      {factOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setFactOpen(false)}></div>
          <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-[450px] z-10 overflow-hidden shadow-2xl relative p-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-[#DCFF00]/10 flex items-center justify-center mx-auto mb-4 text-[#DCFF00]">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="font-semibold text-xl mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Random fact về Chương
            </h3>
            <p className="text-sm text-[#E8E8E8] leading-relaxed mb-6 font-medium">
              "{activeFact}"
            </p>
            <div className="flex gap-3">
              <button 
                onClick={showRandomFact}
                className="flex-1 py-2.5 bg-[#DCFF00] text-black font-semibold rounded-lg text-sm hover:bg-[#c9ea00] transition-colors"
              >
                Xem cái khác 🔄
              </button>
              <button 
                onClick={() => setFactOpen(false)}
                className="flex-1 py-2.5 bg-white/10 text-white font-semibold rounded-lg text-sm hover:bg-white/15 transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
