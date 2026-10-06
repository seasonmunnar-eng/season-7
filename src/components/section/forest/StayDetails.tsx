import Image from "next/image";
import { site } from "@/data/site";
import { Arrow, Botanical, Chapter, TextLink } from "./ForestPrimitives";
import styles from "./Forest.module.css";

// Existing contact destination, also used by the site's WhatsApp control.
const bookingLink = "https://wa.me/919895975074";

export function Benefits() {
  return <section className={styles.benefits} aria-labelledby="benefits-title"><div className={styles.wrap}><div className={styles.benefitsHeading}><span className={styles.eyebrow}>Little things. Thoughtfully included.</span><h2 id="benefits-title">Simply <em>taken care of.</em></h2></div><ol className={styles.benefitList}>{[
    ["Complimentary Breakfast", "A good morning starts here."],
    ["Ample Parking Space", "Arrive. Settle in. Switch off."],
    ["Board Games & Indoor Fun", "Make a little time for together."],
  ].map(([title, body]) => <li key={title}><h3>{title}</h3><p>{body}</p></li>)}</ol></div></section>;
}

export function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.wrap}>
        <Chapter>We&apos;ll take it from here</Chapter>
        <div className={styles.contactGrid}>
          <div>
            <h2 id="contact-title" className={styles.display}>Your next chapter<br /><em>begins here.</em></h2>
            <p className={styles.contactIntro}>A few quiet days, a family escape, or simply a change of scenery. Tell us what you have in mind.</p>
            <a href={bookingLink} className={styles.solidButton} target="_blank" rel="noopener noreferrer">Plan your stay on WhatsApp<Arrow diagonal /></a>
          </div>
          <div className={styles.contactDetails}>
            <Botanical />
            <div>
              <h3>Find us in the green</h3>
              <address>
                Eatty City Road,<br />
                Chithirapuram, PO, Anachal,<br />
                Munnar, Kerala 685565,<br />
                India
              </address>
              <TextLink href={site.mapsLink} external>View Season7 Location on Google Maps</TextLink>
            </div>
            <div className={styles.contactNote}>
              <span className={styles.eyebrow}>Let&apos;s make it personal</span>
              <p>For cottage choices and availability, connect directly with the Season7 team.</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <div className={styles.mapHeader}>
            <span className={styles.eyebrow}>Our Location</span>
            <h3 className={styles.mapTitle}>Season7 The Nature Resort</h3>
            <p className={styles.mapSubtitle}>Chithirapuram · Munnar · Kerala</p>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src={site.mapsEmbed}
              title="Season7 The Nature Resort location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className={styles.mapIframe}
            />
          </div>
          <div className={styles.mapActions}>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapCta}
              aria-label="View Season7 The Nature Resort location on Google Maps"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              View Season7 Location on Google Maps
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Invitation() {
  return (
    <section className={styles.invitation} aria-labelledby="invitation-title">
      <Image src="/images/forest/forest.webp" alt="A leafy forest path opening to the misty mountains of Munnar" fill sizes="100vw" className={styles.landscape} />
      <div className={styles.invitationShade} />
      <div className={styles.invitationContent}><span className={styles.eyebrow}>Season7 The Nature Resort · Munnar</span><h2 id="invitation-title">Leave the everyday.<br /><em>Come back to nature.</em></h2><p>The hills are calling. Take your time answering.</p><a href={bookingLink} className={styles.lightButton} target="_blank" rel="noopener noreferrer">Book Your Stay<Arrow diagonal /></a><span className={styles.invitationFoot}>A quieter world is waiting.</span></div>
    </section>
  );
}
