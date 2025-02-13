import { Circle, Square, Triangle } from "lucide-react"

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <Circle className="absolute top-1/4 left-1/4 text-primary/10 w-64 h-64 animate-float" />
      <Square className="absolute bottom-1/4 right-1/4 text-secondary/10 w-48 h-48 animate-float animation-delay-2000" />
      <Triangle className="absolute top-3/4 left-1/2 text-accent/10 w-56 h-56 animate-float animation-delay-4000" />
    </div>
  )
}

