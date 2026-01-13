export function Span({ children, color }) {
  return (
    <span className="font-bold" style={{ color: color }}>
      {children}
    </span>
  );
}

export function P({ children }) {
  return <p className="w-full text-[#838383] mt-4 ">{children}</p>;
}

export function SKillTitle({ children }) {
  return <h6 className=" text-[white] font-bold mt-4 ">{children}</h6>;
}

// Ajoute ici les autres petits composants utilitaires...
