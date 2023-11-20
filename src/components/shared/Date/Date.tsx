import { FieldValues } from 'react-hook-form';
import { IDate } from '../Input/interface';
import ControlledInput from '../Input/ControlledInput';

const Date = <TFieldValue extends FieldValues>(props: IDate<TFieldValue>) => {
  const { name, className, label, control } = props;
  return (
    <div>
      {label && <div className="pl-2 text-[#333333]">{label}</div>}
      <div className=" rounded-md">
        <ControlledInput
          control={control}
          name={name}
          className={className}
          type="date"
        />
      </div>
    </div>
  );
};

export default Date;
