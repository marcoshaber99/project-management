import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant="secondary" size="sm">
        Secondary123
      </Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  );
}
