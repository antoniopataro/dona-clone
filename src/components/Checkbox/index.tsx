import { CheckIcon } from "@heroicons/react/24/outline";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

function Checkbox({ checked, onChange }: Props) {
  return (
    <label className="flex h-fit w-fit">
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        className="peer pointer-events-none w-0 appearance-none opacity-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-auto relative aspect-square h-5 w-5 rounded-md bg-black/5 transition-colors hover:bg-black/10 peer-checked:bg-text sm:h-6 sm:w-6 sm:rounded-lg peer-checked:[&>*]:animate-pop-up peer-checked:[&>*]:opacity-100"
      >
        <CheckIcon className="absolute inset-0 m-auto w-2 animate-none stroke-[6px] text-foreground opacity-0 transition-opacity" />
      </div>
    </label>
  );
}

export default Checkbox;
