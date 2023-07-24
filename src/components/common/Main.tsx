interface IMainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: IMainProps) => {
  return <main className="pt-[72px]">{children}</main>;
};
