"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  { href: "#About", label: "À propos" },
  { href: "#Skills", label: "Compétences" },
  { href: "#Projects", label: "Projets" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 pt-6"
      >
        {/* Brand */}
        <a href="#" className="inline-flex items-center gap-2">
          <span className="font-display text-lg text-black/90 italic">
            Nadia.
          </span>
        </a>

        {/* Desktop links */}
        <PopoverGroup className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-black/70 hover:text-black transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#Contact"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2 text-sm font-medium soft-ring hover:opacity-90 transition"
          >
            Contact
          </a>
        </PopoverGroup>

        {/* Mobile trigger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-white/70 backdrop-blur px-3 py-2 soft-ring"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-5 text-black/80" />
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed right-4 top-4 z-40 w-[92vw] max-w-sm overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl soft-ring">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display italic text-black/90">Nadia.</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full bg-white/70 backdrop-blur px-3 py-2 soft-ring"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-5 text-black/80" />
            </button>
          </div>

          <div className="px-5 pb-5">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-black/80 hover:bg-white/70 transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#Contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-black text-white px-4 py-3 text-sm font-semibold soft-ring hover:opacity-90 transition"
              >
                Contact
              </a>
            </div>

            <div className="mt-4 text-xs text-black/50">
              Basée en France · Remote friendly
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
