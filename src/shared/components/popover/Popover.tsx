import { useRef, useEffect } from 'react'
import './Popover.css'
interface PopoverProps {
  children: JSX.Element
  content: JSX.Element | string
  targetId: string
  offsetY?: number
  offsetX?: number
  visible?: boolean
  onOutsideClick?: () => void
}

export const Popover = ({
  children,
  content,
  targetId,
  offsetX,
  offsetY,
  visible,
  onOutsideClick
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      onOutsideClick
    ) {
      onOutsideClick()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="popover-container" ref={popoverRef}>
      <div id={targetId} className="popover-target" data-popover="manual">
        {children}
      </div>
      {visible && (
        <div
          className="popover-content popover"
          style={{ top: offsetY, right: offsetX }}
        >
          {content}
        </div>
      )}
    </div>
  )
}
