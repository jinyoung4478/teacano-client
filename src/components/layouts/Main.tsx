interface IMainProps {
   children: React.ReactNode;
}

export function Main({ children }: IMainProps) {
   return <main className="pt-[72px]">{children}</main>;
}
