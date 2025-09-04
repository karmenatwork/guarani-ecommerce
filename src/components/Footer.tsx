import React from "react";
import Image from "next/image";
import Link from "next/link";

export type FooterLink = { label: string; href?: string };
export type FooterColumn = { title: string; links: FooterLink[] };

export interface FooterProps {
  columns?: FooterColumn[];
  social?: { name: "x" | "facebook" | "instagram"; href?: string }[];
  logoSrc?: string;
  className?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Featured",
    links: [{ label: "Air Force 1" }, { label: "Huarache" }, { label: "Air Max 90" }, { label: "Air Max 95" }],
  },
  {
    title: "Shoes",
    links: [{ label: "All Shoes" }, { label: "Custom Shoes" }, { label: "Jordan Shoes" }, { label: "Running Shoes" }],
  },
  {
    title: "Clothing",
    links: [
      { label: "All Clothing" },
      { label: "Modest Wear" },
      { label: "Hoodies & Pullovers" },
      { label: "Shirts & Tops" },
    ],
  },
  {
    title: "Kids'",
    links: [
      { label: "Infant & Toddler Shoes" },
      { label: "Kids' Shoes" },
      { label: "Kids' Jordan Shoes" },
      { label: "Kids' Basketball Shoes" },
    ],
  },
];

const defaultSocial = [
  { name: "x" as const, href: "#" },
  { name: "facebook" as const, href: "#" },
  { name: "instagram" as const, href: "#" },
];

export default function Footer({
  columns = defaultColumns,
  social = defaultSocial,
  logoSrc = "/logo.jpeg",
  className = "",
}: FooterProps) {
  return (
    <footer role="contentinfo" className={`w-full bg-[var(--color-dark-900)] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <Link href="#" aria-label="Home" className="inline-flex">
              <Image src={logoSrc} alt="Brand logo" width={36} height={36} className="h-9 w-9 rounded-sm object-cover" />
            </Link>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title} className="space-y-4">
                <h4 className="text-[var(--color-light-100)] text-sm font-semibold">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href ?? "#"}
                        className="text-[var(--color-dark-500)] text-sm hover:text-[var(--color-light-100)]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-2 flex items-start justify-start md:justify-end gap-4">
            {social.map((s) => {
              const src =
                s.name === "x" ? "/x.svg" : s.name === "facebook" ? "/facebook.svg" : "/instagram.svg";
              const label = s.name.charAt(0).toUpperCase() + s.name.slice(1);
              return (
                <Link
                  key={s.name}
                  href={s.href ?? "#"}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-light-100)]/5 ring-1 ring-[var(--color-dark-700)] hover:bg-[var(--color-light-100)]/10"
                >
                  <Image src={src} alt={label} width={18} height={18} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-dark-700)]/40 pt-6">
          <p className="text-[var(--color-dark-500)] text-xs">&copy; {new Date().getFullYear()} Guarani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
