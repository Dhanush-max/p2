import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ id, endNumber, label, numberClass, labelClass }) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 2000; // duration of the count up in milliseconds
        const increment = endNumber / (duration / 100);

        const interval = setInterval(() => {
            start += increment;
            if (start >= endNumber) {
                setCount(endNumber);
                clearInterval(interval);
            } else {
                setCount(Math.ceil(start));
            }
        }, 100);

        return () => clearInterval(interval);
    }, [endNumber, isInView]);

    const formatNumber = (number) => {
        return number.toLocaleString('en-US').replace(/,/g, ' ');
    };

    return (
        <div className="ap-numbers-single" ref={ref}>
            <h3 id={id} data-number={endNumber} className={numberClass}>{formatNumber(count)}</h3>
            <h4 className={labelClass}>{label}</h4>
        </div>
    );
};

const Count = () => {
    return (
        <div className='flex bg-black items-center justify-center'>
            <div className="ap-numbers-box justify-around max-w-[calc(100%-40%)] text-white">
                <div className='text-xl sm:text-2xl font-medium flex justify-center'>PERIDOT IN NUMBERS</div>
                <div className='flex flex-wrap justify-around mt-10 items-start'>
                    <CountUp 
                        id="countUp-1" 
                        endNumber={5000} 
                        label="sq m" 
                        numberClass="text-6xl font-[900] flex justify-center text-zinc-500 min-w-[170px]" 
                        labelClass="text-base font-[800] my-7 justify-center flex text-white" 
                    />
                    <CountUp 
                        id="countUp-2" 
                        endNumber={6} 
                        label="continents" 
                        numberClass="text-6xl font-[900] flex justify-center text-zinc-500 min-w-[170px]" 
                        labelClass="text-base font-[800] my-7 justify-center flex text-white" 
                    />
                    <CountUp 
                        id="countUp-3" 
                        endNumber={600} 
                        label="aircrafts" 
                        numberClass="text-6xl font-[900] flex justify-center text-zinc-500 min-w-[170px]" 
                        labelClass="text-base font-[800] my-7 justify-center flex text-white" 
                    />
                    <CountUp 
                        id="countUp-4" 
                        endNumber={2000} 
                        label="blades for high power fans" 
                        numberClass="text-6xl font-[900] flex justify-center text-zinc-500 min-w-[170px]" 
                        labelClass="text-base font-[800] my-7 justify-center flex text-white" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Count;