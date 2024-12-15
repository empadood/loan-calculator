import './SimpleLayout.css'
interface SimpleLayoutProps {
  header: JSX.Element
  content: JSX.Element
  footer: JSX.Element
}
export const SimpleSection = ({
  header,
  content,
  footer
}: SimpleLayoutProps) => {
  return (
    <section className="simple-layout__container">
      {header}
      {content}
      {footer}
    </section>
  )
}
