type SectionHeaderProps = {
  index: string
  title: string
  description: string
}

export default function SectionHeader({ index, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className="eyebrow">Section {index}</span>
      <h2 className="text-4xl text-black sm:text-5xl">{title}</h2>
      <p className="mt-4 max-w-xl text-sm leading-7 text-black/65 sm:text-[15px]">{description}</p>
    </div>
  )
}
