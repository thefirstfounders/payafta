import EyeOpen from '@assets/icons/eye.svg?react';
import Warning from '@assets/icons/warning.svg?react';
import WalletService from './components/WalletService';
import RecentPaymentLink from './components/RecentPaymentLink';

import Balance from './components/Balance';
import FundWallet from '@assets/icons/fundWallet.svg?react';
import CreatePayment from '@assets/icons/createPayment.svg?react';
import Withdraw from '@assets/icons/withdrawFunds.svg?react';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useAppDispatch } from 'redux/hooks';
import { useNavigate } from 'react-router-dom';
import DashboardModal from './components/Modal/DashboardModal';
import RecentPaymentOrTransactions from './components/RecentPaymentOrTransactions';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-2 pt-6">
        <Balance
          icon={<EyeOpen />}
          bigText="Wallet Balance"
          amount={0}
          className="bg-[#0b0c60] text-[#fff]"
        />
        <Balance
          amount={0}
          bigText="Escrow Balance"
          icon={<EyeOpen />}
          className="bg-[#4043f8] text-[#fff]"
        />
        <Balance
          amount={0}
          bigText="Card Balance"
          icon={<Warning />}
          className="bg-[#fff] "
        />
      </div>

      {/* wallet service */}
      <div className="mt-6 p-4  rounded-[8px] border-[1px] border-[#f2f2f2] shadow-sm lg:h-[172px] bg-[#fff]">
        <p className="text-[16px] leading-5 font-medium">Wallet services</p>
        <div className="  grid md:grid-cols-3 ">
          <WalletService
            icon={<FundWallet />}
            className="border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-[#fdeded]"
            smallText="Fund Wallet"
            onClick={() => {
              dispatch(
                setOpenModal({
                  openModal: true,
                  modalType: 'fundWallet',
                }),
              );
            }}
          />
          <WalletService
            icon={<CreatePayment />}
            className="border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-[#f2f2f2]"
            smallText="Create Payment"
            onClick={() => navigate('/admin/dashboard/create-payment')}
          />
          <WalletService
            icon={<Withdraw />}
            smallText="Withdraw Fund"
            onClick={() => {
              dispatch(
                setOpenModal({
                  openModal: true,
                  modalType: 'withdrawFund',
                }),
              );
            }}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-2 mt-4">
        <RecentPaymentLink />
        <div className="bg-[#fff] rounded-[8px] border-[1px] border-[#f2f2f2] h-[526px] shadow-sm p-4 ">
          <div className="flex justify-between pb-2 border-b-[0.8px]">
            <p className="text-[15px] font-medium leading-[22px] text-[#333333]">
              Recent
            </p>
            <p
              className="text-[#6B6DFA] text-[12px] leading-[15px] font-bold uppercase cursor-pointer"
              onClick={() => navigate('/admin/transactions')}
            >
              View
            </p>
          </div>
          <RecentPaymentOrTransactions
            smallText="ii"
            text="Payment"
            amount={12000000}
            status="successful"
            icon={<FundWallet />}
          />
          <RecentPaymentOrTransactions
            smallText="ii"
            text="Payment"
            amount={12000000}
            status="successful"
            icon={<FundWallet />}
          />
          <RecentPaymentOrTransactions
            smallText="ii"
            text="Payment"
            amount={12000000}
            status="successful"
            icon={<FundWallet />}
          />
        </div>
      </div>
      <DashboardModal />
    </div>
  );
};

export default Dashboard;
