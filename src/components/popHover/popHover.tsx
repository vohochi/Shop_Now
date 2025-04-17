import { useFloating, useInteractions, useHover, useClick, useDismiss, offset, shift, flip } from '@floating-ui/react'
import { useState } from 'react'

interface PopoverProps {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  placement?:
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'left-start'
    | 'left'
    | 'left-end'
    | 'right-start'
    | 'right'
    | 'right-end'
  offsetValue?: number
  as?: React.ElementType
}

const Popover = ({
  children,
  renderPopover,
  className = '',
  offsetValue = 10,
  placement = 'bottom-start',
  as: Element = 'div'
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(true)

  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(offsetValue), flip(), shift()],
    placement: placement
  })

  // Setup all needed interactions
  const hover = useHover(context)
  const click = useClick(context)
  const dismiss = useDismiss(context)

  // Merge all interactions
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, click, dismiss])

  return (
    <Element className={`relative ${className}`} ref={refs.setReference} {...getReferenceProps()}>
      {children}

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: 'max-content',
            zIndex: 50
          }}
          {...getFloatingProps()}
        >
          {renderPopover}
        </div>
      )}
    </Element>
  )
}

export default Popover
