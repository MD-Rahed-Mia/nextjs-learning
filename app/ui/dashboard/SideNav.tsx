"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { link } from "fs";

const sideBarLink = [
  {
    href: "/dashboard",
    name: 'dashboard'
  },
  {
    href: "/customers",
    name: 'customers'
  },
  {
    href: "/invoices",
    name: 'invoices'
  },
];

export default function SideNav() {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <div className="flex items-center justify-between flex-col min-h-[100vh] p-8">
      <ul className="">
        {sideBarLink.map((link) => {
          return (
            <li key={link.href}>
              <Link
                href={`${link.href}`}
                className={clsx(
                  "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                  {
                    "bg-sky-100 text-blue-600": pathName === link.href,
                  }
                )}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div>
        <button type="button">Logout</button>
      </div>
    </div>
  );
}
