import React from "react";
import { Button } from "../ui/button";

interface ContinueButtonProps {
    category: string;
    selected: boolean;
    cardlink: string;
  }
  
export const ContinueButton: React.FC<ContinueButtonProps> = ({ category, selected, cardlink }) => {
if (selected) {
    return (
    <a href={cardlink}>
        <Button>
            Continue to {category}
        </Button>
    </a>
    );
}

return (
    <Button size="lg" disabled>
    Continue to {category}
    </Button>
);
};