import React from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, Youtube, Linkedin, Music2 } from 'lucide-react';

const Step = ({ number, children }: { number: number, children: React.ReactNode }) => (
  <div className="flex items-start gap-5 mb-6 last:mb-0">
    <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#DCFF00] flex items-center justify-center text-[#0A0A0A] font-bold text-xs mt-1">
      {number}
    </div>
    <div className="text-[17px] leading-[1.55] text-[#E8E8E8]">
      {children}
    </div>
  </div>
);

const Divider = () => (
  <div className="py-8 flex justify-center">
    <div className="h-px w-24 bg-white/20"></div>
  </div>
);

const PrimaryButton = ({ label, className = "" }: { label: string, className?: string }) => (
  <a href="#" className={`inline-flex items-center gap-3 bg-[#DCFF00] text-[#0A0A0A] font-bold rounded-lg px-6 py-3 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200 ${className}`}>
    {label}
    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
  </a>
);

const SolidButton = ({ label }: { label: string }) => (
  <a href="#" className="inline-block bg-white text-[#0A0A0A] font-bold rounded-lg px-8 py-3 hover:bg-[#E8E8E8] hover:-translate-y-0.5 transition-all duration-200">
    {label}
  </a>
);

function App() {
  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 font-sans text-[#F2F2F2]">
      <div className="max-w-[640px] mx-auto shadow-2xl overflow-hidden ring-1 ring-white/5 bg-[#111111]">
        
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
            <div className="text-white flex flex-col items-center">
              <h1 className="text-[28px] leading-[0.95] tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Góc nhỏ của Chương
              </h1>
              <div className="text-[13px] tracking-[0.22em] font-medium mt-1">
                STUDENT BY DAY. OVERTHINKER BY NIGHT.
              </div>
            </div>
            
            <div className="mt-40"></div>
            
            <div className="flex gap-2 items-center justify-center text-sm px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/90">
              🟢 alive <span className="text-white/30 px-1">|</span> 🟡 slightly sleep deprived <span className="text-white/30 px-1">|</span> 🔵 pretending not to panic about deadlines
            </div>
            
            <div className="flex-1"></div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['🎧 music addicted', '🌆 sunset collector', '🤖 AI enthusiast', '☕ caffeine fueled'].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/90 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-white text-[58px] leading-[1.02] tracking-tight max-w-[560px]" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Hi, mình là Chương 👋
            </h2>
            <p className="mt-4 max-w-[480px] text-[17px] text-white/80 leading-[1.5]">
              Chào bạn ghé thăm góc nhỏ của Chương! Nơi mình lưu giữ niềm vui từ những điều giản dị — từ việc say sưa vọc vạch những thứ mới mẻ cho đến những chuyến đi khám phá.
            </p>
            
            <a href="#" className="mt-10 inline-flex items-center gap-3 bg-[#D8F90A] text-[#1E1E1E] font-semibold rounded-full px-8 py-4 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200">
              Khám phá thế giới của mình
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Section 2 — Intro copy + CTA */}
        <div className="px-[78px] pb-8 pt-4 text-center">
          <p className="text-[18px] leading-[1.55] mb-8">
            Bản thân mình là một người nội – ngoại nửa mùa. Có thể vui rất nhiều nhưng cũng nhanh chóng buồn đi một chút. Cuộc sống không cần phải hoàn hảo mọi lúc. Chỉ cần mình vẫn đang sống thật với chính mình ở một phiên bản tốt đẹp hơn hôm qua là được 🌷.
          </p>
          <div className="mb-8 border-l-2 border-[#DCFF00] pl-6 text-left py-2 opacity-80 italic">
            "Con người bị kết án là phải tự do. Bởi vì một khi bị ném vào thế giới này, anh ta phải chịu trách nhiệm cho mọi việc mình làm. — Jean-Paul Sartre"
          </div>
          <div className="flex justify-center pb-14">
            <PrimaryButton label="My Vibe / Philosophy" />
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
          <a href="#" className="block overflow-hidden rounded-[14px] group">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4"
            />
          </a>
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
          <SolidButton label="Random things about me" />
        </div>
        
        <Divider />

        {/* Section 4 — Toxic Traits & Lore */}
        <div className="pb-7 px-9">
          <h2 className="text-center text-[46px] leading-[1.05] tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
            My Toxic Traits & Lore
          </h2>
        </div>
        
        <div className="px-[42px] pb-10">
          <a href="#" className="block overflow-hidden rounded-[14px] group">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_110451_9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4"
            />
          </a>
        </div>
        
        <div className="px-[78px] pb-8 text-center">
          <p className="text-[18px] leading-[1.55]">
            Nghĩ rằng mình sẽ ngủ sớm hôm nay nhưng lại mở YouTube '5 phút thôi'. Đôi lúc đưa ra vài quyết định questionable sau 2AM và hay overanalyze tin nhắn đơn giản. Sở thích: tẻn tẻn part-time, đọc manga full-time, và romanticize cuộc sống vô lý.
          </p>
        </div>
        
        <div className="flex justify-center pb-14">
          <SolidButton label="Xem Mini Diary" />
        </div>

        {/* Section 5 — Lime CTA card */}
        <div className="px-14 pb-12">
          <div className="bg-[#D8F90A] rounded-[10px] px-8 py-12 text-center">
            <h2 className="text-[#1E1E1E] text-[52px] leading-[1.02] tracking-tight mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Things I Say Too Much
            </h2>
            <p className="text-[#1E1E1E] text-[18px] leading-[1.5] mb-8 px-4">
              “để mai làm” • “wait cái món đồ này oke hơn nè” • “thôi ngủ sớm nha” (fake) • “Yarshhh” • “Hachimi Hachimi” • “Mệt vãi chưởng”
            </p>
            <div className="flex justify-center">
              <PrimaryButton label="Say Hi!" className="bg-[#0A0A0A] text-[#D8F90A] hover:bg-[#1a1a1a]" />
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
          
          <p className="text-[12px] text-[#83837D] leading-[1.5] pb-8 max-w-[400px] mx-auto">
            Đôi lúc nên mặc kệ đời, ngủ là thoải mái nhất. Sao mà làm tệ đến như vậy!!! Lười quá làm không nổi (fake:D).
          </p>

          <div className="flex justify-center pb-8">
            <div className="h-px w-24 bg-white/20"></div>
          </div>

          <div className="flex justify-center gap-5 pb-5">
            {[Facebook, Twitter, Instagram, Youtube, Linkedin, Music2].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors">
                <Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>

          <p className="text-[10px] text-[#83837D] pb-4 leading-[1.6]">
            made with poor sleep schedule & emotional attachment to aesthetics. 🌙
          </p>

          <div className="text-[12px] pb-3 space-x-2">
            <a href="#" className="hover:underline">Support</a>
            <span className="text-[#8F8E88]">|</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span className="text-[#8F8E88]">|</span>
            <a href="#" className="hover:underline">Terms</a>
            <span className="text-[#8F8E88]">|</span>
            <a href="#" className="hover:underline">Unsubscribe</a>
          </div>

          <a href="#" className="text-[12px] text-white/80 hover:text-white inline-block">
            ©2026 Chương
          </a>
          
          <div className="pb-10"></div>
        </footer>

      </div>
    </div>
  );
}

export default App;
