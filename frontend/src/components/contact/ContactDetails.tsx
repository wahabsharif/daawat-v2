import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";
import { contactData } from "@/data/contactDetailsData";

export function ContactDetails() {
  return (
    <section className="p-10 flex justify-center items-center">
      <div className="flex gap-4 flex-wrap justify-center">
        {contactData.map((contact, index) => (
          <Link
            key={index}
            href={contact.href}
            target={contact.isExternal ? "_blank" : "_self"}
            className="cursor-pointer"
          >
            <MagicCard className="flex flex-col items-center justify-between shadow-2xl text-4xl p-4 w-[300px] h-[200px]">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">{contact.type}</span>
                <contact.icon className="text-6xl mt-2" />
              </div>
              <div className="text-center">
                <span className="text-lg">{contact.value}</span>
              </div>
            </MagicCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
