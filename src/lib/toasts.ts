import { toaster } from "@/components/ui/toaster";

export const successToast = (msg: string) => {
  toaster.create({
    title: msg,
    type: "success",
  });
};

export const errorToast = (msg: string) => {
  toaster.create({
    title: msg,
    type: "error",
  });
};

export const infoToast = (msg: string) => {
  toaster.create({
    title: msg,
    type: "info",
  });
};
