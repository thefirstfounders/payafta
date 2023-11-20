import Button from '@components/shared/Button';
import RightArrow from '@assets/icons/rightAccordion.svg?react';
import { IFormCheck } from '../../GetStarted';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useAppDispatch } from 'redux/hooks';
import Check from '@assets/icons/grrenCheck.svg?react';
type Props = {
  formCheck: IFormCheck;
};

const TransactionPIN = ({ formCheck }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className=" mx-4 mb-4">
      <div className="flex justify-between  bg-[#FFFFFF] border-[1px] rounded-[8px] p-6 border-[#f2f2f2] w-[606px] h-[96px]">
        <div>
          <h3 className="text-[#333333] text-[16px] font-semibold leading-5">
            Transaction PIN
          </h3>
          <p className="text-[#666666] text-[14px] leading-4">
            Set transaction PIN
          </p>
        </div>
        <div>
          {formCheck.isDone.includes(3) ? (
            <Check />
          ) : (
            <Button
              className="bg-[#03045B] rounded-[40px] px-10 py-2"
              disabled={formCheck.isActive !== 3}
              onClick={() => {
                dispatch(
                  setOpenModal({
                    openModal: true,
                    modalType: 'transactionPIN',
                  }),
                );
              }}
            >
              Submit <RightArrow />{' '}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionPIN;
