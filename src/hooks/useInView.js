import { useState, useEffect, useRef } from 'react';

export function useInView(options = { threshold: 0.1, triggerOnce: true }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                if (options.triggerOnce && ref.current) {
                    observer.unobserve(ref.current);
                }
            } else if (!options.triggerOnce) {
                setInView(false);
            }
        }, {
            threshold: options.threshold
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options.threshold, options.triggerOnce]);

    return { ref, inView };
}
