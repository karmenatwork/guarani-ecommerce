"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type NavLink = { label: string; href?: string };

export interface NavbarProps {
  links?: NavLink[];
  cartCount?: number;
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
}

const defaultLinks: NavLink[] = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar({
  links = defaultLinks,
  cartCount = 0,
  className = "",
  logoSrc = "/logo.jpeg",
  logoAlt = "Brand logo",
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const menuId = "primary-nav-menu";

  return (
    <nav aria-label="Main" className={`w-full bg-[var(--color-light-100)] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="#" className="flex items-center" aria-label="Home">
              <Image src={logoSrc} alt={logoAlt} width={28} height={28} className="h-7 w-7 object-cover rounded-sm" />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href ?? "#"}
                className="text-[var(--color-dark-900)] text-sm font-medium hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-900)] rounded-sm"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm text-[var(--color-dark-900)] hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-900)] rounded-sm">
              Search
            </button>
            <Link
              href="#"
              className="text-sm text-[var(--color-dark-900)] hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-900)] rounded-sm"
              aria-label="Cart"
            >
              My Cart {cartCount > 0 ? `(${cartCount})` : ""}
            </Link>
          </div>

          <div className="md:hidden">
            <button
              aria-controls={menuId}
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-light-300)] text-[var(--color-dark-900)] focus-visible:ring-2 focus-visible:ring-[var(--color-dark-900)]"
            >
              <span className="sr-only">Open menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id={menuId}
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}
        >
          <div className="pb-4 pt-2">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href ?? "#"}
                  className="px-2 py-2 text-[var(--color-dark-900)] text-base font-medium hover:bg-[var(--color-light-200)] rounded-md"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-6 px-2">
                <button className="text-base text-[var(--color-dark-900)]">Search</button>
                <Link href="#" className="text-base text-[var(--color-dark-900)]">
                  My Cart {cartCount > 0 ? `(${cartCount})` : ""}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
