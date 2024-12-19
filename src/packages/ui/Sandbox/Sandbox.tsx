import React, { CSSProperties,  useEffect,  useRef, useState } from 'react'
import styles from './sandbox.module.scss'
import { classNames, processUnit } from '@/packages/shared/helpers/css'
import SandboxInput from '../SandboxInput/SandboxInput';

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


interface Item {
    id: number;
    x: number;
    y: number;
    content: React.ReactNode
  }
  
  export const Sandbox = ({
    children,
    dimensions,
    className,
    style,
    // grid = false,
  }: SandboxProps) => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [items, setItems] = useState<Item[]>([]);
    // const [zoom, setZoom] = useState(1); // Zoom state to track the zoom level
    const dragging = useRef<boolean>(false);
    const lastPosition = useRef<Position>({ x: 0, y: 0 });
    const itemIdCounter = useRef<number>(1); // to uniquely identify items
  
    // Mouse and touch event handlers
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

    // const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    //     e.preventDefault();
    //     const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9; // Zoom in or out based on scroll direction
    
    //     setZoom((prevZoom) => {
    //       const newZoom = Math.min(Math.max(prevZoom * zoomFactor, 0.5), 3); // Limiting zoom range
    //       return newZoom;
    //     });
    // };
  
    const handleTouchEnd = () => {
      dragging.current = false;
    };
  
    // Function to add a new item
    const addItem = (x: number, y: number, content: React.ReactNode) => {
      setItems((prev) => [
        ...prev,
        { id: itemIdCounter.current++, x: x, y: y, content: content },
      ]);
    };

    useEffect(() => {
        addItem(400, 400, <SandboxInput/>)
    }, [])
  
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
        // onWheel={handleWheel} // Mouse wheel event listener for zooming
        style={{
          backgroundPosition: `${position.x}px ${position.y}px`, // Updated dynamically
          width: processUnit(dimensions?.width ?? "100vw"),
          height: processUnit(dimensions?.height ?? "100vh"),
          ...style,
        }}
      >
        <div
            className={styles.sandboxContent}
            style={{
                // transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`, // Apply zoom and panning
                // transformOrigin: 'center', // Keep the zoom centered
                width: '100%',
                height: '100%',
            }}
        >
            {children}
            {items.map((item, index) => (
                <div 
                    key={index}
                    style={{
                        position: "absolute",
                        left: `${item.x + position.x}px`, // Position relative to sandbox offset
                        top: `${item.y + position.y}px`,
                        // transform: `scale(${zoom})`, // Apply zoom to each item
                        // display: 'flex',
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        // transformOrigin: 'center',
                    }}
                >
                    {item.content}
                </div>
            ))}
        </div>
        <div className={styles.sandboxInfo}>
          <p>{-position.x}, {-position.y}</p>
        </div>
      </div>
    );
  };
  
