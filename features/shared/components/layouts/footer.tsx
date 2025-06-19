import { footerConfig } from "@/features/shared/config/footer.config";
import icons from "@/features/shared/config/icons.config";

export const Footer = () => {
  return (
    <footer className="bg-[#10202D]">
      <div className="root-container pt-4 1200:pt-9">
        <div className="space-y-6 border-b border-[#282F48] pb-7 1200:flex 1200:gap-10 1200:space-y-0 1200:pb-9">
          <div className="space-y-2.5 border-b border-[#282F48] pb-4 1024:space-y-3 1200:border-none">
            <div className="h-8 w-[60px] rounded-[5px] bg-[#253241] 768:h-10 768:w-[75px]" />
            <p className="text-sm">
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
                <ul className="space-y-2.5 text-sm">
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

        <div className="flex flex-wrap items-center justify-center gap-8 border-b border-[#282F48] px-10 py-7">
          <icons.IconBitcoin />
          <icons.IconEthereum />
          <icons.IconTether />
          <icons.IconBitcoinCash />
          <icons.IconLitecoin />
          <icons.IconUSDCoin />
          <icons.IconDogecoin />
          <icons.IconXRP />
          <icons.IconVisa />
          <icons.IconMastercard />
          <icons.IconAmex />
          <icons.IconDiners />
          <icons.IconDiscover />
        </div>

        <div className="py-6 text-center text-sm">
          <div className="mb-5 1200:flex 1200:items-center 1200:justify-between">
            <div className="hidden 1200:order-1 1200:block 1200:flex-1" />

            <div className="mb-6 flex flex-wrap justify-center gap-3 border-b border-[#282F48] pb-6 1200:order-3 1200:mb-0 1200:flex-1 1200:justify-end 1200:border-none 1200:pb-0">
              <icons.IconAnj />
              <icons.IconGamcare />
              <icons.IconGamblersAnonymous />
              <icons.Icon18Plus />
            </div>

            <div className="text-center 1200:order-2 1200:flex-1">
              <h3>
                © 2025 <strong className="text-white">CASINO.COM</strong>. All
                Rights Reserved.
              </h3>
            </div>
          </div>

          <p className="mb-4">GAMBLING CAN BE ADDICTIVE! PLAY RESPONSIBLY!</p>

          <p>
            CASINO casino is operated by CASINO B.V., ensuring a secure and fair
            gaming environment for all players. We strictly adhere to all
            regulatory requirements to maintain transparency and fairness. Our
            commitment to integrity and ethical practices is at the core of our
            business. We employ advanced security measures, including SSL
            encryption and robust firewall systems, to protect your personal and
            financial information. Promoting responsible gaming is a priority at
            CASINO Casino. We provide tools and resources to help you gamble
            responsibly. We offer a variety of secure payment methods and ensure
            seamless transactions. All payment processes are encrypted and
            compliant with industry standards. Our professional customer support
            team is available 24/7 to assist you with any questions or issues
            you may have.
          </p>
        </div>
      </div>
    </footer>
  );
};
