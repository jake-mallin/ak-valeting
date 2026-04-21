"use client";

import { useCallback, useState } from "react";
import { Button } from "../ui/button";

type FormStatus = "idle" | "loading" | "success" | "error";

type ContactFormProps = {
  className?: string;
};

function RequiredMark() {
  return (
    <span className="ml-1 text-accent" aria-hidden="true">
      *
    </span>
  );
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const setStartedAtInput = useCallback((node: HTMLInputElement | null) => {
    if (!node || node.value) return;

    node.value = Date.now().toString();
    }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),

      // Spam prevention
      company: formData.get("company"),
      startedAt: formData.get("startedAt"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");

        const message =
          typeof result.error === "string"
            ? result.error
            : result.error?.message || "Something went wrong.";

        setErrorMessage(message);
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 text-white ${className}`}
    >
      {/* Honeypot field - hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Time check field */}
      <input ref={setStartedAtInput} type="hidden" name="startedAt" />

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
          <RequiredMark />
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-white outline-none transition focus:border-white placeholder:text-neutral-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
          <RequiredMark />
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-white outline-none transition focus:border-white placeholder:text-neutral-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="01234 567890"
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-white outline-none transition focus:border-white placeholder:text-neutral-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          How can we help?
          <RequiredMark />
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Let us know what we can help with"
          className="w-full resize-none rounded-lg border border-neutral-300 px-4 py-3 text-white outline-none transition focus:border-white placeholder:text-neutral-500"
        />
      </div>

      <Button
        type="submit"
        variant="solid"
        colour="accent"
        disabled={status === "loading"}
        className="disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send enquiry"}
      </Button>

      {status === "success" && (
        <p className="text-sm font-medium text-green-600">
          Thanks, your enquiry has been sent.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}