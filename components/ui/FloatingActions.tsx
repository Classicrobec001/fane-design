"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, MessageSquareText, X } from "lucide-react";

const MAIL_TO = "fanedesignz@gmail.com";

/**
 * Floating chat + back-to-top pair, shown on every page at every breakpoint.
 * The chat button opens the project inquiry form below.
 */
export default function FloatingActions() {
  const [openForm, setOpenForm] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // Back-to-top only earns its place once there's something to scroll back to.
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the form, and the page behind it shouldn't scroll.
  useEffect(() => {
    if (!openForm) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenForm(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openForm]);

  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 flex items-center gap-3 lg:bottom-10 lg:right-10">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid size-12 place-items-center rounded-full bg-brand text-white shadow-lg transition hover:opacity-90"
          >
            <ArrowUp className="size-6" />
          </button>
        )}
        <button
          onClick={() => setOpenForm(true)}
          aria-label="Send a project inquiry"
          className="grid size-14 place-items-center rounded-2xl bg-brand text-white shadow-lg transition hover:opacity-90"
        >
          <MessageSquareText className="size-7" />
        </button>
      </div>

      {openForm && <ProjectInquiry onClose={() => setOpenForm(false)} />}
    </>
  );
}

function Label({ children, required }: { children: string; required?: boolean }) {
  return (
    <span className="text-[16px] font-medium text-ink">
      {children}
      {required && <span className="text-red-500">*</span>}
    </span>
  );
}

/**
 * Project inquiry form — hands off to the visitor's mail client so the static
 * site needs no backend.
 */
function ProjectInquiry({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Budget: ${budget || "Not specified"}`,
      "",
      "Project details:",
      details,
    ].join("\n");
    window.location.href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(
      `Project inquiry from ${name || "the website"}`,
    )}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  const field =
    "w-full rounded-[8px] border border-black/10 px-4 py-3 text-[16px] text-ink outline-none transition placeholder:text-black/30 focus:border-brand";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-black/50 p-4 sm:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Project Inquiry"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[390px] overflow-hidden rounded-2xl bg-white shadow-xl"
      >
        <div className="flex items-center justify-between gap-4 bg-brand px-6 py-4">
          <h2 className="text-[18px] font-semibold text-white">
            Project Inquiry
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 text-white transition hover:opacity-80"
          >
            <X className="size-6" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-5 p-6">
          <label className="flex flex-col gap-2">
            <Label required>Name</Label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={field}
            />
          </label>

          <label className="flex flex-col gap-2">
            <Label required>Email</Label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={field}
            />
          </label>

          <label className="flex flex-col gap-2">
            <Label required>Project Details</Label>
            <textarea
              required
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className={`${field} resize-none`}
            />
          </label>

          <label className="flex flex-col gap-2">
            <Label>Budget (Optional)</Label>
            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={field}
            />
          </label>

          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-4 rounded-[8px] bg-brand px-[25px] py-[16px] text-[16px] font-medium text-white transition hover:opacity-90"
          >
            Send Inquiry
            <ArrowUpRight className="size-6" strokeWidth={2} />
          </button>
        </form>
      </div>
    </div>
  );
}
