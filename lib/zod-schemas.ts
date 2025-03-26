<<<<<<< HEAD
import * as z from "zod";
=======
import * as z from "zod"
>>>>>>> b82a5ebeee784bb7d325f364fa1f2ac273731e58

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
<<<<<<< HEAD
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
=======
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

>>>>>>> b82a5ebeee784bb7d325f364fa1f2ac273731e58
