import React, { CSSProperties,  useRef, useState } from 'react'
import styles from './sandbox.module.scss'
import { classNames, processUnit } from '@/packages/shared/helpers/css'

interface Position {
    x: number;
    y: number;
}

interface SandboxProps {
    /**
     * The content of the sandbox
     */
    children?: React.ReactNode

    /**
     * The dimensions of the sandbox
     */
    dimensions?: {
        /**
         * The width of the sandbox
         */
        width?: string | number,
        /**
         * The height of the sandbox
         */
        height?: string | number
    }

    className?: string | undefined

    /**
     * The styling of the sandbox
     */
    style?: CSSProperties | undefined

    /**
     * Decides weather or not a grid should be included
     */
    grid?: boolean

}


const Sandbox = ({
    children,
    dimensions,
    className,
    style,
}: SandboxProps) => {

    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const dragging = useRef<boolean>(false);
    const lastPosition = useRef<Position>({ x: 0, y: 0 });
  
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      dragging.current = true;
      lastPosition.current = { x: e.clientX, y: e.clientY };
    };
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!dragging.current) return;
  
      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;
  
      setPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));
  
      lastPosition.current = { x: e.clientX, y: e.clientY };
    };
  
    const handleMouseUp = () => {
      dragging.current = false;
    };
  
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      dragging.current = true;
      lastPosition.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };
  
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      if (!dragging.current) return;
  
      const deltaX = e.touches[0].clientX - lastPosition.current.x;
      const deltaY = e.touches[0].clientY - lastPosition.current.y;
  
      setPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));
  
      lastPosition.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };
  
    const handleTouchEnd = () => {
      dragging.current = false;
    };

    return (
        <div 
            className={classNames(styles.sandbox, className ?? "")}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                backgroundPosition: `${position.x}px ${position.y}px`, // Updated dynamically
                width: processUnit(dimensions?.width ?? "100vw"),
                height: processUnit(dimensions?.height ?? "100vh"),
                ...style
            }}
        >
            {children}
            <div className={styles.sandboxInfo}>
                <p>{position.x}, {position.y}</p>
            </div>
        </div>
    )
}

export default Sandbox