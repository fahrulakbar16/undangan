"use client";

import { Home, Heart, Calendar, Image as ImageIcon, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_DATA } from "../data";

const NAV_ITEMS = [
  { id: "top",    icon: Home,          label: "Beranda"  },
  { id: "couple", icon: Heart,         label: "Mempelai" },
  { id: "events", icon: Calendar,      label: "Acara"    },
  { id: "gallery",icon: ImageIcon,     label: "Galeri"   },
  { id: "rsvp",   icon: MessageSquare, label: "Ucapan"   },
] as const;

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive]       = useState<string>("top");

  // Show nav after scrolling 80% of first viewport
  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);

      // Determine active section
      const sectionIds = ["rsvp", "gallery", "events", "couple"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= window.innerHeight * 0.5) {
            setActive(id);
            return;
          }
        }
      }
      setActive("top");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filter visible items
  const visibleItems = NAV_ITEMS.filter(({ id }) => {
    if (id === "couple")  return !!MOCK_DATA.couple;
    if (id === "events")  return MOCK_DATA.events?.length > 0;
    if (id === "gallery") return MOCK_DATA.gallery?.images?.length > 0;
    if (id === "rsvp")    return !!MOCK_DATA.wishes;
    return true; // top always shown
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          role="navigation"
          aria-label="Navigasi undangan"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
          style={{ width: "calc(100% - 2.5rem)", maxWidth: 360 }}
        >
          {/* Nav pill */}
          <div
            className="rounded-[22px] py-2 px-3 flex items-end justify-evenly"
            style={{
              background: "rgba(250, 249, 246, 0.88)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow:
                "0 8px 32px rgba(81, 84, 66, 0.15), 0 2px 8px rgba(81, 84, 66, 0.08), inset 0 1px 0 rgba(255,255,255,0.7)",
              border: "1px solid rgba(162, 167, 128, 0.25)",
            }}
          >
            {visibleItems.map(({ id, icon: Icon, label }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 min-w-[52px]"
                  aria-label={label}
                >
                  {/* Active pill background */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-[14px]"
                      style={{ background: "rgba(127, 140, 90, 0.12)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      y: isActive ? -1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="relative z-10"
                  >
                    <Icon
                      className="w-[22px] h-[22px] transition-colors duration-200"
                      style={{
                        color: isActive
                          ? "var(--color-olive)"
                          : "var(--color-dark-olive)",
                        opacity: isActive ? 1 : 0.45,
                        strokeWidth: isActive ? 2 : 1.5,
                        fill: isActive && id === "couple" ? "var(--color-olive)" : "none",
                      }}
                    />
                  </motion.div>

                  {/* Label */}
                  <span
                    className="relative z-10 text-[9px] font-medium tracking-wide leading-none transition-all duration-200"
                    style={{
                      color: isActive ? "var(--color-olive)" : "var(--color-dark-olive)",
                      opacity: isActive ? 1 : 0.4,
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
