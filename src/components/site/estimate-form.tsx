import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

export function EstimateForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
    const subject = encodeURIComponent(
      `Estimate request${name ? ` from ${name}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        name && `Name: ${name}`,
        phone && `Phone: ${phone}`,
        email && `Email: ${email}`,
        "",
        project || "(No project notes)",
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <p className="text-sm leading-relaxed text-muted">
        This form opens your email app addressed to {site.email}. Nothing is
        stored on this website. You can also call{" "}
        <a className="text-ink underline-offset-4 hover:underline" href={`tel:${site.phoneTel}`}>
          {site.phoneDisplay}
        </a>
        .
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="project">What needs work?</Label>
        <Textarea
          id="project"
          name="project"
          placeholder="Kitchen, wood rot, addition, commercial interior…"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Email an Estimate Request
      </Button>
      {sent ? (
        <p className="text-sm text-steel">
          If your mail app did not open, write directly to {site.email}.
        </p>
      ) : null}
    </form>
  );
}
