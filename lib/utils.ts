import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = (reader.result as string).replace(
        /^data:image\/[a-z]+;base64,/,
        "",
      );
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
};

export const formatToDDMMYYYY = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // months are zero-based
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};
