import { DollarSign } from "lucide-react";

import icons from "@/features/shared/config/icons.config";

export const NavbarBalance = () => {
  return (
    <div className="flex">
      <div className="flex h-10 w-[105px] items-center gap-[10px] rounded-l-[5px] border-y border-l border-[#192c40] bg-[#10202D] px-2 768:w-[120px]">
        <div className="flex size-6 items-center justify-center rounded-full bg-[#192C40]">
          <DollarSign className="size-4" />
        </div>
        <p className="text-xs font-medium">500.00</p>
      </div>

      <div className="flex size-10 cursor-pointer items-center justify-center rounded-r-[5px] border-y border-r border-[#192c40] bg-[#0F70DC] 768:w-[100px]">
        <icons.IconDeposit className="768:hidden" />
        <h3 className="hidden text-sm font-medium 768:block">DEPOSIT</h3>
      </div>
    </div>
  );
};
