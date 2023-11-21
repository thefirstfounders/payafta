import MobileSideNav from '@components/AppNav/MobileSideNav';
import SideNav from '@components/AppNav/SideNav';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <section className="grid lg:grid-cols-[260px_1fr] h-screen overflow-auto bg-[#f9f9f9]   lg:p-6">
      <aside className="lg:h-[680px]  lg:sticky lg:top-0 ">
        <SideNav />
        <div className="lg:hidden">
          <MobileSideNav />
        </div>
      </aside>
      <main className=" h-screen lg:grid lg:auto-rows-max-auto overflow-auto px-6 pt-4 lg:pt-0">
        {children}
      </main>
    </section>
  );
};

export default RootLayout;
