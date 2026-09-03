import { socialLinks } from "@/lib/site";
import Icon from "@/components/shared/Icon";

export default function Footer() {
  return (
    <footer className="relative isolate mt-24 min-h-[409px] overflow-hidden md:mt-40 md:min-h-[773px]">
      {/* Cutout background shape (defines the footer's rounded top edge) */}
      <img
        src="/images/footer/cutout-mobile.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 w-full md:hidden"
      />
      <img
        src="/images/footer/Cutout.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden w-[1920px] max-w-none -translate-x-1/2 md:block"
      />

      {/* Silhouette illustration */}
      <img
        src="/images/footer/Footer Illustration.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 select-none
          right-[-40px] bottom-0 w-[220px]
          md:right-[6%] md:bottom-6 md:w-[420px]"
      />

      <div className="grid-container relative flex flex-col gap-4 pb-14 pt-20 md:gap-10 md:pb-24 md:pt-[440px]">
        <h2 className="t-heading">
          <span className="text-text-secondary">
            Thanks for visiting. (๑&apos;ᵕ&apos;๑)
          </span>
          <br />
          <span className="text-text-primary">Lets chat!</span>
        </h2>

        <ul className="flex max-w-[180px] flex-wrap items-center gap-3 md:max-w-none md:gap-6">
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center rounded-lg bg-accent p-2 text-text-primary transition-transform duration-150 hover:-translate-y-0.5 md:p-5"
              >
                <Icon name={s.icon} className="h-6 w-6 md:h-8 md:w-8" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
