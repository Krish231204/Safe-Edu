import * as React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const INDIAN_STATES: string[] = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Jammu and Kashmir','Ladakh','Lakshadweep','Puducherry'
];

export interface StateSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function StateSelect({ value, onChange, placeholder = 'Select State / UT', className }: StateSelectProps) {
  const [internal, setInternal] = React.useState(value || 'Maharashtra');

  const handleValueChange = (val: string) => {
    setInternal(val);
    onChange?.(val);
  };

  return (
    <Select value={internal} onValueChange={handleValueChange}>
      <SelectTrigger className={(className || '') + ' w-[220px] bg-white/70 backdrop-blur hover:bg-white focus:ring-2 focus:ring-blue-400'}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent
        position="popper"
        className="w-[220px] p-0"
        style={{ maxHeight: '15rem' }}
      >
        <div className="max-h-60 overflow-y-auto py-1">
          {INDIAN_STATES.map((s) => (
            <SelectItem key={s} value={s}>{s}</SelectItem>
          ))}
        </div>
      </SelectContent>
    </Select>
  );
}
