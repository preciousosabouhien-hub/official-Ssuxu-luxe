"use client";

import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
    type CSSProperties,
} from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function ScrollReveal ({
    children,
    className = "",
    delay = 0,
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() =>{
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting){
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.15,
            }
        );
        observer.observe(element);

        return () => observer.disconnect(); }, []);
   
        const revealStyle: CSSProperties = { transitionDelay: `${delay}ms`, };

        return ( <div ref={elementRef} className={`scroll-reveal ${isVisible ? "visible" : ""} ${className}`} style={revealStyle} >
            {children}
            </div>
            );
}