import { z } from "zod";

const signUpSchema = z
  .object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(8, "Password minimum 8 characters."),
    confirmPassword: z.string(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password must match!",
    path: ["confirmPassword"],
  });

export function useSignupForm() {
  const form = reactive({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const errors = ref({});
  const isSubmitting = ref(false);

  const validate = () => {
    const validated = signUpSchema.safeParse(form);

    if (!validated.success) {
      errors.value = normalizeZodError(validated);
      return false;
    }

    return true;
  };

  const handleSubmit = (onSuccess) => {
    return async (event) => {
      event.preventDefault();
      clearErrors();

      if (!validate()) return;

      isSubmitting.value = true;

      try {
        const response = await $fetch("/api/v1/auth/signup", {
          method: "POST",
          body: form,
        });

        await onSuccess(response);
      } catch (error) {
        if (error.statusCode === 400 && error.data?.errors) {
          errors.value = error.data.errors;
        } else {
          alert(error.data?.message || "Signup failed");
        }
      } finally {
        isSubmitting.value = false;
      }
    };
  };

  const clearErrors = () => {
    errors.value = {};
  };

  return {
    form,
    errors,
    isSubmitting,
    handleSubmit,
  };
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

export function useLoginForm() {
  const form = reactive({
    email: "",
    password: "",
  });

  const isSubmitting = ref(false);
  const errors = ref({});

  const validate = () => {
    const validated = loginSchema.safeParse(form);

    if (!validated.success) {
      errors.value = normalizeZodError(validated);
      return false;
    }
    return true;
  };

  const handleSubmit = (onSuccess) => {
    return async (event) => {
      event.preventDefault();
      clearErrors();

      if (!validate()) return;

      try {
        const response = await $fetch("/api/v1/auth/login", {
          method: "POST",
          body: form,
        });

        await onSuccess(response);
      } catch (error) {
        if (error.statusCode === 400 && error.data?.errors) {
          errors.value = error.data.errors;
        } else {
          alert(error.data?.message || "Signup failed");
        }
      } finally {
        isSubmitting.value = false;
      }
    };
  };

  const clearErrors = () => {
    errors.value = {};
  };

  return { form, isSubmitting, errors, handleSubmit };
}
