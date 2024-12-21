import React, { CSSProperties, useRef, useState } from 'react'
import styles from './sandbox.module.scss'
import { classNames, processUnit } from '@/packages/shared/helpers/css'
import { getLineColor } from '@/packages/shared/sandbox/utils';
import { SandboxProvider } from './sandbox.context';
import SandboxItem, { SandboxItemDragger } from '../SandboxItem/SandboxItem';

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

interface Line {
  from: number; // ID of the starting item
  to: number; // ID of the ending item
  type: "tool" | "data" | "control" | "other";
}


interface Item {
    id: number;
    x: number;
    y: number;
    content: React.ReactNode;
    title: string;
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
    const [lines, setLines] = useState<Line[]>([]); // Track lines between items
    const itemBeingDragged = useRef<number | null>(null); // Track which item is being dragged
    const [draggingItem, setDraggingItem] = useState<boolean>(false);
    // const [zoom, setZoom] = useState(1); // Zoom state to track the zoom level
    const dragging = useRef<boolean>(false);
    const lastPosition = useRef<Position>({ x: 0, y: 0 });
    const itemIdCounter = useRef<number>(1); // to uniquely identify items
    const sandboxRef = useRef<HTMLDivElement>(null);
  
    // Mouse and touch event handlers
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target !== sandboxRef.current) return;
      dragging.current = true;
      lastPosition.current = { x: e.clientX, y: e.clientY };
    };
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (dragging.current) {
        const deltaX = e.clientX - lastPosition.current.x;
        const deltaY = e.clientY - lastPosition.current.y;
    
        setPosition((prev) => ({
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        }));
  
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === itemBeingDragged.current
              ? { ...item, x: item.x + deltaX, y: item.y + deltaY }
              : item
          )
        );
    
        lastPosition.current = { x: e.clientX, y: e.clientY };
      } else {
        if (draggingItem) {
          const deltaX = e.clientX - lastPosition.current.x;
          const deltaY = e.clientY - lastPosition.current.y;
      
          setItems((prevItems) =>
            prevItems.map((item) =>
              item.id === itemBeingDragged.current
                ? { ...item, x: item.x + deltaX, y: item.y + deltaY }
                : item
            )
          );
      
          lastPosition.current = { x: e.clientX, y: e.clientY };
        }
      }
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

    const handleItemMouseDown = (
      e: React.MouseEvent<HTMLDivElement>,
      itemId: number
    ) => {
      e.stopPropagation(); // Prevent dragging the whole sandbox
      setDraggingItem(true);
      itemBeingDragged.current = itemId;
      lastPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleItemMouseUp = () => {

      if (draggingItem) {
        setDraggingItem(false);
        itemBeingDragged.current = null;
        return
      }
    };
  
    // Function to add a new item
    const addItem = (content: React.ReactNode, title: string, x?: number, y?: number) => {
      const id = itemIdCounter.current++
      setItems((prev) => [
        ...prev,
        { id: id, x: x ?? -position.x, y: y ?? -position.y, content: content, title: title },
      ]);

      return { id: id, x: x, y: y, content: content }
    };

    const addLine = (from: number, to: number, type?: "tool" | "data" | "control" | "other") => {
      setLines((prev) => [...prev, { from, to, type: type ?? "other" }]);
    };

    const getItemById = (id: number) => items.find((item) => item.id === id);
  
    return (
      <SandboxProvider value={{ addLine, addItem }}>
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

          <svg
            className={styles.sandboxLines}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          >
            {lines.map((line, index) => {
              const fromItem = getItemById(line.from);
              const toItem = getItemById(line.to);

              if (!fromItem || !toItem) return null;

              // Calculate positions adjusted for sandbox panning
              const startX = fromItem.x + 25 + position.x; // Adjust for sandbox offset
              const startY = fromItem.y + 25 + position.y;
              const endX = toItem.x + 25 + position.x; // Adjust for sandbox offset
              const endY = toItem.y + 25 + position.y;

              // Control points for the curve
              const controlX1 = startX + (endX - startX) / 2;
              const controlY1 = startY;
              const controlX2 = startX + (endX - startX) / 2;
              const controlY2 = endY;

              return (
                <path
                  key={index}
                  d={`M ${startX},${startY} C ${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`}
                  stroke={getLineColor(line.type)}
                  strokeWidth="2"
                  fill="none"
                />
              );
            })}
          </svg>

          <div
              className={styles.sandboxContent}
              ref={sandboxRef}
              style={{
                  // transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`, // Apply zoom and panning
                  // transformOrigin: 'center', // Keep the zoom centered
                  width: '100%',
                  height: '100%',
              }}
          >
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
                      <SandboxItem title={item.title} key={item.id}>
                        {item.content}
                        <SandboxItemDragger
                          onMouseDown={(e) => handleItemMouseDown(e, item.id)} // Handle dragging for the item
                          onMouseUp={() => handleItemMouseUp()} // Handle dragging for the item
                        />
                      </SandboxItem>
                  </div>
              ))}
          </div>
          {children}
        </div>
      </SandboxProvider>
    );
  };
  
