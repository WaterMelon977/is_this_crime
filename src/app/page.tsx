"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type ShowcaseItemData = {
  image_url: string;
  text: string;
};

const items: ShowcaseItemData[] = [
  {
    image_url: "/0.jpg",
    text: "Once upon a time, I was down after the sad ending of my IAS journey 💔, when a girl came into my life and kindled my broken spirit ✨. I was genuinely awestruck 🤩 by her charming personality 🌸 and the honest empathy ❤️ she showed in trying to rekindle a weary soul. We drank together 🍷, we chilled that night 🌙, and with her presence, years of sad memories and darkness 🌌 vanished into thin air . And from that moment, began my genuine love for her ❤️🔥.",
  },
  {
    image_url: "/1.jpg",
    text: "And this is a photo of her family (taken by me, of course 😎). In this picture, you can see a bond — a bond between her father and mother 🤝. And she, as shown here, is that very bond ❤️, the invisible thread that always holds them together. Subbu is the glue 🪢 that keeps her family close. She looks after Bhargavi 💌 and makes genuine efforts to reconnect with her. She’s always there for her mother 👩‍👧, talking every single day and sharing everything that happened (amazing mom–daughter energy 🤩). She always supports her brother 💙, fights for him too 💪 (you should ask Devi and Prabhas about this!). She strives to set right every wrong ✨, always trying to brighten everyone’s day 🌞. From buying a drone for her brother 🚁 to a finger-directed remote car for her little brother 🚗😍, she puts thought into every gesture. This is a testament to how deeply she values family, relationships, and bonds 💖. And honestly, her future husband will be the luckiest man alive 😅.",
  },
  {
    image_url: "/2.jpg",
    text: "She loves water 🌊, adventures, hiking, and being surrounded by nature. Guess who loves all of that too? ( Hint: he's standing right beside her in the picture above 😁. )  With you, every trip feels magical, every vibe unmatched 👫. I could travel the entire world with you and never feel a hint of exhaustion—because your presence is my energy 💪.",
  },
  {
    image_url: "/3.jpg",
    text: "With her by my side 👫, no problem could ever faze me. Knowing I live in her thoughts, I would cross a hundred obstacles with joy— and stand ready to cross a thousand more without hesitation 💪.",
  },
  {
    image_url: "/4.jpg",
    text: "Her beauty 👸 is undeniable, but it is her heart ❤️ that truly outshines even her flawless looks — a beauty that could rival and surpass her own reflection . I am the luckiest man alive to have even crossed paths with her, and to walk beside her until she’s 90 👵 and I’m 95 👴 would be a gift I’d die for — any day, any hour, any second ⏳. I’m grateful beyond words 🙏 for knowing her the way I do. She is the woman to whom I would gladly give my heart 💖, and I will love her — in the way she wishes to be loved 💍 — for all eternity ♾️.",
  },
  {
    image_url: "/5.jpg",
    text: "To the girl who, despite life's hardships, carries a smile 😊 and never lets her sadness weigh on others 🌈. To the professional who, armed only with her degree 🎓, earned her place at Wipro 💼 and continues to receive heartfelt appreciation from clients ❤️. To the devoted daughter 👩‍👩‍👦 who supports her family at every step 🤗. To the friend who holds her circle together like glue 🫂, planning trips ✈️ and ensuring no one is left behind 🗺️. To the bubbly soul 🌟 everyone in Wipro wants to be around 😄. To the girl who has always stood by me 🙌. To the cutest 🥰, bravest 💪, and strongest 🦸‍♀️ girl I know. Knowing you has been a blessing ✨, and I will always be grateful 🙏 for the gift of crossing paths with you 🌹.",
  },
  {
    image_url: "/6.jpg",
    text: "To answer the title — loving someone is no crime ❤️‍🔥 — and in my case, it feels like a blessing beyond measure ✨🙏. What amazes me even more is that she is no ordinary woman 👑; she feels like a mythical being 🕊️ who has descended from the sky ☁️ to grace this earth 🌍. From everything I’ve said before, it’s clear — she is, without doubt, the greatest woman there is 🌟💖. What truly surprises me is how others, even after meeting her 🤝, fail to realize they’ve just crossed paths with the strongest 💪, bravest 🦸‍♀️, and cutest 🥰 soul to ever exist. Knowing how extraordinary she is makes me feel good about myself 😌🌸 and even helps me love myself more 💗 — because she chose to be a part of my life 🌹. I learned more about myself  and my priorities in life 🎯 after knowing her.",
  },
];

function ShowcaseItem({ image_url, text }: ShowcaseItemData) {
  return (
    <section className="min-h-screen lg:min-h-[70vh] flex flex-col lg:grid lg:grid-cols-[2fr_1fr] lg:gap-6">
      <div className="relative h-[70vh] w-full lg:h-auto">
        <Image
          src={image_url}
          alt="showcase image"
          fill
          className="object-cover"
          unoptimized
          sizes="100vw"
        />
      </div>
      <div className="h-[30vh] lg:h-auto overflow-y-auto p-4 box-border overscroll-contain">
        <div
          className={`text-base leading-relaxed whitespace-pre-wrap ${inter.className}`}
        >
          {text}
        </div>
      </div>
    </section>
  );
}

function IntroSlide() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/0.jpg"
        alt="intro background"
        fill
        className="object-cover"
        unoptimized
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-center px-4 text-white">
        Is loving someone genuinely a crime?
      </h1>
    </section>
  );
}

function InfinitySlide() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/40 via-indigo-600/40 to-cyan-500/40" />
      <div className="absolute -inset-20 opacity-30 blur-3xl animate-slow-spin bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="relative text-center px-6">
        <div className="inline-block">
          <span className="block text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-white to-cyan-200 animate-shimmer">
            #SSInfinity
          </span>
          <span
            className="mt-4 block text-xl sm:text-3xl lg:text-4xl font-semibold text-white/90 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            SuprajaSumanthInfinity
          </span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = items.length + 2; // intro + infinity + items
  const goNext = () => setIndex((i) => (i + 1) % totalSlides);
  const goPrev = () => setIndex((i) => (i - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % totalSlides);
      }
      if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + totalSlides) % totalSlides);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [totalSlides]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const deltaX = touchEndX.current - touchStartX.current;
    const threshold = 50;
    if (deltaX > threshold) {
      goPrev();
    } else if (deltaX < -threshold) {
      goNext();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <div
        className="relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {index === 0 ? (
          <IntroSlide />
        ) : index === totalSlides - 1 ? (
          <InfinitySlide />
        ) : (
          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-indigo-500 to-teal-400">
            <div className="rounded-[inherit] overflow-hidden">
              <ShowcaseItem {...items[index - 1]} />
            </div>
          </div>
        )}

        <button
          type="button"
          aria-label="Previous"
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-md hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
        >
          ◀
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-md hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
        >
          ▶
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-2 py-1 rounded-md">
          {index + 1} / {totalSlides}
        </div>
      </div>
    </main>
  );
}
