"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export type BadgeColor = "orange" | "green" | "red";

export interface CardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description?: string;
  price?: number | string;
  href?: string;
  badge?: { text: string; color?: BadgeColor };
  metadata?: string[];
  className?: string;
}

function badgeColorClasses(color: BadgeColor = "orange") {
  if (color === "green") return "bg-[var(--color-green)]/10 text-[var(--color-green)]";
  if (color === "red") return "bg-[var(--color-red)]/10 text-[var(--color-red)]";
  return "bg-[var(--color-orange)]/10 text-[var(--color-orange)]";
}

export default function Card({
  imageSrc,
  imageAlt = "",
  title,
  description,
  price,
  href,
  badge,
  metadata = [],
  className = "",
}: CardProps) {
  return (
    <div className={`group overflow-hidden rounded-xl bg-[var(--color-light-100)] ring-1 ring-[var(--color-light-300)] transition hover:shadow-lg ${className}`}>
      <div className="relative">
        {badge ? (
          <div className="absolute left-3 top-3 z-10">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${badgeColorClasses(badge.color)}`}>
              {badge.text}
            </span>
          </div>
        ) : null}
        {href ? (
          <Link href={href} className="block">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              width={800}
              height={600}
              className="h-60 w-full object-cover sm:h-64 md:h-72 lg:h-80"
            />
          </Link>
        ) : (
          <div className="block">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              width={800}
              height={600}
              className="h-60 w-full object-cover sm:h-64 md:h-72 lg:h-80"
            />
          </div>
        )}
      </div>

      <div className="px-4 pb-4 pt-3">
        <div className="flex items-start justify-between gap-4">
          {href ? (
            <Link href={href} className="block flex-1">
              <h3 className="text-[var(--color-dark-900)] leading-[var(--text-heading-3--line-height)] text-[var(--text-heading-3)] font-medium line-clamp-2">
                {title}
              </h3>
            </Link>
          ) : (
            <div className="block flex-1">
              <h3 className="text-[var(--color-dark-900)] leading-[var(--text-heading-3--line-height)] text-[var(--text-heading-3)] font-medium line-clamp-2">
                {title}
              </h3>
            </div>
          )}
          {price !== undefined ? (
            <span className="shrink-0 text-sm font-medium text-[var(--color-dark-900)]">
              {typeof price === "number" ? `$${price.toFixed(2)}` : price}
            </span>
          ) : null}
        </div>

        {description ? (
          <p className="mt-1 text-[var(--color-dark-700)] text-sm leading-6 line-clamp-2">{description}</p>
        ) : null}

        {metadata.length ? (
          <div className="mt-2 space-y-0.5">
            {metadata.map((m) => (
              <p key={m} className="text-[var(--color-dark-700)] text-sm">
                {m}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
