// components/Accordion.tsx
import React, { useState } from 'react';

interface AccordionItemProps {
    id: number;
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onToggle: (id: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, content, isOpen, onToggle }) => {
    return (
        <div className="border-b">
            <button
                className="w-full text-left p-4  hover:bg-[#ececec46] hover:text-red-500 focus:outline-none"
                onClick={() => onToggle(id)}
            >
                <div className="flex justify-between items-center">
                    <span className="font-semibold">{title}</span>
                    <span>{isOpen ? '-' : '+'}</span>
                </div>
            </button>
            <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
                style={{ maxHeight: isOpen ? '500px' : '0' }} // Adjust maxHeight if necessary
            >
                <div className="p-4">
                    {content}
                </div>
            </div>
        </div>
    );
};

const Accordion: React.FC = () => {
    const [openItemId, setOpenItemId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setOpenItemId(openItemId === id ? null : id); // Close if the same item is clicked, open the new one otherwise
    };

    return (
        <div className="w-full bg-white">
            <AccordionItem
                id={1}
                title="Product Information"
                content={<p>Detailed product information goes here.</p>}
                isOpen={openItemId === 1}
                onToggle={handleToggle}
            />
            <AccordionItem
                id={2}
                title="Shipping & Returns"
                content={<p>Shipping and returns policy goes here.</p>}
                isOpen={openItemId === 2}
                onToggle={handleToggle}
            />
            <AccordionItem
                id={3}
                title="Warranty"
                content={<p>Warranty details go here.</p>}
                isOpen={openItemId === 3}
                onToggle={handleToggle}
            />
        </div>
    );
};

export default Accordion;
