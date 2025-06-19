import { footerConfig } from "@/features/shared/config/footer.config";
import icons from "@/features/shared/config/icons.config";

export const Footer = () => {
  return (
    <footer className="bg-[#10202D]">
      <div className="root-container pt-4 1200:pt-9">
        <div className="space-y-6 border-b border-[#282F48] pb-7 1200:flex 1200:gap-10 1200:space-y-0 1200:pb-9">
          <div className="space-y-2.5 border-b border-[#282F48] pb-4 1024:space-y-3 1200:border-none">
            <div className="h-8 w-[60px] rounded-[5px] bg-[#253241] 768:h-10 768:w-[75px]" />
            <p className="text-sm text-[#8898B0]">
              Strike it rich at CASINO! Experience heart-pounding action with
              massive jackpots, fast payouts, and VIP treatment that keeps
              champions coming back. Join thousands of winners today - your
              fortune awaits!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 640:grid-cols-3 1200:flex-shrink-0 1200:grid-cols-5">
            {footerConfig.map((section) => (
              <div key={section.id}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-2.5 text-sm text-[#8898B0]">
                  {section.items.map((item) => (
                    <li key={`${section.id}-${item.id}`}>{item.label}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-3 1200:hidden">
              <div className="h-[80px] w-[130px] rounded-[5px] bg-[#253241]"></div>
              <div className="h-[80px] w-[130px] rounded-[5px] bg-[#253241]"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly border-b border-[#282F48] py-7">
          <icons.IconBitcoin />
          <icons.IconEthereum />
          <icons.IconTether />
          <icons.IconBitcoinCash />
          <icons.IconLitecoin />
          <icons.IconUSDCoin />
          <icons.IconDogecoin />
          <icons.IconXRP />
        </div>

        <div className="flex flex-wrap justify-evenly border-b border-[#282F48] py-7">
          <icons.IconBitcoin />
          <icons.IconEthereum />
          <icons.IconTether />
          <icons.IconBitcoinCash />
        </div>
      </div>
    </footer>
  );
};
