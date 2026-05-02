
import { cn } from "@/lib/utils";

import LaunchUI from "@/components/logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function FooterSection({
  logo = <LaunchUI />,
  name = "Launch UI",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Changelog",  },
        { text: "Documentation",},
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About" },
        { text: "Contact us",  },
        { text: "Blog",},
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Discord", },
        { text: "Twitter",},
        { text: "GitHub", },
      ],
    },
  ],
  copyright = "© 2026 SkillSphere. All rights reserved",
  policies = [
    { text: "Privacy Policy",  },
    { text: "Terms of Service", },
  ],
  showModeToggle = true,
  className,
}) {
  return (
    <footer className={cn("bg-background border-t w-full mt-20 px-4", className)}>
      <div className="max-w-container mx-auto container-div mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1 ">
              <div className="flex items-center gap-2">
                
                <h3 className="text-xl font-bold">SkillSphere</h3>
              </div>
            </FooterColumn>

            {columns.map((column) => (
              <FooterColumn key={column.title}>
                <h3 className="text-md pt-1 font-semibold">
                  {column.title}
                </h3>

                {column.links.map((link) => (
                  <a
                    key={`${link.href}-${link.text}`}
                    href={link.href}
                    className="text-muted-foreground text-sm block"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>

          <FooterBottom>
            <div>{copyright}</div>

            <div className="flex items-center gap-4">
              {policies.map((policy) => (
                <a
                  key={`${policy.href}-${policy.text}`}
                  href={policy.href}
                >
                  {policy.text}
                </a>
              ))}

              
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}