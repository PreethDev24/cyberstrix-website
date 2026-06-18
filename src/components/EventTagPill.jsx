export default function EventTagPill({ tagLabel, tagClassName }) {
  if (!tagLabel) return null
  return (
    <span
      className={`inline-flex text-xs font-medium rounded-full px-2.5 py-0.5 border ${tagClassName}`}
    >
      {tagLabel}
    </span>
  )
}
