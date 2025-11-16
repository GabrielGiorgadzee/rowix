import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code,
  Palette,
  Search,
  Smartphone,
  Globe,
  Database,
  Award,
  Users,
  Target,
  Zap,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function Body() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [actionCards, setActionCards] = useState([]);

  const slides = [
    {
      title: "თანამედროვე ტექნოლოგიები",
      description: "შექმენი შენი მომავალი React-ით",
      // bgColor: "from-purple-600 to-blue-600",
      bgColor:
        "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white",
    },
    {
      title: "ინოვაციური დიზაინი",
      description: "Tailwind CSS-ით უნიკალური გვერდები",
      bgColor:
        "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white",
    },
    {
      title: "გამორჩეული ანიმაციები",
      description: "Anime.js-ის ცოცხალი ინტერფეისი",
      bgColor:
        "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white",
    },
  ];

  const actions = [
    {
      icon: Code,
      text: "ვებ დეველოპმენტი",
      color: "bg-gradient-to-br from-blue-500 to-cyan-400",
      hoverColor: "hover:from-blue-600 hover:to-cyan-500",
    },
    {
      icon: Palette,
      text: "UI/UX დიზაინი",
      color: "bg-gradient-to-br from-purple-500 to-pink-400",
      hoverColor: "hover:from-purple-600 hover:to-pink-500",
    },
    {
      icon: Search,
      text: "SEO ოპტიმიზაცია",
      color: "bg-gradient-to-br from-green-500 to-emerald-400",
      hoverColor: "hover:from-green-600 hover:to-emerald-500",
    },
    {
      icon: Smartphone,
      text: "მობაილ აპები",
      color: "bg-gradient-to-br from-orange-500 to-red-400",
      hoverColor: "hover:from-orange-600 hover:to-red-500",
    },
    {
      icon: Globe,
      text: "ვებ ჰოსტინგი",
      color: "bg-gradient-to-br from-indigo-500 to-blue-400",
      hoverColor: "hover:from-indigo-600 hover:to-blue-500",
    },
    {
      icon: Database,
      text: "მონაცემთა ბაზა",
      color: "bg-gradient-to-br from-teal-500 to-cyan-400",
      hoverColor: "hover:from-teal-600 hover:to-cyan-500",
    },
  ];

  const aboutStats = [
    {
      icon: Award,
      number: "150+",
      label: "დასრულებული პროექტი",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      number: "200+",
      label: "კმაყოფილი კლიენტი",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      number: "98%",
      label: "წარმატების მაჩვენებელი",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      number: "24/7",
      label: "მხარდაჭერა",
      color: "from-purple-500 to-pink-500",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    setActionCards(actions);
  }, []);

  useEffect(() => {
    if (actionCards.length > 0) {
      anime({
        targets: ".action-card",
        translateY: [80, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: anime.stagger(120),
        easing: "easeOutExpo",
        duration: 1200,
      });
    }
  }, [actionCards]);

  useEffect(() => {
    if (isLoaded) {
      anime({
        targets: ".about-stat",
        translateY: [60, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: anime.stagger(150, { start: 300 }),
        easing: "easeOutExpo",
        duration: 1000,
      });
    }
  }, [isLoaded]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition = section.offsetTop;

      anime({
        targets: window,
        scrollTop: targetPosition,
        duration: 1500,
        easing: "easeInOutCubic",
      });
    }
  };

  useEffect(() => {
    window.scrollToSection = scrollToSection;

    return () => {
      delete window.scrollToSection;
    };
  }, []);

  useEffect(() => {
    anime({
      targets: ".slide-title",
      translateX: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutCubic",
      duration: 800,
    });

    anime({
      targets: ".slide-description",
      translateX: [100, 0],
      opacity: [0, 1],
      easing: "easeOutCubic",
      duration: 800,
      delay: 200,
    });

    anime({
      targets: ".slide-button",
      scale: [0, 1],
      opacity: [0, 1],
      easing: "easeOutElastic(1, .6)",
      duration: 1000,
      delay: 400,
    });
  }, [currentSlide]);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {!isLoaded && (
        <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
          <div className="text-2xl">იტვირთება... ⏳</div>
        </div>
      )}

      {/* Hero Slider */}
      <section
        className={`h-screen transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          speed={600}
          onSlideChange={handleSlideChange}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-full w-full bg-gradient-to-br ${slide.bgColor} flex items-center justify-center`}
              >
                <div className="text-center px-4 max-w-4xl">
                  <h1 className="slide-title text-5xl md:text-7xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="slide-description text-xl md:text-3xl mb-8">
                    {slide.description}
                  </p>
                  <a href="https://rowix.com" target="_blank">
                    <Button
                      className="slide-button bg-white text-slate-900 hover:bg-slate-100 text-lg px-10 py-7"
                      style={{ cursor: "pointer" }}
                    >
                      გაიგე მეტი
                    </Button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Services */}
      <section className="py-20 px-4" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            ჩვენი სერვისები
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {actionCards.length > 0 ? (
              actionCards.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Card
                    key={index}
                    className={`action-card ${action.color} ${action.hoverColor} border-0 p-8 cursor-pointer hover:scale-110 hover:shadow-2xl transition-all duration-300 opacity-0`}
                    onClick={() => alert(`${action.text} არჩეულია!`)}
                  >
                    <div className="flex flex-col items-center text-white">
                      <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm">
                        <Icon className="w-10 h-10" />
                      </div>
                      <span className="font-semibold text-lg text-center">
                        {action.text}
                      </span>
                    </div>
                  </Card>
                );
              })
            ) : (
              <p className="col-span-3 text-center">იტვირთება...</p>
            )}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 px-4 bg-slate-800/50" id="about-us">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">ჩვენ შესახებ</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              ჩვენ ვართ თანამედროვე IT კომპანია, რომელიც ეხმარება ბიზნესებს
              ონლაინ სივრცეში წარმატების მიღწევაში. ჩვენი გუნდი აერთიანებს
              კრეატიულობასა და ტექნოლოგიურ ინოვაციას, რათა შექმნას უნიკალური და
              ეფექტური პროდუქტები.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {aboutStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className={`about-stat bg-gradient-to-br ${stat.color} border-0 p-8 text-center hover:scale-105 transition-all duration-300 opacity-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)]`}
                >
                  <div className="flex flex-col items-center text-white">
                    <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm font-medium">{stat.label}</div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-slate-700 p-10 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold">ჩვენი მისია</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                ჩვენი მისიაა დავეხმაროთ ბიზნესებს ციფრული ტრანსფორმაციის
                პროცესში, შევქმნათ ინოვაციური პროექტები, რომლებიც ზრდის
                პროდუქტიულობასა და აუმჯობესებს მომხმარებელთა გამოცდილებას.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-slate-700 p-10 hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold">ჩვენი ხედვა</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                ჩვენ ვართ წამყვანი IT კომპანია, ცნობილი ხარისხით, ინოვაციებითა
                და კლიენტებზე ორიენტირებული მიდგომით. ჩვენ ვქმნით მომავალს.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Body;
