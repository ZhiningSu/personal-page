type SectionHeaderProps = {
  index: string
  title: string
  description: string
}

export default function SectionHeader({ index, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-xs uppercase tracking-[0.24em] text-black/38">{index}</p>
      <h2 className="text-3xl text-black sm:text-[2rem]">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-black/62 sm:text-[15px]">{description}</p>
    </div>
  )
}
