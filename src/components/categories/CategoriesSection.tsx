import { CoffeeIcon, LeftIcon } from "../../assets";

type Props = {
  text: string;
  extraStyle?: string;
};
function CategoriesSection({ text, extraStyle }: Props) {
  return (
    <section className="mt-[32px]">
      <div className="container">
        <h1
          className={`${extraStyle} font-bold text-primary-200 text-ms !leading-[21px]`}
        >
          {text}
        </h1>
        <div className="grid grid-cols-1">
          {[
            ...Array(6)
              .fill(0)
              .map((_, inx) => (
                <a href=""
                  className="py-2 px-3 border-b col-span-1 flex items-center gap-[10px] border-[#F1F1EE]"
                  key={inx}
                >
                  <img
                    className="rounded-[8px]"
                    src="https://placehold.co/120x80"
                    alt=""
                  />
                  <div className="flex flex-col h-full justify-between w-full">
                    <h1 className="font-semibold text-[20px]">Kafelar</h1>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[7px]">
                        <CoffeeIcon />
                        <span>12</span>
                      </div>
                      <div className="size-[36px] flex items-center justify-center border rounded-full">
                        <LeftIcon/>
                      </div>
                    </div>
                  </div>
                </a>
              )),
          ]}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
