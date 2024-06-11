

function Layout({ children }) {
  return (
    <div className="flex justify-center flex-col gap-20 flex-wrap items-center pt-5 ">
      {children}
    </div>
  )
}

export default Layout