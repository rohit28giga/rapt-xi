import React from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "./button"
import { Card } from "./card"

interface BenefitProps {
  text: string
  checked: boolean
}

// Fixed: Explicitly typed as React.FC to handle standard React props like 'key' in JSX loops
const Benefit: React.FC<BenefitProps> = ({ text, checked }) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-4 place-content-center rounded-full bg-teal-500 text-sm text-black">
          <Check className="size-3" />
        </span>
      ) : (
        <span className="grid size-4 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
          <X className="size-3" />
        </span>
      )}
      <span className="text-sm text-zinc-300">{text}</span>
    </div>
  )
}

interface PricingCardProps {
  tier: string
  price: string
  bestFor: string
  CTA: string
  benefits: Array<{ text: string; checked: boolean }>
  className?: string
  highlighted?: boolean
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
  highlighted
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)", opacity: 0, y: 20 }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
      className="h-full"
    >
      <Card
        className={cn(
          "relative h-full w-full overflow-hidden border",
          "border-zinc-800 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80",
          "p-8",
          highlighted && "border-teal-500/50 shadow-[0_0_50px_rgba(45,212,191,0.1)]",
          className,
        )}
      >
        <div className="flex flex-col items-center border-b pb-8 border-zinc-800">
          <span className="mb-6 inline-block text-zinc-400 uppercase tracking-widest text-xs font-bold">
            {tier}
          </span>
          <span className="mb-3 inline-block text-5xl font-black text-white">
            {price}
          </span>
          <span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent text-sm">
            {bestFor}
          </span>
        </div>
        <div className="space-y-4 py-10">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
        <Button
          className={cn(
            "w-full h-12 text-sm font-bold uppercase tracking-tighter",
            highlighted ? "bg-teal-500 text-black hover:bg-teal-400" : "bg-white/5 border border-white/10 hover:bg-white/10"
          )}
          variant={highlighted ? "default" : "ghost"}
        >
          {CTA}
        </Button>
      </Card>
    </motion.div>
  )
}
