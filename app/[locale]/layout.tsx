import type { Metadata } from "next";
import "../globals.css";
import { poppins } from "@/app/fonts";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryProvider } from "@/features/shared/components/providers/query-provider";

export const metadata: Metadata = {
  title: "BSFG Task",
  description: "BSFG Task Layout Wrapper",
};

export default async function LayoutWrapper({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            <NuqsAdapter>{children}</NuqsAdapter>
          </NextIntlClientProvider>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
      </body>
    </html>
  );
}
