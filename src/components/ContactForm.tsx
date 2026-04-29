import { useState, FormEvent } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please write a short message").max(2000),
});

const RECIPIENT = "team@unlockascend.com";

const ContactForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`A note from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="mt-12 text-left space-y-5" noValidate>
      <div>
        <Label htmlFor="name" className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          Your name
        </Label>
        <Input id="name" name="name" type="text" maxLength={100} className="mt-2 bg-background" />
        {errors.name && <p className="mt-1 text-xs text-destructive font-body">{errors.name}</p>}
      </div>
      <div>
        <Label htmlFor="email" className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          Email
        </Label>
        <Input id="email" name="email" type="email" maxLength={255} className="mt-2 bg-background" />
        {errors.email && <p className="mt-1 text-xs text-destructive font-body">{errors.email}</p>}
      </div>
      <div>
        <Label htmlFor="message" className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          Message
        </Label>
        <Textarea id="message" name="message" rows={5} maxLength={2000} className="mt-2 bg-background" />
        {errors.message && <p className="mt-1 text-xs text-destructive font-body">{errors.message}</p>}
      </div>
      <div className="text-center pt-2">
        <button
          type="submit"
          className="inline-block font-body text-sm tracking-widest uppercase text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
        >
          Send message
        </button>
        <p className="mt-3 font-body text-xs text-muted-foreground italic">
          Opens your email app to send to {RECIPIENT}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
