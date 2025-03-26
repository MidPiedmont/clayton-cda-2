import React, { type ReactNode } from 'react';
import { Checkbox as ShadcnCheckbox } from '~/components/ui/checkbox';

interface CheckboxGroupProps {
  label?: string;
  value: string[];
  onChange: (newValue: string[]) => void;
  children: ReactNode;
  className?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  value,
  onChange,
  children,
  className,
}) => {
  return (
    <div className={className}>
      {label && (
        <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </p>
      )}
      <div className="space-y-2">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === ShadcnCheckbox) {
            const checkboxProps = child.props as { value: string; children?: ReactNode; className?: string };

            return React.cloneElement(child, {
              ...(child.props as any), // Type assertion here.
              checked: value.includes(checkboxProps.value),
              onCheckedChange: (checked: boolean) => {
                if (checked) {
                  onChange([...value, checkboxProps.value]);
                } else {
                  onChange(value.filter((val) => val !== checkboxProps.value));
                }
              },
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};