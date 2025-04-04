import React from 'react';
import { Button } from '~/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';

interface PrereqTipsProps {
  tips?: { tip: string }[];
  buttons?: { label: string; link: string }[];
}

export const PrereqTips: React.FC<PrereqTipsProps> = ({ tips, buttons }) => {
  if ((!tips || tips.length === 0) && (!buttons || buttons.length === 0)) {
    return null; // Don't render if there are no tips or buttons
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            style={{
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid gray',
              backgroundColor: 'lightgray',
              fontSize: '12px',
              marginLeft: '5px',
              cursor: 'pointer',
            }}
          >
            ?
          </button>
        </TooltipTrigger>
        <TooltipContent className="w-80">
          {tips && tips.length > 0 && (
            <div>
              {tips.map((tip, index) => (
                <p key={index}>{tip.tip}</p>
              ))}
            </div>
          )}
          {buttons && buttons.length > 0 && (
            <div>
              {buttons.map((button, index) => (
                <a key={index} href={button.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" style={{ margin: '5px' }}>
                    {button.label}
                  </Button>
                </a>
              ))}
            </div>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};