"use client";

import {
  Toaster as ChakraToaster,
  Portal,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
});

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root width={{ md: "sm" }} shadow="initial" padding="4">
            <Stack gap="2" maxWidth="100%">
              {toast.title && (
                <Toast.Title fontSize={{ md: "md" }} fontWeight="bold">
                  {toast.title}
                </Toast.Title>
              )}
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
            </Stack>
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};
