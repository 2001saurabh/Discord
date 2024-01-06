const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-neutral-100 h-full flex m-auto items-center justify-center  ">
      {children}
    </div>
  );
};

export default AuthLayout;
